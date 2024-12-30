"use server";

import { FormValues } from "../app/(withCommonLayout)/login/page";

export const loginUser = async (data: FormValues) => {
  const res = await fetch(`${process.env.BACKEND_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const userInfo = await res.json();
  console.log("login user page", userInfo);
  return userInfo;
};

export default loginUser;
