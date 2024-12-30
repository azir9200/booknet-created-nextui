// export default function layout({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="relative flex flex-col h-screen">
//       <main>{children}</main>
//     </div>
//   );
// }

import Navbar from "@/src/components/shared/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apollo Gears",
  description: "Next Level Riding Sharing Service",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
