/* eslint-disable react/jsx-sort-props */
// import "@/src/styles/globals.css";
// import type { Metadata } from "next";

// import { Roboto } from "next/font/google";
// import Navbar from "../components/shared/Navbar";
// import Footer from "../components/shared/footer";
// import Header from "../components/shared/Header";
// import { Providers } from "../lib/Providers";
// import { store } from "../redux/store";

// const roboto = Roboto({
//   weight: "400",
//   subsets: ["latin"],
//   display: "swap",
// });

// export const metadata: Metadata = {
//   title: "Blogiz",
//   description:
//     "Welcome to Blogiz – where innovation meets imagination in the dynamic realm of technology, offering a thrilling journey through the latest trends and groundbreaking discoveries in the world of tech!",
// };

// export default async function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" data-theme="light">
//       <body>
//         <Header />
//         <div className="min-h-screen">{children}</div>
//         <Footer />
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import "@/src/styles/globals.css";
import Footer from "../components/shared/footer";

export const metadata: Metadata = {
  title: "Apollo Gears",
  description: "Next Level Riding Sharing Service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
