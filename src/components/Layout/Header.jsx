import React from "react";
import { SidebarTrigger, useSidebar } from "../ui/sidebar";
import { SidebarCloseIcon } from "lucide-react";

export default function Header() {
  const { toggleSidebar, open } = useSidebar();

  return (
    <nav className="bg-black py-3 px-3">
        <SidebarCloseIcon onClick={toggleSidebar} className="text-white" />
    </nav>
  );
}
