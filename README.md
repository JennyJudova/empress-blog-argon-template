# empress-blog-argon-template

This is a template designed to work with [empress-blog](https://github.com/empress/empress-blog) and is a fully-functional, static site implementation of the
[Argon Template](https://github.com/zutrinken/attila) built on EmberJS with fully working out of the
box SEO friendly output. It supports being hosted on Github Pages, AWS S3 or any other static site
hosting solution.

For more information on how to use this system [read the empress-blog documentation](https://github.com/JennyJudova/empress-blog-argon-template) but if you want to get started straight away, try the quick start below.


You do not need to be a web developer to be able to use this system. You just write markdown files
and the rest of the work is performed by EmberJS' build system.

## Quick Start

```
npm init ember-app super-blog

cd super-blog

ember install empress-blog empress-blog-argon-template
```

It will ask you if you want to update the `index.html` file and you should say yes 👍

If you want to see the blog system running on your local machine just run `npm start` and you will
be able to navigate to  [http://localhost:4200](http://localhost:4200) to see the blog in action.
