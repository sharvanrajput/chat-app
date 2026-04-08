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
import { sampleChats } from "@/constants/sampleData";

export default function AppSidebar() {
  return (
    <div>
      <Sidebar>
        <SidebarHeader className={"bg-white!"} />
        <SidebarContent className={"bg-white!"}>
          <SidebarGroup className={"space-y-4"}>
            <ChatList chats={sampleChats} chatId={"1"} />
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    </div>
  );
}

