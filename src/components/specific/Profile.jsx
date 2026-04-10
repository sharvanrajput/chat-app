import React from "react";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { AtSign, ScanFace, User } from "lucide-react";
import moment from "moment";
 
 
export default function Profile() {
  return (
    <Card className={"py-0  ring-0 "}>
      <CardContent className={"space-y-4"}>
        <Avatar className={"w-30 h-30 mx-auto mb-3.5 "}>
          <AvatarImage src="https://github.com/user31.png" />
          <AvatarFallback>SH</AvatarFallback>
        </Avatar>
        <ProfileCard heading="bio" text="this is the domy text ok or not " />
        <ProfileCard
          heading="Username"
          text="iamsharvan09"
          Icon={AtSign}
        />
        <ProfileCard
          heading="Name"
          Icon={User}
          text="Sharvan rajput"
        />
        <ProfileCard
          heading="Joined"
          text={moment("2024-02-27T00:00:00.000Z").fromNow()}
          Icon={User}
        />
      </CardContent>
    </Card>
  );
}

const ProfileCard = ({ text, Icon, heading }) => (
  <Card className={"py-2"}>
    <CardContent className={"text-center flex justify-center gap-3 py-0"}>
      {Icon && <Icon className={"size-5 text-black"} />}
      <div className="flex flex-col ">
        <p className="mb-0">{text}</p>
        <p className="text-gray-600">{heading}</p>
      </div>
    </CardContent>
  </Card>
);
