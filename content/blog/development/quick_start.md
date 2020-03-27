---
title: 'Blog Guide'
date: 2019-5-31 16:21:13
category: 'development'
---

# Getting Started 😎

## 1. Create a Gatsby site.

```sh
# create a new Gatsby site using the blog starter
$ npx gatsby new my-blog-starter https://github.com/FFM-team/gatsby-starter-song
```

> If you are not using `npx`, following [Gatsby Getting Started](https://www.gatsbyjs.org/docs/quick-start)

```sh
$ npm install -g gatsby-cli
$ gatsby new my-blog-starter https://github.com/FFM-team/gatsby-starter-song
```

## 2. Start developing.

```sh
$ cd my-blog-starter/
$ npm start
# open localhost:8000
```

## 3. Add your content

You can write...

- contents to blog in `content/blog` directory.
- resume `content/__about` directory.

> With markdown syntax and some meta data

### Support script for creating new post


```sh
$ npm run post
```

## 4. Fix meta data

You can fix meta data of blog in `/gatsby-meta-config.js` file.

## 5. Publish with [netlify](https://netlify.com)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/FFM-TEAM/gatsby-starter-song)

:bulb: if you want to deploy github pages, add following script to package.json

```json
"scripts": {
    "deploy": "gatsby build && gh-pages -d public -b master -r 'git@github.com:${your github id}/${github page name}.github.io.git'"
}
```

# :memo: Write a post!

```
content
├── __about
└── blog
```

- You can register your resume on the web. (in `__about` directory)
- You can register your post. (in `blog` directory)

# 🧐 Customize!

## Gatsby config

```
/root
├── gatsby-browser.js // font, polyfill, onClientRender ...
├── gatsby-config.js // Gatsby config
├── gatsby-meta-config.js // Template meta config
└── gatsby-node.js // Gatsby Node config
```

## Structure

```
src
├── components // Just component with styling
├── layout // home, post layout
├── lib
│    ├── remark
│    │      └── prismPlugin.js
│    ├── styles
│    │    ├── media         
│    │    ├── palette       
│    │    ├── responsive.ts  
│    │    ├── transitions.ts
│    │    ├── utils.ts
│    │    ├── zIndexes.ts
│    ├── heading.ts
│    └── utils.ts
├── pages // routing except post: /(home), /about
├── static
├── lib
│     └── blog-post.tsx
├── utils
├── lib
└── templates
└── typography.css

```

## Style

You can customize color in `src/styles` directory.

```
│    ├── styles
│    │    ├── media         
│    │    ├── palette       
│    │    ├── responsive.ts  
│    │    ├── transitions.ts
│    │    ├── utils.ts
│    │    ├── zIndexes.ts
│    ├── heading.ts
│    └── utils.ts
```
> Welcome to gatsby-starter-song!
> Happy blogging! 👻

---

title: 'Welcome songc starter'
date: 2019-2-6 16:21:13
category: 'development'

---

![](./images/hello.png)

Welcome, Gatsby! This starter is full-package for your new blog!

## 1. Support Three frontmatter

1. title
2. date
3. category

## 2. Code highlighting

1. With [spoqa han sans](https://spoqa.github.io/spoqa-han-sans/ko-KR/) font
2. Support highlighting with [prism](https://github.com/PrismJS/prism)
   2-1. Use inline highlighting

```js{3}
import React from 'react'

const TEMPLATE = 'gatsby-starter-song'

class Foo extends React.Component {
  handleClick = val => {
    if (val === 'bar') {
      return 1
    } else if (val !== 'zoo') {
      return 2
    }
    console.log(`clicked`)
    return 3
  }

  render() {
    return <div>Welcome, Gatsby, ${TEMPLATE}</div>
  }
}
```

_code_

![](./images/code_example.png)

## 3. Support Markdown (h2)

1. With [spoqa han sans](https://spoqa.github.io/spoqa-han-sans/ko-KR/) font
2. Support header anchoring

### h3

#### h4

##### h5

> quote!

**bold** _italic_

## 4. Support emoji :rocket:

Based on [emojione](https://github.com/emojione/emojione) :pray:

## 5. Support light/dark mode

## 6. Support Link copy (not yet)

## 7. Comments feature

You can add comments feature by selecting one of them.

- [ ] Disqus
- [ ] utterances

## 8. Other features of this template

1. You can add resume to `/about`
2. Lazy rendering
3. Scroll restoration
4. Categorize posts
5. Offline caching with service worker (based gatsby)
6. Support GA(Google Analytics)

> Let's Start! [Go](https://github.com/FFM-TEAM/gatsby-starter-song)
