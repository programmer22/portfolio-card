---
cover: ![Cover Image](assets/images/blog-1.jpg)
---
# Beginner's Guide to Creating a Webpage with HTML, CSS, and JavaScript
author: Nick Lopacki
date: January 25, 2024

# Beginner's Guide to Creating a Webpage with HTML, CSS, and JavaScript

Welcome to our beginner's guide on creating a simple webpage using HTML, CSS, and JavaScript. This tutorial is designed for those who are just starting out in web development.

## Understanding the Basics

Before diving into the code, it's important to understand the role of HTML, CSS, and JavaScript in web development.

- **HTML (HyperText Markup Language)** is the backbone of any website. It's used to create the basic structure and content of a webpage.
- **CSS (Cascading Style Sheets)** is used for styling the HTML elements. It allows you to add colors, fonts, layouts, and more.
- **JavaScript** is a programming language that enables interactive features on your website such as animations, form validations, and dynamic content changes.

## Creating the HTML Structure

Let's start by creating the basic structure of our webpage with HTML.

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Simple Webpage</title>
</head>
<body>
    <header>
        <h1>Welcome to My Webpage</h1>
    </header>
    <section>
        <h2>About Me</h2>
        <p>This is a paragraph about me.</p>
    </section>
    <footer>
        <p>Copyright © 2024 My Website</p>
    </footer>
</body>
</html>
```

# Adding Style with CSS
Now, lets add some styles to our webpage using CSS. We will add the CSS directly in the head section of our HTML file for simpilicity.

```css
<head>
    <title>My Simple Webpage</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        header {
            background-color: #444;
            color: white;
            text-align: center;
            padding: 1em 0;
        }
        section {
            margin: 2em 5%;
        }
        footer {
            background-color: #444;
            color: white;
            text-align: center;
            padding: 1em 0;
            position: fixed;
            bottom: 0;
            width: 100%;
        }
    </style>
</head>

```

