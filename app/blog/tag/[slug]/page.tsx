export default function TagPage() {
  return <div>Hello, I am tag!</div>;
}

export async function generateStaticParams() {
  const blogs = ["js", "blog"];

  return blogs.map((blog) => ({
    slug: blog,
  }));
}
