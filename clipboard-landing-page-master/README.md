# Frontend Mentor - Clipboard landing page solution

This is a solution to the [Clipboard landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/clipboard-landing-page-5cc9bccd6c4c91111378ecb9). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

The challenge is to build out Clipboard landing page and get it looking as close to the design as possible. Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

<img src="./images/Clipboard-landing-page-desktop.jpg" alt="Solution Desktop screenshot" width="300"> </img>
<img src="./images/Clipboard-landing-page-active.jpg" alt="Solution Desktop Active screenshot" width="300"> </img>
<img src="./images/Clipboard-landing-page-mobile.jpg" alt="Solution Mobile screenshot" height="800"> </img>

### Links

- Solution URL: [Github repo](https://github.com/ranker-M/ranker-M.github.io/tree/main/clipboard-landing-page-master)
- Live Site URL: [Live demo](https://ranker-m.github.io/clipboard-landing-page-master/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [Sass](https://sass-lang.com) - Css Preprocessor
- [Gulp](https://gulpjs.com) - JavaScript toolkit to build systems
- [Figma](https://www.figma.com) - interface design tool

### What I learned

In this project I learned how to use most of the Scss features such as mixins, partials, extend, loops, functions, variables and others.

I created a library for utilities and other most used css declarations to experience for loops and functions. I also created different classes for different breakpoints so I can change these library classes for different screen sizes. I faced some problems while using same classes for different breakpoints. I had to rearrange the flow of my document so classes override each other. Otherwise small breakpoints were always override bigger breakpoints since they were created after the bigger breakpoints, cascading algorithm gave small breakpoint classes bigger priority in the document. I learned a lot about creating a library for css by using Sass while experimenting this project.

I also used Gulp javascript tool to convert Sass code into Css code. It gave me valuable insights about this proccess. Rather than using Visual Studio extensions to solve this problem, I learned much more with using this manually.

I used Figma to understan sizes of components and texts in the design images. It was very helpful to me to create a pixel-perfect page.

### Continued development

I want to improve structure of the projects I made. I will focus on mobile first and atomic design approach while developing pages. It is important to create clean file structure and write reusable css classes. Also, I will try to increase accessibility of pages by using rem and em instead of pixels in the future.

### Useful resources

- [Coder Coder](https://www.youtube.com/c/TheCoderCoder/videos) - This channel helped me a lot to understand how to use sass while developing front-end pages. It gave valuable insights I have never seen before such as using rem instead of pixels or how to use scss without creating generic classes.
- [Net Ninja](https://www.youtube.com/c/TheNetNinja) - This channel helped me to understand basics of Scss and how to use it to create css frameworks such as Bootstrap or Tailwind. I understood frameworks and their structure better with this channel.

## Author

- Linkedin - [Meriç Gündüz](https://www.linkedin.com/in/meriç-gündüz-198a99186/)
- Frontend Mentor - [@ranker-M](https://www.frontendmentor.io/profile/ranker-M)
