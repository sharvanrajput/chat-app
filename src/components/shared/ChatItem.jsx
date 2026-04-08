import React, { memo } from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "../ui/avatar";

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
    <Link
      className="hover:bg-gray-500"
      to={`/chat/${id}`}
      onContextMenu={(e) => handleDeleteChatOpen(e, id, groupchat)}
    >
      <div
        className={`flex gap-4 items-center p-3 rounded-sm relative ${sameSender ? "bg-black text-white " : "bg-white text-black"}   `}
      >
        <Avatar className={"size-10 relative rounded-full"}>
          <AvatarImage
            className={"object-contain"}
            src={avatar}
          />
          <AvatarFallback>CN</AvatarFallback>
          <AvatarBadge className="bg-green-600 dark:bg-green-800" />
        </Avatar>

        <div className="div">
          <p className="text-md font-semibold">{name}</p>
          {newMessageAlert && (
            <p className="text-sm">{newMessageAlert.count} new message </p>
          )}
        </div>
      </div>
    </Link>
  );
}

export default memo(ChatItem);
