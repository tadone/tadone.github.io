title: hexo-theme-doc-seed
---

# hexo-theme-doc-seed

This project is a skeleton for a documentation website using [Hexo](https://hexo.io) and [hexo-theme-doc](https://github.com/zalando-incubator/hexo-theme-doc).   
You can use it to quickly bootstrap your documentation website.

The seed contains the required structure and files to use Hexo and the theme, plus dummy content to show the usage of the main features of the theme.

# Get started

## Requirements
To get started you need to have a couple of things installed:

* [NodeJS](https://nodejs.org/)
* [Git](https://git-scm.com/)

On Linux if there is ``Error: watch ENOSPC`` Run:

``echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p``

### Installing Hexo
Once all the requirements are installed, you can install Hexo with npm:
```bash
$ npm install -g hexo-cli
```

Now just clone `hexo-theme-doc-seed` repository:

```bash
$ git clone https://github.com/zalando-incubator/hexo-theme-doc.git <directory>
```

Go into the resulting directory and install dependencies:

```bash
$ npm install
```

Start the preview server locally with:

```
hexo s
```

> If you open your browser at http://localhost:4000 you should see the documentation website up and running.

## Deploy

Git
```bash
npm install hexo-deployer-git --save
```
Edit ``_config.yml``

```bash
deploy:
  type: git
  repo: git@github.com:yourname/yourRepo.git
  branch: gh-pages
# URL
## If your site is put in a subdirectory, set url as 'http://yoursite.com/child' and root as '/child/'
url: http://xxx.github.io/blog
root: /blog/
```
Make sure the ssh keys are set up with git and then run
```bash
hexo d
```
## Writing

Pages
To add pages to your documentation website, simply create new markdown files in your source folder, eg:
``source/lorem-ipsum.md``
```bash
---
title: Lorem Ipsum
---

# Lorem Ipsum

Lorem ipsum
```

Assuming that your website root is running at http://localhost:4000, the page will be available at http://localhost:4000/lorem-ipsum.html.

### Using Tags
In addition to markdown standard markup, Hexo uses special tags to add specific content into your pages, eg:

``source/lorem-ipsum.md``
```bash
{% youtube video_id %}
```
The tag youtube will include a youtube player in your page.

There are many [built-in](https://hexo.io/docs/tag-plugins.html) tags and more can be installed.

## Navigation
Navigation is fully customizable by updating the ``navigation.yaml`` file located in your ``source/_data`` folder.
Within that file you will describe how the **navigation/menu** links will be presented to the user.

Navigation entries are grouped by **category**.
There are two main navigation **categories**:

* **logo:** used to define the values for the logo in the top navigation bar
* **main:** used to define the values showed in the left sidebar

For each navigation item you **must** define a ``type`` and, depending on the type, other attributes such as ``text`` and/or ``path``.

Each navigation item can have a special property called ``children``, that, as you might have guessed, gives you the ability to “nest” navigation entries.

``source/_data/navigation.yaml example``
```bash
logo:
  text: My Documentation
  type: link
  path: index.html

main:
- text: PROJECTS
  type: label
- text: My Awesome Projects
  type: link
  path: projects/my-awesome-project.html
  children:
  - text: My Awesome Projects Page 1
    type: link
    path: projects/my-awesome-project-page-1.html
```
There are two types of navigation items:

* **label:** navigation item as a label (it’s not an anchor so it doesn’t need a path value)
* **link:** navigation item as a link

The ``path`` value for a link navigation item is just the markdown ``filepath``, but with ``.html`` as extension.

## More Informations

For more informations please visit the [user documentation website](https://zalando-incubator.github.io/hexo-theme-doc/).
