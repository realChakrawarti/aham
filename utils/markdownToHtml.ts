import markdownit from "markdown-it";
import hljs from "highlight.js";
import "highlight.js/styles/obsidian.css";

export default async function markdownToHtml(markdown: string) {
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

      return ""; // use external default escaping
    },
  });
  md.linkify.set({ fuzzyEmail: false });
  const result = md.render(markdown);
  return result;
}
