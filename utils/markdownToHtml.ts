import markdownit from "markdown-it";

export default async function markdownToHtml(markdown: string) {
  const md = markdownit();
  const result = md.render(markdown);
  return result;
}
