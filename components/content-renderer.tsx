import markdownToHtml from '@/utils/markdownToHtml';

type Props = {
  content: string;
  showToc?: boolean;
};

export default async function ContentRenderer({ content, showToc }: Props) {
  const { content: htmlContent, toc } = await markdownToHtml(content || '');

  return (
    <>
    <div className="w-full bg-gray-100 px-4 py-3 text-left text-gray-800 break-words max-w-md rounded">
    <div className="mx-auto text-xl font-semibold"><strong>Table of content</strong></div>
    <ul className="mt-2 list-disc px-2 pl-6">
        <li>
            <a className="block hover:bg-gray-200 px-2 py-1 rounded" href="#introduction">Introduction</a>
        </li>
        <li>
            <a className="block hover:bg-gray-200 px-2 py-1 rounded" href="#getting-started">Getting Started with
                Bootstrap</a>
        </li>
        <li>
            <a className="block hover:bg-gray-200 px-2 py-1 rounded" href="#responsive-design">Responsive Design in
                Bootstrap</a>
        </li>
        <li>
            <a className="block hover:bg-gray-200 px-2 py-1 rounded" href="#theming-and-customization">Theming and
                Customization</a>
        </li>
        <li>
            <a className="block hover:bg-gray-200 px-2 py-1 rounded" href="#sass-maps-in-bootstrap">Sass Maps in
                Bootstrap</a>
        </li>
        <li>
            <a className="block hover:bg-gray-200 px-2 py-1 rounded" href="#best-practices">Best Practices for Bootstrap</a>
        </li>
        <li>
            <a className="block hover:bg-gray-200 px-2 py-1 rounded" href="#code-samples">Code Samples for Bootstrap</a>
        </li>
        <li>
            <a className="block hover:bg-gray-200 px-2 py-1 rounded" href="#conclusion">Conclusion</a>
        </li>
        <li>
            <a className="block hover:bg-gray-200 px-2 py-1 rounded" href="#change-theme-color">Changing Theme Color in
                Bootstrap</a>
        </li>
        <li>
            <a className="block hover:bg-gray-200 px-2 py-1 rounded" href="#using-theme-color">Using Theme Color in
                Bootstrap</a>
        </li>
        <li>
            <a className="block hover:bg-gray-200 px-2 py-1 rounded" href="#number-of-colors">Number of Colors in
                Bootstrap</a>
        </li>
        <li>
            <a className="block hover:bg-gray-200 px-2 py-1 rounded" href="#customize-theme">Customizing a Bootstrap
                Theme</a>
        </li>
    </ul>
</div>
      {/* <aside>
        <details>
          <summary>Table of contents</summary>
          <div dangerouslySetInnerHTML={{ __html: toc }} />
        </details>
      </aside> */}
      <div
        className="prose prose-invert prose-xl lg:prose-base prose-pre:bg-pre
          prose-pre:rounded-none md:prose-pre:mx-0 md:prose-pre:w-full prose-pre:-mx-6
          prose-pre:w-[calc(100%+48px)] prose-code:before:hidden prose-code:after:hidden
          prose-a:break-all prose-inline-code:border prose-inline-code:px-2
          prose-inline-code:py-[2px] prose-inline-code:text-action prose-inline-code:mx-1
          prose-inline-code:text-[85%] prose-inline-code:break-all
          prose-inline-code:whitespace-nowrap"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </>
  );
}
