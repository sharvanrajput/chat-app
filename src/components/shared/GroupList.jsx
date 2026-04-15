import React, { memo } from "react";
import { Card, CardContent } from "../ui/card";
import { Link } from "react-router-dom";
import AvatarCard from "./AvatarCard";

export default function GroupList({ w = "100%", myGroups = [], chatid }) {
  const sameSender = chatid === id;
  return (
    <>

      {myGroups.length > 0 ? (
        myGroups.map((group) => (
          <GroupListItem group={group} chatId={chatid} />
        ))
      ) : (
        <p className="text-2xl font-bold">No Group</p>
      )}

    </>
  );
}

const GroupListItem = memo(({ group, chatId }) => {
  const { name, avatar, id } = group;

  return (
    <Link
      className="hover:bg-gray-500/0 "
      to={`?group=${id}`}
      onContextMenu={(e) => handleDeletechat(e, id, groupchat)}
    // onClick={onClickSiceclose}
    >
      <Card className={"py-0 mb-1"}>
        <CardContent className={"px-0"}>
          <div
            className={`flex gap-4 items-center p-3 rounded-sm relative    `}
          >
            <AvatarCard avatars={avatar} />
            <p className="text-md font-semibold">{name}</p>
          </div>
        </CardContent>
      </Card >

    </Link>
  );
});
