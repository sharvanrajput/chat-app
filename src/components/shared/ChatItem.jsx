import React, { memo } from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "../ui/avatar";
import AvatarCard from "./AvatarCard";
import { useSidebar } from "../ui/sidebar";
import { Card, CardContent } from "../ui/card";

function ChatItem({
  avatar = [],
  name,
  id,
  groupchat = false,
  sameSender,
  isOnline,
  newMessageAlert,
  index = 0,
  handleDeletechat,
  onClickSiceclose,
}) {
  return (
    <Link
      className="hover:bg-gray-500 "
      to={`/chat/${id}`}
      onContextMenu={(e) => handleDeletechat(e, id, groupchat)}
      onClick={onClickSiceclose}
    >
      <Card className={"py-0 mb-1"}>
        <CardContent className={"px-0"}>
          <div
            className={`flex gap-4 items-center p-3 rounded-sm relative ${sameSender ? "bg-black text-white " : "bg-white text-black"}   `}
          >
            <AvatarCard avatars={avatar} />

            <div className="div">
              <p className="text-md font-semibold">{name}</p>
              {newMessageAlert && newMessageAlert.chatId === id && (
                <p className="text-sm">{newMessageAlert.count} new message </p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export default memo(ChatItem);
