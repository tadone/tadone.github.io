---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Cloud Engineering Docs"
  text: "Personal engineering notes & cheatsheets"
  tagline: Cloud, Kubernetes, DevOps, Linux, and code references
  image:
    src: /hero.png
    alt: Cloud Engineering Docs
  actions:
    - theme: brand
      text: Cloud
      link: /cloud/
    - theme: alt
      text: Kubernetes
      link: /kubernetes/overview

features:
  - title: Cloud
    details: AWS and Azure notes and references
    link: /cloud/
  - title: Kubernetes
    details: Overview, kubectl, objects, security, and troubleshooting
    link: /kubernetes/overview
  - title: DevOps
    details: CI/CD, Git, Docker, databases, SQL, WebDev, and terminology
    link: /devops/docker
  - title: Python
    details: Setup, classes, and lists
    link: /python/
  - title: Linux
    details: Basics, interactive shell, Bash scripting, metrics, and tools
    link: /linux/linux_basics
  - title: Other
    details: HTTP, jq, Markdown, YAML/JSON, setup, and more
    link: /other/setup
---
