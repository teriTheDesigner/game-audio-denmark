"use client";
import { useState, useEffect } from "react";
import supabase from "../../config/supabaseClient";
import Link from "next/link";
import styles from "@/app/blog/[slug]/page.module.css";

export default function BlogPost() {
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // Get the pathname, in this case it is '/blog/id=1'
    const path = window.location.pathname;

    // Extract the 'id' value from the path using a regular expression
    const match = path.match(/\/blog\/id=(\d+)/);
    const id = match ? match[1] : null;

    const fetchBlog = async () => {
      try {
        const { data } = await supabase
          .from("blog")
          .select()
          .eq("id", id)
          .single();

        if (data) {
          setBlog(data);
        }
      } catch (error) {
        console.error("Error fetching blog post:", error.message);
      }
    };

    if (id) {
      fetchBlog();
    }
  }, []);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <header className="grid-component">
        <div className={styles.header}>
          <div className={styles.headerDiv}>
            <Link className={styles.link} href="/blog">
              ← Back to blogs
            </Link>
            <h1>{blog.title}</h1>
            <p>{blog.date}</p>
            <p>{blog.author}</p>
          </div>
        </div>
      </header>
      <div
        className={styles.imageContainer}
        style={{ backgroundImage: `url(${blog.image})` }}
      ></div>
      <section className="grid-component">
        <div className={styles.section}>
          <div className={styles.sectionText}>
            <p>{blog.introduction}</p>
            <p className={styles.highlighted}>{blog.highlighted}</p>
            <p>{blog.text}</p>
            {blog.text1 && <p>{blog.text1}</p>}
            {blog.text2 && <p>{blog.text2}</p>}
            {blog.text3 && <p>{blog.text3}</p>}
            {blog.text4 && <p>{blog.text4}</p>}
          </div>
        </div>
      </section>
    </main>
  );
}
