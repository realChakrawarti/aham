import BlogItem from "@/components/blog-preview.new";
import { getAllDocs } from "@/services/getDocsByPath";
import { blogDirectory } from "@/services/paths";

export default function Blogs() {
  const allBlogs = getAllDocs(blogDirectory);

  return (
    <div>
      <h1>Blogs</h1>
      {allBlogs.map(async (blog) => (
        <BlogItem
          excerpt={blog.excerpt}
          key={blog.title}
          date={blog.date}
          slug={blog.slug}
          title={blog.title}
        />
      ))}
    </div>
  );
}
