import Link from "next/link";
import styles from "@/app/components/BlogPostCard/BlogPostCard.module.css";

export default function BlogPostCard({ blog }) {
  return (
    <div key={blog.id} className={styles.card}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${blog.image})`,
        }}
      ></div>

      {/* <img src={blog.image} alt="blogImage" /> */}
      <div className={styles.textContent}>
        <p className={styles.date}>{blog.date}</p>
        <h3 className={styles.title}>{blog.title}</h3>
        <p
          className={styles.description}
          style={{ borderBottom: "2px solid white", paddingBottom: "1.5rem" }}
        >
          {blog.description}
        </p>
        <div className={styles.cta}>
          <p className={styles.author}>{blog.author}</p>

          <Link href="/blog/[slug]" as={`/blog/${blog.id}`}>
            CLICK HERE
          </Link>
        </div>
      </div>
    </div>
  );
}
