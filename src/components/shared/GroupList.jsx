import React, { memo } from "react";
import { Card, CardContent } from "../ui/card";
import { Link } from "react-router-dom";
import AvatarCard from "./AvatarCard";

export default function GroupList({ w = "100%", myGroups = [], chatid }) {
  return (
    <>
      <Card className={"py-0"}>
        <CardContent className={"px-1"}>
          {myGroups.length > 0 ? (
            myGroups.map((group) => (
              <GroupListItem group={group} chatId={chatid} />
            ))
          ) : (
            <p className="text-2xl font-bold">No Group</p>
          )}
        </CardContent>
      </Card>
    </>
  );
}

const GroupListItem = memo(({ group, chatId }) => {
  const { name, avatar, _id } = group;
  return (
    <Link>
      <AvatarCard avatars={avatar} />
    </Link>
  );
});
