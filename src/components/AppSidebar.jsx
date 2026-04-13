import React, { useEffect, useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
} from "./ui/sidebar";
import { Skeleton } from "./ui/skeleton";
import ChatList from "./specific/ChatList";
import ChatItem from "./shared/ChatItem";
import { sampleChats } from "@/constants/sampleData";
import { useLocation, useParams } from "react-router-dom";
import GroupList from "./shared/GroupList";

export default function AppSidebar() {
  const params = useParams();
  const chatid = params.chatid;
  const [isGroupChat, setGroupChat] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname == "/groups") {
      setGroupChat(true);
    } else {
      setGroupChat(false);
    }
  }, [location]);

  const { isMobile, setOpenMobile } = useSidebar();

  const onClickSiceclose = () => {
    if (isMobile) {
      setOpenMobile(false);
    }
  };

  const handleDeletechat = (e, id, groupchat) => {
    e.preventDefault();
    console.log("delete chat with id:", id, "groupchat:", groupchat);
  };

  return (
    <div>
      <Sidebar>
        <SidebarHeader className={"bg-white!"} />
        <SidebarContent className={"bg-white!"}>
          <SidebarGroup className={"space-y-4"}>
            {isGroupChat ? (
              <GroupList />
            ) : (
              <ChatList
                chats={sampleChats}
                chatid={chatid}
                newMessagesAlert={[
                  {
                    chatId: "2",
                    count: "1",
                  },
                  {
                    chatId: "1",
                    count: "15",
                  },
                ]}
                handleDeletechat={handleDeletechat}
                onClickSiceclose={onClickSiceclose}
              />
            )}
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    </div>
  );
}
