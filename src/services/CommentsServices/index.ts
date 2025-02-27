"use server";

export const getCommentsById = async (postId: string, wait = false) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/comments?postId=${postId}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch comments data");
  }

  return res.json();
};
