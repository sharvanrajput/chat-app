import React from "react";
import { Skeleton } from "../ui/skeleton";
import { SidebarMenu, SidebarMenuItem } from "../ui/sidebar";
import ChatItem from "../shared/ChatItem";

export default function ChatList({
  chats = [],
  chatid,
  onlineUsers = [],
  newMessagesAlert = [
    {
      chatId: "",
      count: 0,
    },
  ],
  handleDeletechat,
  onClickSiceclose,
}) {
  return (
    <>
      <div className=" ">
        {chats.map((data, i) => {
          const { id, avatar, members } = data;

          const newMessageCount = newMessagesAlert.find(
            ({ chatId }) => chatId === id,
          );

          const isonline = members.some((member) =>
            onlineUsers.includes(member),
          );

          const sameSender = chatid === id;

          return (
            <ChatItem
              onClickSiceclose={onClickSiceclose}
              key={i}
              {...data}
              isOnline={isonline}
              newMessageAlert={newMessageCount}
              avatar={avatar}
              handleDeletechat={handleDeletechat}
              sameSender={sameSender}
            />
          );
        })}
      </div>
      {false &&
        Array.from({ length: 10 }).map((_, i) => (
          <SidebarMenu key={i}>
            <SidebarMenuItem>
              <ChatSkeleton />
            </SidebarMenuItem>
          </SidebarMenu>
        ))}
    </>
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
