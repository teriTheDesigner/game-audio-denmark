"use client";
import styles from "@/app/blog/Blog.module.css";
import { useState, useEffect } from "react";
import supabase from "../config/supabaseClient";
import BlogPostCard from "../components/BlogPostCard/BlogPostCard";

export default function Blog() {
  const [blogs, setBlogs] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await supabase.from("blog").select();
        setBlogs(data);
        setError(null);
      } catch (error) {
        setError(error.message);
        console.log("error", error);
        setBlogs(null);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <main className="grid-section">
      {blogs && (
        <div className={styles.blogsContainer}>
          {blogs.map((blog) => (
            <BlogPostCard key={blog.title} blog={blog} />
          ))}
        </div>
      )}
    </main>
  );
}
