import Sidebar from "@/src/components/sideBar/SideBar";
import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex border border-gray-500">
      <div className="w-[80px]">
        <Sidebar />
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
}
