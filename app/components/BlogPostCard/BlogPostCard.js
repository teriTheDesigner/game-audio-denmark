import Link from "next/link";

export default function BlogPostCard({ blog }) {
  return (
    <div key={blog.id}>
      <img src={blog.image} alt="blogImage" />
      <p>{blog.date}</p>
      <h3>{blog.title}</h3>
      <p>{blog.description}</p>
      <p>{blog.author}</p>

      <Link href="/blog/[slug]" as={`/blog/${blog.id}`}>
        CLICK HERE
      </Link>
    </div>
  );
}
