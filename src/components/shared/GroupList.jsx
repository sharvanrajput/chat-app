import React, { memo } from "react";
import { Card, CardContent } from "../ui/card";
import { Link } from "react-router-dom";
import AvatarCard from "./AvatarCard";

export default function GroupList({ w = "100%", myGroups = [], chatid }) {
  return (
    <>
      {myGroups.length > 0 ? (
        myGroups.map((group) => <GroupListItem group={group} chatId={chatid} />)
      ) : (
        <p className="text-2xl font-bold">No Group</p>
      )}
    </>
  );
}

const GroupListItem = memo(({ group, chatId }) => {
  const { name, avatar, id } = group;
  const sameSender = chatId === id;
  return (
    <Link
      className="hover:bg-gray-500/0 "
      to={`?group=${id}`}
      onContextMenu={(e) => handleDeletechat(e, id, groupchat)}
      onClick={(e) => {
        if (chatId === id) e.preventDefault();
      }}
    >
      <Card className={"py-0 mb-0"}>
        <CardContent className={"px-0"}>
          <div
            className={` p-3 rounded-sm relative  ${sameSender ? "bg-black text-white " : "bg-white text-black"}`}
          >
            <div className="flex gap-3 items-center" >
              <AvatarCard avatars={avatar} />
              <div>

                <p className="text-md mb-0 font-semibold">{name}</p>
                <p className="text-md mb-0 font-semibold">{name}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
});
