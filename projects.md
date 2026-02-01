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

<!-- Year Filter -->
<div class="project-filter" style="margin-top: 2rem; margin-bottom: 2rem; display: flex; flex-wrap: wrap; gap: 0.5rem; justify-content: center; align-items: center;">
    <button class="filter-btn active" data-year="all" style="padding: 0.5rem 1rem; background-color: rgba(97, 207, 90, 0.1); color: #61cf5a; border: 1px solid rgba(97, 207, 90, 0.3); border-radius: 0.25rem; cursor: pointer; font-size: 0.875rem; transition: all 0.3s ease;">All</button>
    {% assign years = site.data.projects | map: 'year' | uniq | sort | reverse %}
    {% for year in years %}
    <button class="filter-btn" data-year="{{ year }}" style="padding: 0.5rem 1rem; background-color: rgba(97, 207, 90, 0.1); color: #61cf5a; border: 1px solid rgba(97, 207, 90, 0.3); border-radius: 0.25rem; cursor: pointer; font-size: 0.875rem; transition: all 0.3s ease;">{{ year }}</button>
    {% endfor %}
</div>

<div class="card-grid" style="margin-top: 3rem;">
{% for project in site.data.projects %}
<div class="card project-card" data-year="{{ project.year }}">
    {% if project.image %}
    <img src="{{ project.image }}" alt="{{ project.title }}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 0.5rem; margin-bottom: 1rem;">
    {% endif %}
    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.5rem;">
        <h3 class="card-title" style="margin: 0; flex: 1;">{{ project.title }}</h3>
        {% if project.year %}
        <span class="project-year" style="padding: 0.25rem 0.5rem; background-color: rgba(97, 207, 90, 0.1); color: #61cf5a; border-radius: 0.25rem; font-size: 0.75rem; font-weight: 500; white-space: nowrap; margin-left: 0.5rem;">{{ project.year }}</span>
        {% endif %}
    </div>
    <p class="card-description">{{ project.description }}</p>
    {% if project.technologies %}
    <div style="margin-top: 1rem;">
        {% for tech in project.technologies %}
        <span style="display: inline-block; padding: 0.25rem 0.75rem; background-color: rgba(97, 207, 90, 0.1); color: #61cf5a; border-radius: 0.25rem; font-size: 0.875rem; margin-right: 0.5rem; margin-bottom: 0.5rem;">{{ tech }}</span>
        {% endfor %}
    </div>
    {% endif %}
    {% if project.url %}
    <a href="{{ project.url }}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="margin-top: 1rem;">View Project</a>
    {% endif %}
</div>
{% endfor %}
</div>


