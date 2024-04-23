import ContentRenderer from "@/components/content-renderer";
import { getAllDocs } from "@/services/getDocsByPath";
import { nowDirectory } from "@/services/paths";

export default function Now() {
  const now = getAllDocs(nowDirectory);

  return (
    <div>
      {now.map(async (item) => (
        <ContentRenderer key={item.title} content={item.content || ""} />
      ))}
    </div>
  );
}
