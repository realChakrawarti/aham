---
title: '10 less known HTML tags'
excerpt: "Let's look at some less known HTML tags and their uses"
date: '2024-05-12'
tags: ['html']
---

## HTML Tags

HTML tags and elements are sometimes recognized as the same thing. **But it’s not**.

HTML elements and tags have subtle differences that many people are unaware of. HTML tags are the common building blocks of HTML pages. It tells the browser how to present content to the user. A tag begins with a `<` bracket and ends with a `>` bracket.

In HTML, most tags exist in pairs. A tag has a beginning part and an ending part. They are similar, except there is a `/` character after the opening parenthesis in the closing part.

- Opening tag: `<TagName>`
- Closing tag: `</TagName>`

## HTML Element

HTML elements include start tags, content, and end tags. HTML elements are part of a website. 

Let’s say you created a `<div>` block and entered some text into it. A `<div>` filled with text then becomes a component of the HTML page. 

A **tag**, along with the **content** within it, becomes a **component** and an **HTML element**. This will be rendered and displayed to the user.

### Data Tag

The `<data>` tag is used to add a machine-readable translation of a given content.

```html
<ul>
  <li><data value="21053">Cherry Tomato</data></li>
  <li><data value="21054">Beef Tomato</data></li>
  <li><data value="21055">Snack Tomato</data></li>
</ul>
```

<hr />

### Datalist Tag

It specifies a list of predefined options for an `<input />` element that used to provide a “autocomplete” feature for `<input />` elements. The `<datalist>` id attribute should be equal to the `<input />` element’s list attribute

```html
<label for="browser">Search list of browsers and select: </label>
<input list="browsers" name="browser" id="browser" />
<datalist id="browsers">
  <option value="Edge"></option>
  <option value="Firefox"></option>
  <option value="Chrome"></option>
  <option value="Opera"></option>
  <option value="Safari"></option>
</datalist>
```

<hr />

### Definition Tags

The `<dd>` definition description tag is used with `<dt>` definition term and inside `<dl>` definition list.

```html
<dl>
  <dt>Coffee</dt>
  <dd>Black hot drink</dd>
  <dt>Milk</dt>
  <dd>White cold drink</dd>
</dl>
```

<hr />

### Header Group Tag

The `<hgroup>` tag is used to surround a heading and one or more `<p>` elements. To mark that the heading and the paragraph are related.

```html
<hgroup>
  <h3>Norway</h3>
  <p>The land with the midnight sun.</p>
</hgroup>
```

<hr />

### Map Tag

`<map>` is used to define an image map. An image map is an image with clickable areas.

The required name attribute of the `<map>` element is associated with the `<img />`'s usemap attribute and creates a relationship between the image and the map. The `<map>` element contains a number of `<area>` elements, that defines the clickable areas in the image map.

```html
<img
  src="https://www.w3schools.com/tags/workplace.jpg"
  alt="Workplace"
  usemap="#workmap"
  width="400"
  height="379"
/>

<map name="workmap">
  <area
    shape="rect"
    coords="34,44,270,350"
    alt="Computer"
    href="computer.htm"
  />
  <area shape="rect" coords="290,172,333,250" alt="Phone" href="phone.htm" />
  <area
    shape="circle"
    coords="337,300,44"
    alt="Cup of coffee"
    href="coffee.htm"
  />
</map>
```

<hr />

### Mark Tag

`<mark>` text that should be marked or highlighted.

```html
Do not forget to buy <mark> milk </mark> today.
```

<hr />

### Meter Tag

Used to display a scalar value within a given range (gauge). NOT to be confused with `<progress>`.

```html
<label for="disk_c">Disk usage C:</label>
<meter id="disk_c" value="2" min="0" max="10">2 out of 10</meter>
<br />
<label for="disk_d">Disk usage D:</label>
<meter id="disk_d" value="0.6">60%</meter>
```

<hr />

### Object Tag

A container for an external resource. The external resource can be a web page, a picture, a media player, or a plug-in application.

The `<object>` tag was originally designed to embed browser Plug-ins.

> To embed a picture, it is better to use the `<img />` tag.
> To embed HTML, it is better to use the `<iframe>` tag.
> To embed video or audio, it is better to use the `<video />` and `<audio />` tags.

```html
<!-- Image -->
<object
  data="https://www.w3schools.com/tags/pic_trulli.jpg"
  width="300"
  height="200"
></object>
```

<hr />

### Short quotation Tag

`<q>` defines a short quotation. Browsers normally insert quotation marks around the quotation.

```html
<p>
  WWF's goal is to:
  <q>Build a future where people live in harmony with nature.</q>
  We hope they succeed.
</p>
```

### Delete and Insert Tags

`<del>` tag shows text that has been deleted from a document. Browsers will usually strike a line through deleted text.

`<ins>` element shows text that has been inserted into a document. Browsers will usually underline inserted text.

```html
<p>My favorite color is <del>blue</del> <ins>red</ins>!</p>
```

<hr />
  
### Bonus: Template Tag
`<template>` hold some content that will be hidden when the page loads.

The content inside `<template>` can be rendered later with a JavaScript.

You can use the `<template>` tag if you have some HTML code you want to use over and over again, but not until you ask for it. To do this without the `<template>` tag, you have to create the HTML code with JavaScript to prevent the browser from rendering the code.

```html
<div id="template-1-container"></div>
<button id="show-btn" onclick="showContent()">Add hidden Template</button>

<template id="template-1">
  <h2>Flower</h2>
  <img
    src="https://www.w3schools.com/tags/img_white_flower.jpg"
    width="214"
    height="204"
  />
</template>
```

And the corresponding JavaScript:

```js
function showContent() {
  let showBtn = document.getElementById('show-btn');
  let templateContent = document.getElementById('template-1');
  let templateContainer = document.getElementById('template-1-container');
  let clonedTemplate = templateContent.content.cloneNode(true);
  templateContainer.appendChild(clonedTemplate);
  showBtn.style.display = 'none';
}
```

## Demo:

<p class="codepen" data-height="800" data-theme-id="dark" data-default-tab="result" data-slug-hash="zYQxzqW" data-editable="true" data-user="realChakrawarti" style="height: 100%; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: none; padding: 0px;">
  <span>See the Pen <a href="https://codepen.io/realChakrawarti/pen/zYQxzqW">
  Less known HTML5</a> by Anupam Chakrawarti (<a href="https://codepen.io/realChakrawarti">@realChakrawarti</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## References

- W3Schools HTML Elements: https://www.w3schools.com/tags/default.asp
- HTML: The Utimate Guide by Sufyan Bin Uzayr: https://www.taylorfrancis.com/books/mono/10.1201/9781003357537/html-sufyan-bin-uzayr
