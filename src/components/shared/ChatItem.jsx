import React, { memo } from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

 function ChatItem({
  avatar = [],
  name,
  id,
  groupchat = false,
  sameSender,
  isOnline,
  newMessageAlert,
  index = 0,
  handleDeleteChatOpen,
}) {
  return (
    <Link to={`/chat/${id}`}
      onContextMenu={(e) => handleDeleteChatOpen(e, id, groupchat)}
    >
      <div
        className={`flex gap-4 items-center p-3 rounded-sm relative ${sameSender ? "bg-black text-white " : ""}   `}
      >

        <Avatar className={"size-10 relative"}>
          <AvatarImage
            className={"object-contain"}
            src={"https://github.com/shadcn.png"}
          />
          <AvatarFallback>CN</AvatarFallback>

        </Avatar>

        <div className="div">
          <p className="text-md font-semibold">{name}</p>
          {
            newMessageAlert && (
              <p className="text-sm">{newMessageAlert.count} new message </p>
            )
          }
        </div>

        <div
          className="h-2 w-2 absolute top-0.5 left-12 bg-green-500 rounded-full"
        />

      </div>
    </Link>
  );
}

export default memo(ChatItem)