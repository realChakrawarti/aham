import markdownToHtml from "@/utils/markdownToHtml";

type Props = {
  content: string;
};

export default async function ContentRenderer({ content }: Props) {
  const htmlContent = await markdownToHtml(content || "");

  return (
    <div className="dark">
      <div
        className="prose prose-invert prose-xl lg:prose-base"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
}
