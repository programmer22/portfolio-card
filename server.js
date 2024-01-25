const express = require('express');
const fs = require('fs');
const { marked } = require('marked');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;  // Updated to use the PORT environment variable

// Serve static files from your main project folder
app.use(express.static(path.join(__dirname, '..', 'assets')));

// Serve the main HTML file for the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// Route for blog posts
app.get('/blog/:postName', (req, res) => {
    const postName = req.params.postName;

    // Path to your markdown files and template file
    const markdownFilePath = path.join(__dirname, '..', 'blog', `${postName}.md`);
    const templateFilePath = path.join(__dirname, '..', 'template', 'template.html');

    fs.readFile(markdownFilePath, 'utf8', (err, markdownData) => {
      if (err) {
        return res.status(404).send('Post not found');
      }

      const htmlContent = marked(markdownData);

      fs.readFile(templateFilePath, 'utf8', (templateErr, templateData) => {
        if (templateErr) {
          return res.status(500).send('Error reading template file');
        }

        let finalHtml = templateData.replace('{{title}}', postName)
                                     .replace('{{content}}', htmlContent);

        res.send(finalHtml);
      });
    });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

