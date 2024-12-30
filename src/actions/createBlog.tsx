"use server";

import Blog from "../types";

const createBlog = async (data: Blog) => {
  const res = await fetch(" http://localhost:5000/post", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });

  const blogInfo = await res.json();

  return blogInfo;
};

export default createBlog;
