# Frontend Mentor - Blogr landing page solution

This is a solution to the [Blogr landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blogr-landing-page-EX2RLAApP). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Your challenge is to build out this landing page and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

<img src="./screenshots/blogr-mobile.jpg" alt="Mobile screenshot" height="1000"> </img>
<img src="./screenshots/blogr-laptop.jpg" alt="Laptop screenshot" width="350"> </img>
<img src="./screenshots/blogr-4k.jpg" alt="4K screenshot" width="350"> </img>

### Links

- Solution URL: [Github Repo](https://github.com/ranker-M/ranker-M.github.io/tree/main/blogr-landing-page)
- Live Site URL: [Live Demo](https://ranker-m.github.io/blogr-landing-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [Sass](https://sass-lang.com/) - Css Preprocesser
- [Gulp](https://gulpjs.com) - JavaScript toolkit to build systems
- [Figma](https://www.figma.com) - interface design tool

### What I learned

I used Sass to create a website from scratch with full of custom components in a first time and I made many mistakes and of course I learned a lot. First and probably my biggest mistake was writing every class nested. I tried to make use of nested classes feature of Sass to create more sustainable and tidy code but it didn't go like expected. It was very hard to find the certain components in the documentation after some time and it was much more harder to change these components according to screen sizes. Accessing and changing elements without using nested classes also become impossible since cascading algorithm score was much more higher for nested classes rather than normal class declerations. It was itself a very informative experience for me. Creating partials for different components was very useful for these kind of problems. I knew where to look when I wanted to change components that I created separate file to style it. So the lessons I took from these problems were planning component and file structure more considerately before starting coding, using nested classes for same elements and their pseudo classes, creating different files(partials) for elements that takes much space in the document, footer-navbar etc., and creating the page component by component. It is way easer than creating a whole part of the page and then trying to fix it.

The second problem I faced was mobile first approach I tried to use while developing this page. I literally created mobile version of the page first and then changed it to desktop version and it was an offline torture. I realized that, even if I wanted to create mobile version first I had to think about html structure of dektop version and fit it to the mobile version with css. It was probably a rookie mistake and I didn't understand what mobile-first approach is properly but I have a better understanding or my my own doing it right now. I will first approach the page like I am creating desktop version(final version) and write semantic html tags for it and then I will create mobile version with them. Creating mobile version while not caring about desktop version is not very healthy and not helping the developing process. I had to rewrite almost every decleration I wrote for mobile when I was making desktop version. It is not sustainable and efficient. I take it like thinking about desktop version and mobile version at the same time is important but in the end mobile version is almost as simple as ordered elements so desktop version is much more important one here. With this approach, I will still write mobile styles first and after that dektop styles. So, this is more proper way to do it I think.

### Continued development

As I mentioned previous section, I will try to be more planned before starting coding and I will create page element by element. I mean creating simpler elements before complex ones. Such as, button-menu-navbar-cover section and etc. I will also use mobile first approach again with considering points I stated last section.

## Author

- Linkedin - [Meriç Gündüz](https://www.linkedin.com/in/meriç-gündüz-198a99186/)
- Frontend Mentor - [@ranker-M](https://www.frontendmentor.io/profile/ranker-M)
- Github -[@ranker-M](https://github.com/ranker-M)
