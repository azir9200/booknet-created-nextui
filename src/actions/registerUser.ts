"use server";

import { UserData } from "../app/(withCommonLayout)/register/page";

export const registerUser = async (data: UserData) => {
  const res = await fetch(`${process.env.BACKEND_URL}/user/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const userinfo = await res.json();
  return userinfo;
};
