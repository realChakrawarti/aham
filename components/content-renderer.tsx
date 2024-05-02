import markdownToHtml from '@/utils/markdownToHtml';

type Props = {
  content: string;
};

export default async function ContentRenderer({ content }: Props) {
  const htmlContent = await markdownToHtml(content || '');

  return (
    <div
      className="prose prose-invert prose-xl lg:prose-base prose-pre:bg-pre md:prose-pre:mx-0
        md:prose-pre:w-full prose-pre:-mx-6 prose-pre:w-[calc(100%+48px)]
        prose-code:text-action"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}
