# README - Coding-and-ux-Amy-Pridding-21104416 

## **Accessibility features**
- I have added a Dark Mode widget to the page to allow users to toggle between the light and dark mode on the site. Having both options available enables users to choose which option works best for them and aids the way they read online. Dark mode can be beneficial as there’s less screen glare aggravating the user’s eyes whereas, in light mode, the screen can light up their faces. Furthermore, dark mode can be effective in increasing the user’s focus as the screen content would stand out more against the black. This can be accessed from the floating switch button at the bottom right of the site, or via a keyboard (Ctrl + Alt + D on windows and Ctrl + option + D on Mac). This gives the user a choice, making the site is more usable and delightful for them to experience.
- There is an option to change language available for users at the top right of the page. This makes the website accessible for a wider range of users those first language may not be English. 
- The website is screen reader compatible and has been tested on both Mac and windows. Plus it allows for keyboard-only navigation. 
- Colour contrasts are WCAG AAA compliant

![Large text WCAG AAA compliant](image.jpg) ![Normal text WCAG AAA compliant](image.jpg)
- All images have alt tags
- Video has closed captions
- Content structured using HTML5 (Using nav, figure/figcaption and label tags are examples of this)
- The government has official advice on how to build websites catering for different disabilities, [the posters can be found here](https://github.com/UKHomeOffice/posters/blob/master/accessibility/dos-donts/posters_en-UK/accessibility-posters-set.pdf), as you can see from these posters the previously mentioned points show how the site is accessible for all users no matter what disability they may have. 
- I used Lighthouse to analyse the current accessibility. Lighthouse performs tests on elements such as buttons and links to see easily the page can be used by people with disabilities. The audit will produce a list of these tests results so you can see which areas of the page can be improved to become more accessible to users. Examples of tests ran are checks for alt tags on images, appropriate descriptions on links and visual content being compatible with screen readers. As you can see, the website passed all the tests and even got a score of 100 on accessibility.

![Lighthouse generated report](image.jpg)

## **Code considerations**
- I used this site to look at examples of good coding techniques https://code.tutsplus.com/tutorials/top-15-best-practices-for-writing-super-readable-code--net-8118
- I used comments in the code to explain what functions do and what certain sections of HTML are for, making it easier to identify what section you’re looking at.
- Consistent indentation makes it a lot more readable, i.e.:

`<body>`

&nbsp;&nbsp;&nbsp;&nbsp;`<h1>Hello</h1>`

`</body>`

- Simply leaving empty lines to split code into obvious blocks makes it more readable, here’s an example:

![Code split into blocks](image.jpg)
- I had a consistent naming scheme, all CSS classes and IDs use hyphens to separate each word (e.g. dark-mode) and all JavaScript names use camel case which is the best practice (camel case is where the name is all one long word, you start with a lower case and use an upper case to show a new word has started like this: myFunctionName)
- The code doesn’t violate the DRY principle (DRY stands for don’t repeat yourself), in the JavaScript I made function for adding and removing CSS classes to lists of HTML elements, so rather than using the same code repeatedly, it just calls the function each time 

![JavaScript DRY principle](image.jpg)
- Another simple technique for readable code is using meaningful names for CSS classes and JavaScript variable, it should be obvious to a person what something does when looking at the name of it for the first time
- Code passes HTML and CSS validation with no errors

![Website passing HTML validator](image.jpg)

![Website passing CSS validator](image.jpg)
