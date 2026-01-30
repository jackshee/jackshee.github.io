---
layout: page
title: "Projects"
description: "A showcase of my recent work and side projects"
hero:
  title: "My Projects"
  subtitle: "Explore my portfolio of work"
  alignment: center
---

Here's a collection of projects I've worked on, ranging from web applications to open-source contributions.

<div class="card-grid" style="margin-top: 3rem;">
{% for project in site.data.projects %}
<div class="card">
    {% if project.image %}
    <img src="{{ project.image }}" alt="{{ project.title }}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 0.5rem; margin-bottom: 1rem;">
    {% endif %}
    <h3 class="card-title">{{ project.title }}</h3>
    <p class="card-description">{{ project.description }}</p>
    {% if project.technologies %}
    <div style="margin-top: 1rem;">
        {% for tech in project.technologies %}
        <span style="display: inline-block; padding: 0.25rem 0.75rem; background-color: rgba(59, 130, 246, 0.1); color: #3b82f6; border-radius: 0.25rem; font-size: 0.875rem; margin-right: 0.5rem; margin-bottom: 0.5rem;">{{ tech }}</span>
        {% endfor %}
    </div>
    {% endif %}
    {% if project.url %}
    <a href="{{ project.url }}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="margin-top: 1rem;">View Project</a>
    {% endif %}
</div>
{% endfor %}
</div>

