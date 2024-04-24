import ListPreview from "@/components/list-preview";
import { getAllDocs } from "@/services/getDocsByPath";
import { blogDirectory } from "@/services/paths";

export default function Blogs() {
  const allBlogs = getAllDocs(blogDirectory, "blog");

  return (
    <div className="divide-y divide-gray-800">
      {allBlogs.map(async (blog) => (
        <ListPreview key={blog.slug} {...blog} />
      ))}
    </div>
  );
}
