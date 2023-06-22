# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects. I decided to take up a personal challenge and build the projects on Frontend Mentor challenges as a way to improve my skills in Vanilla Javascript (which I am more well-versed with) and build up on my understanding of ReactJS. So, my approach is that for each challenge, I build the project in Vanilla JS and then in React JS.

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
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

1. With this project, I took some time to check out the difference between the _ and body selectors when doing the CSS reset. I had been brusihing over this aspect but finally understood that the _ selector is known as the universal selector. It represents ALL elements in the document and therefore styles under it will apply to each and every element.

the 'body' selector on the other hand specifically targets the <body> element and the elements within it.

```css
*,
*::before,
*::after {
	box-sizing: border-box;
	margin: 0;
}

body {
	line-height: 1.5;
	font-size: 18px;
}
```

2. In the past four projects I have done on Front-end Mentor, the feedback from the accessibility report always puzzled me - that the 'Page should contain a level-one heading'. Helpful feedback from one (@Abdul Khalid)[https://www.frontendmentor.io/profile/0xAbdulKhalid] showed me how to go about it.
   _The need to add a level-one heading to improve accessibility by reading aloud the heading by screen readers, you can achieve this by adding a sr-only class to hide it from visual users (it will be useful for visually impaired users)_

Thus, I added this to this challenge as below, where sr- is for screen reader. I am not sure if this is the correct way to write it with BEM naming convention:

```html
<h1 class="main__heading--sr">Results Summary</h1>
```

```css
.main__heading--sr {
	/* clips elemet to a rectangle coordinates set to 0, hides it */
	clip: rect(0 0 0 0);
	/* create a rectangular shape inset 50% from all sides */
	clip-path: inset(50%);
	/* set height to 1px, extremely thin, almost invisible */
	height: 1px;
	/* hide content that spills over from the 1px height */
	overflow: hidden;
	/* position element absolutely in body */
	position: absolute;
	/* prevent line breaks */
	white-space: nowrap;
	/* similar to height, narrow it horizontally */
	width: 1px;
}
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Samoina Lives](https://samoinalives.wordpress.com/)
- Frontend Mentor - [Samoina](https://www.frontendmentor.io/profile/samoina)
- Twitter - [Samoina](https://www.twitter.com/samoina)

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**

```

```
