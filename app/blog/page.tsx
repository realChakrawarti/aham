import BlogPreview from "@/components/blog-preview";
import { getAllDocs } from "@/services/getDocsByPath";
import { blogDirectory } from "@/services/paths";

export default function Blogs() {
  const allBlogs = getAllDocs(blogDirectory);

  return (
    <div className="divide-y divide-gray-800">
      {allBlogs.map(async (blog) => (
        <BlogPreview
          tags={blog.tags || []}
          excerpt={blog.excerpt}
          title={blog.title}
          date={blog.date}
          slug={blog.slug}
        />
      ))}
    </div>
  );
}
