"use client";

import { useState, useEffect } from "react";
import supabase from "../config/supabaseClient";

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
    <main>
      {blogs && (
        <div>
          {blogs.map((blog) => {
            return <p key={blog.id}>{blog.title}</p>;
          })}
        </div>
      )}
    </main>
  );
}
