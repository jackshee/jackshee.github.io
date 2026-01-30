---
layout: page
title: "Services"
description: "What I can help you with"
hero:
  title: "Services"
  subtitle: "How I can help bring your ideas to life"
  alignment: center
---

I offer a range of web development and design services to help you achieve your goals. Here's what I can do for you:

<div class="card-grid" style="margin-top: 3rem;">
{% for service in site.data.services %}
<div class="card">
    <div class="card-icon">
        <i class="{{ service.icon }}"></i>
    </div>
    <h3 class="card-title">{{ service.title }}</h3>
    <p class="card-description">{{ service.description }}</p>
</div>
{% endfor %}
</div>

## Why Work With Me?

- **Quality Code**: Clean, maintainable, and well-documented code
- **Modern Technologies**: Using the latest tools and best practices
- **Responsive Design**: Mobile-first approach ensuring your site works everywhere
- **Fast Delivery**: Efficient workflow and timely project completion
- **Ongoing Support**: Available for maintenance and updates after launch

## Let's Discuss Your Project

Ready to get started? [Get in touch](/contact) and let's discuss how I can help bring your vision to life!

