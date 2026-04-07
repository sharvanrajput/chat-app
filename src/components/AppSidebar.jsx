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

export default function AppSidebar() {
  return (
    <div>
      <Sidebar>
        <SidebarHeader className={"bg-white!"} />
        <SidebarContent className={"bg-white!"}>
          <SidebarGroup className={"space-y-4"}>
            {Array.from({length:10}).map((_, i) => (
              <SidebarMenu key={i}>
                <SidebarMenuItem>
                  <ChatSkeleton />
                </SidebarMenuItem>
              </SidebarMenu>
            ))}
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    </div>
  );
}

const ChatSkeleton = () => {
  return (
    <div className="flex items-center">
      <div className="">
        <Skeleton className="h-12.5 w-12.5 rounded-full" />
      </div>
      <div className="space-y-1 w-full">
        <Skeleton className="h-[15px] w-full rounded-full" />
        <Skeleton className="h-[15px] w-[80%] rounded-full" />
      </div>
    </div>
  );
};
