import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "./ui/sidebar";
import { Skeleton } from "./ui/skeleton";
import ChatList from "./specific/ChatList";
import ChatItem from "./shared/ChatItem";

export default function AppSidebar() {
  return (
    <div>
      <Sidebar>
        <SidebarHeader className={"bg-white!"} />
        <SidebarContent className={"bg-white!"}>
          <SidebarGroup className={"space-y-4"}>
            <ChatList chats={[1,2,3,4,5]} />
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    </div>
  );
}

