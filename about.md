---
layout: page
title: "About Me"
description: "Learn more about my background, skills, and experience"
hero:
  title: "Hello"
  subtitle: "Hope you like the cellular automaton background :)"
  alignment: center
---

## My Story

My journey began in Biomedical Engineering where I set out on a career path towards building brain computer interfaces (neural engineering) obtaining both a **Bachelor of Science** followed by a **Masters of Engineering**. Towards the end of my degree I discovered the power and beauty of mathematical abstraction. After working briefly in industry at Thermo Fisher Scientific, I decided to retrain in mathematics where I majored in statistics obtaining a **Graduate Diploma in Mathematics**. This gave me a firm and rigorous understanding of all the math that I was using in my engineering degree. I then deferred my mathematics studies for over a year by starting a **Doctor in Philosophy** working simultaneously for a deep-tech start up. Ultimately, I decided the Industry PhD was not for me.

Now I am trying to transition my career towards being a software engineer or machine learning engineer or data scientist. My extensive academic studies allows me to wear many hats and adapt to different roles at all stages of the stack. I developed my skills in full stack web development through independent projects as well as hackathons and classes I undertook during my undergraduate **Diploma in Informatics** (pre-GPT era). 

I have just recently completed by GDip, sharpening my skills in data engineering. I am now looking for opportunities to build seamless digital experiences and high-performance data pipelines that empower users with the wealth of data we have about our world. My goal is to make data more accessible and interpretable. I value authenticity and technical precision in my work. I am highly curious and I love learning and am constantly updating my posterior and building upon the framework of knowledge that I have. 

<br/>

## Skills & Expertise

<div class="skills-card-grid-wrapper">
<div class="card-grid" style="margin-top: 2rem;">
{% for skill_category in site.data.skills %}
    <div class="card" style="display: flex; flex-direction: column;">
        <div style="display: flex; justify-content: center; margin-bottom: 1rem;">
            <i class="{{ skill_category.icon }}" style="color: #61cf5a; font-size: 2rem;"></i>
        </div>
        <h3 class="card-title" style="margin: 0 0 1rem 0; text-align: center;">{{ skill_category.title }}</h3>
        <ul style="list-style: none; padding: 0; margin: 0; flex: 1;">
            {% for skill in skill_category.skills %}
            <li style="margin-bottom: 0.75rem;"><strong>{{ skill.name }}</strong>: {{ skill.description }}</li>
            {% endfor %}
        </ul>
    </div>
{% endfor %}
</div>
</div>

<br/>

## Experience

<div class="experience-list">
{% for experience in site.data.experience %}
    <div class="experience-item">
        <div class="experience-header">
            <div class="experience-icon-wrapper">
                <i class="{{ experience.icon }} experience-icon"></i>
            </div>
            <div class="experience-title-wrapper">
                <h3 class="experience-title">{{ experience.title }}</h3>
                <p class="experience-company">{{ experience.company }} | {{ experience.period }}</p>
            </div>
        </div>
        <ul class="experience-responsibilities">
            {% for responsibility in experience.responsibilities %}
            <li>{{ responsibility }}</li>
            {% endfor %}
        </ul>
    </div>
{% endfor %}
</div>

<br/>

## Education

<div class="education-card-grid-wrapper">
<div class="card-grid">
{% for education in site.data.education %}
    <div class="card">
        <div class="education-icon-container">
            <i class="{{ education.icon }} education-icon"></i>
        </div>
        <h3 class="card-title">{{ education.degree }}</h3>
        <p class="education-institution">{{ education.institution }}</p>
        <div class="education-badges">
            <span class="education-badge">{{ education.period }}</span>
            {% if education.status == "Completed" %}
            <span class="education-status-completed">✓ Completed</span>
            {% elsif education.status == "Incomplete" %}
            <span class="education-status-incomplete">Incomplete</span>
            {% elsif education.status == "Deferred" %}
            <span class="education-status-deferred">Deferred</span>
            {% endif %}
        </div>
        <ul class="education-details">
            {% for detail in education.details %}
            <li class="education-detail-item">• {{ detail }}</li>
            {% endfor %}
        </ul>
    </div>
{% endfor %}
</div>
</div>

<br/>

## Other Certifications

- a 
- b 
- c 

