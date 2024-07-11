import markdownToHtml from '@/utils/markdownToHtml';

type Props = {
  content: string;
  showToc?: boolean;
};

export default async function ContentRenderer({ content, showToc }: Props) {
  const { content: htmlContent, toc } = await markdownToHtml(content || '');

  const inlineCode = `prose-inline-code:py-[2px] prose-inline-code:text-action 
          prose-inline-code:mx-1 prose-inline-code:text-[85%] prose-inline-code:break-all
          prose-inline-code:whitespace-nowrap prose-inline-code:font-slalom
          prose-inline-code:border prose-inline-code:px-2
          `;

  const preCode = `prose-pre:rounded-none md:prose-pre:mx-0 md:prose-pre:w-full 
          prose-pre:-mx-6 prose-pre:w-[calc(100%+48px)] prose-pre:font-hilmar 
          prose-pre:bg-pre prose-pre:text-base
          `;
  const proseCode = `prose-code:before:hidden prose-code:after:hidden`;

  return (
    <>
      <section
        itemProp="articleBody"
        className={`prose prose-invert prose-base lg:prose-lg prose-a:break-all font-slalom
        prose-headings:text-red-900 prose-inline-code:leading-5
        prose-strong:tracking-wider prose-strong:text-orange ${proseCode} ${inlineCode}
        ${preCode}`}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
      {showToc && (
        <aside className="w-[300px] hidden lg:block border-custom fixed p-2 right-0 top-0">
          <h3 className="leading-6 text-[24px] mb-3">Table of contents</h3>
          <div dangerouslySetInnerHTML={{ __html: toc }} />
        </aside>
      )}
    </>
  );
}
