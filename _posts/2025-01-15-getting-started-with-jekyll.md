---
layout: post
title: "Getting Started with Jekyll"
date: 2025-01-15
author: "John Doe"
categories: ["Jekyll", "Web Development"]
tags: ["jekyll", "static-site", "github-pages"]
excerpt: "Learn how to set up and deploy your first Jekyll site. This guide covers everything from installation to deployment on GitHub Pages."
image: "/assets/images/blog/jekyll-intro.jpg"
---

Jekyll is a powerful static site generator that transforms your plain text into static websites and blogs. It's perfect for personal sites, project documentation, and blogs. In this guide, we'll walk through setting up your first Jekyll site.

## What is Jekyll?

Jekyll is a Ruby-based static site generator that takes your content written in Markdown, processes it through templates, and spits out a complete static website ready to be served. It's the engine behind GitHub Pages, which means you can host your Jekyll site for free.

## Installation

First, you'll need to have Ruby installed on your system. Jekyll requires Ruby version 2.5.0 or higher.

```bash
# Check your Ruby version
ruby --version

# Install Jekyll and Bundler
gem install jekyll bundler
```

## Creating Your First Site

Creating a new Jekyll site is straightforward:

```bash
jekyll new my-awesome-site
cd my-awesome-site
bundle install
bundle exec jekyll serve
```

Visit `http://localhost:4000` to see your site running locally.

## Understanding the Structure

A typical Jekyll site has the following structure:

```
.
├── _config.yml
├── _posts/
├── _layouts/
├── _includes/
├── _sass/
├── assets/
└── index.html
```

- `_config.yml`: Configuration file for your site
- `_posts/`: Your blog posts go here
- `_layouts/`: HTML templates for your pages
- `_includes/`: Reusable components
- `_sass/`: SCSS stylesheets
- `assets/`: CSS, JavaScript, and images

## Writing Your First Post

Create a new file in `_posts/` with the format `YYYY-MM-DD-title.md`:

```markdown
---
layout: post
title: "My First Post"
date: 2025-01-15
---

This is my first Jekyll post!
```

## Deployment

The easiest way to deploy a Jekyll site is through GitHub Pages:

1. Create a new repository on GitHub
2. Push your Jekyll site to the repository
3. Go to Settings > Pages
4. Select your source branch
5. Your site will be live at `username.github.io/repository-name`

## Conclusion

Jekyll is an excellent choice for building static websites. It's simple, fast, and integrates seamlessly with GitHub Pages. Start building your site today!

