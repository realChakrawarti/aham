---
title: "SEO using microdata"
excerpt: "Improve SEO rankings using built-in HTML microdata tags"
date: "2024-05-09"
tags: ['SEO', 'HTML']
---

## What is SEO?
When you built your website, you likely created it with your users in mind, trying to make it easy for them to find and explore your content. One of those users is a search engine, which helps people discover your content. SEO (search engine optimization) is about helping search engines understand your content, and helping users find your site and make a decision about whether they should visit your site through a search engine.

Search engine optimization, or SEO, is the process of increasing the visibility of website pages on search engines in order to attract more relevant traffic.

### How search engines work?
- Crawling: Search engines crawl the web, following links from page to page and using sitemaps.
- Rendering: Search engines generate how the page will look using HTML, JavaScript and CSS information.
- Indexing: Search engines analyze the content and metadata of the pages it has discovered and add them to a database (though there’s no guarantee every page on your website will be indexed).
- Ranking: Complex algorithms look at a variety of signals to determine whether a page is relevant and of high-enough quality to show when searchers enter a query.

Crawlers follow rules. If you follow those rules closely when doing SEO for a website, you give the site the best chances of showing up among the first results, increasing traffic and possibly revenue (for e-commerce and ads).

Search engines give some guidelines for SEO, but big search engines keep result ranking confidential. SEO combines official search engine guidelines, empirical knowledge, and theoretical knowledge from science papers or patents.

## What is microdata?
Microdata is a [WHATWG](https://whatwg.org/) HTML specification used to nest metadata within existing content on web pages. Search engines benefit greatly from direct access to Microdata because it allows them to understand the information on web pages and provide more relevant results to users.

## How to mark up your content using microdata?
Your web pages have an underlying meaning that people understand when they read the web pages. But search engines have a limited understanding of what is being discussed on those pages. By adding additional tags to the HTML of your web pages—tags that say, "Hey search engine, this information describes this specific movie, or place, or person, or video"—you can help search engines and other applications better understand your content and display it in a useful, relevant way. Microdata is a set of tags, introduced with HTML5, that allows you to do this.

Imagine you have a page about the movie Avatar—a page with a link to a movie trailer, information about the director, and so on. Your HTML code might look something like this:

```html
<div>
 <h1>Avatar</h1>
 <span>Director: James Cameron (born August 16, 1954)</span>
 <span>Science fiction</span>
 <a href="../movies/avatar-theatrical-trailer.html">Trailer</a>
</div>
```

### `itemscope` and `itemtype`

To begin, identify the section of the page that is "about" the movie Avatar. To do this, add the `itemscope` element to the HTML tag that encloses information about the item, like this:

```html
<div itemscope>
  <h1>Avatar</h1>
  <span>Director: James Cameron (born August 16, 1954) </span>
  <span>Science fiction</span>
  <a href="../movies/avatar-theatrical-trailer.html">Trailer</a>
</div>
```

By adding `itemscope`, you are specifying that the HTML contained in the `<div>...</div>` block is about a particular item.

But it's not all that helpful to specify that there is an item being discussed without specifying what kind of an item it is. You can specify the type of item using the `itemtype` attribute immediately after the `itemscope`.

```html
<div itemscope itemtype="https://schema.org/Movie">
  <h1>Avatar</h1>
  <span>Director: James Cameron (born August 16, 1954)</span>
  <span>Science fiction</span>
  <a href="../movies/avatar-theatrical-trailer.html">Trailer</a>
</div>
```

This specifies that the item contained in the div is in fact a Movie, as defined in the schema.org type hierarchy. Item types are provided as URLs, in this case https://schema.org/Movie.

You will find here the full list of all the schema (The schemas are a set of 'types', each associated with a set of properties) types: https://schema.org/docs/full.html

### `itemprop`

What additional information can we give search engines about the movie Avatar? Movies have interesting properties such as actors, director, ratings. To label properties of an item, use the `itemprop` attribute. For example, to identify the director of a movie, add `itemprop="director"` to the element enclosing the director's name. (There's a full list of all the properties you can associate with a movie at https://schema.org/Movie.)

```html
<div itemscope itemtype ="https://schema.org/Movie">
  <h1 itemprop="name">Avatar</h1>
  <span>Director: <span itemprop="director">James Cameron</span> (born August 16, 1954)</span>
  <span itemprop="genre">Science fiction</span>
  <a href="../movies/avatar-theatrical-trailer.html" itemprop="trailer">Trailer</a>
</div>
```

Note that we have added additional `<span>...</span>` tags to attach the itemprop attributes to the appropriate text on the page. `<span>` tags don't change the way pages are rendered by a web browser, so they are a convenient HTML element to use with itemprop.

Search engines can now understand not just that it's a URL, but also that it's the URL for the trailer for the science-fiction movie Avatar, which was directed by James Cameron.

### Embedded items
Sometimes the value of an item property can itself be another item with its own set of properties. For example, we can specify that the director of the movie is an item of type Person and the Person has the properties `name` and `birthDate`. To specify that the value of a property is another item, you begin a new `itemscope` immediately after the corresponding `itemprop`.

```html
<div itemscope itemtype ="https://schema.org/Movie">
  <h1 itemprop="name">Avatar</h1>
  <div itemprop="director" itemscope itemtype="https://schema.org/Person">
  Director: <span itemprop="name">James Cameron</span> (born <span itemprop="birthDate">August 16, 1954</span>)
  </div>
  <span itemprop="genre">Science fiction</span>
  <a href="../movies/avatar-theatrical-trailer.html" itemprop="trailer">Trailer</a>
</div>
```

## Conclusion
SEO never ends. Search engines, user behavior and your competitors are always changing, which also means algorithms are continuously evolving to keep up. 

Websites change and move (and break) over time. Content gets stale. That, in combination with new breakthroughs in technology, the explosive rise of LLMs (Large Language Models: powerful AI models for generating text) and the sudden addition of generative AI content to search results.

Your processes should improve and become more efficient.

# References
- SchemaOrg documentation: https://schema.org/docs/gs.html
- Google's SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Search Engine Land website: https://searchengineland.com/guide/what-is-seo

