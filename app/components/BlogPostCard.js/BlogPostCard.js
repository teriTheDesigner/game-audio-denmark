import Link from "next/link";

export default function BlogPostCard({ blog }) {
  return (
    <div key={blog.id}>
      <p>{blog.title}</p>
      <p>{blog.date}</p>
      <Link href="/blog/[slug]" as={`/blog/${blog.title}`}>
        CLICK HERE
      </Link>
    </div>
  );
}
