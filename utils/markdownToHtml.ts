import markdownit from 'markdown-it';
import anchor from 'markdown-it-anchor';
import slugify from '@sindresorhus/slugify';
import hljs from 'highlight.js';
import 'highlight.js/styles/obsidian.css';
// @ts-ignore
import { serverRender } from 'tocbot/src/js/server-render.js'

interface returnHtml {
  content: string,
  toc: string
}

export default async function markdownToHtml(markdown: string): Promise<returnHtml> {
  const md = markdownit({
    html: true,
    linkify: true,
    typographer: true,
    highlight: function (str: string, lang: string) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(str, { language: lang }).value;
        } catch (__) {}
      }

      return ''; // use external default escaping
    },
  });
  md.use(anchor, {
    tabIndex: false,
    slugify: (s: string) => slugify(s),
    permalink: anchor.permalink.headerLink(),
  });
  md.linkify.set({ fuzzyEmail: false });
  const content = md.render(markdown);
  const toc = serverRender(content)
  console.log('>>>>>', toc)
  return {
    content, toc
  };
}
