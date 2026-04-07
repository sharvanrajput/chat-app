import React from "react";
import { Link } from "react-router-dom";

export default function ChatItem({
  avatar = [],
  name,
  id,
  groupchat = false,
  sameSender,
  isOnline,
  newMessage,
  index = 0,
  handleDeleteChatOpen,
}) {
  return (
   <Link>
    <div>
      items
    </div>
   </Link>
  );
}
