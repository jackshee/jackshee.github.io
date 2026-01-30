---
layout: page
title: "Blog"
description: "Thoughts, tutorials, and updates"
hero:
  title: "Blog"
  subtitle: "Latest posts and articles"
  alignment: center
---

<div class="post-list">
{% for post in site.posts %}
<article class="post-item">
    <h2 class="post-title">
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </h2>
    <div class="post-meta">
        <span class="post-date">
            <i class="fas fa-calendar"></i>
            {{ post.date | date: "%B %d, %Y" }}
        </span>
        {% if post.author %}
        <span class="post-author">
            <i class="fas fa-user"></i>
            {{ post.author }}
        </span>
        {% endif %}
        {% if post.categories %}
        <span class="post-categories">
            <i class="fas fa-tags"></i>
            {{ post.categories | join: ", " }}
        </span>
        {% endif %}
    </div>
    {% if post.excerpt %}
    <div class="post-excerpt">
        {{ post.excerpt }}
    </div>
    {% endif %}
    <a href="{{ post.url | relative_url }}" class="btn btn-primary" style="margin-top: 1rem;">Read More</a>
</article>
{% endfor %}
</div>

