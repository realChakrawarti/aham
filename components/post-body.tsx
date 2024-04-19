import markdownToHtml from "@/utils/markdownToHtml";

type Props = {
  content: string;
};

export default async function PostBody({ content }: Props) {
  const htmlContent = await markdownToHtml(content || "");

  return (
    <div className="max-w-2xl mx-auto">
      <div
        className="prose prose-slate"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
}
