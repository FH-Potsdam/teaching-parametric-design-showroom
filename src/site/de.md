---
layout: layouts/home.njk
title: Home
locale: de
---

<h1>Parametric Design</h1>

<h2>Tasks</h2>
<ul class="tasks">
{%- for t in tasks %}
  <li>
    <a href="tasks/{{ t.id | slug }}/">{{ t.title }}</a>
  </li>
{%- endfor %}
</ul>