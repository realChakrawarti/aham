import markdownToHtml from '@/utils/markdownToHtml';

type Props = {
  content: string;
};

export default async function ContentRenderer({ content }: Props) {
  const htmlContent = await markdownToHtml(content || '');

  return (
    <div
      className="prose prose-invert prose-xl lg:prose-base prose-pre:bg-pre
        prose-pre:rounded-none md:prose-pre:mx-0
        md:prose-pre:w-full prose-pre:-mx-6 prose-pre:w-[calc(100%+48px)]
        prose-code:before:hidden prose-code:after:hidden prose-a:break-all
        prose-inline-code:border prose-inline-code:px-2
        prose-inline-code:py-1 prose-inline-code:text-action prose-inline-code:mx-1
        prose-inline-code:text-[90%]"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}
