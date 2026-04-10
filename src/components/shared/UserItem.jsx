import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { GrAddCircle } from "react-icons/gr";
import { Card, CardContent } from "../ui/card";

export default function UserItem({ user, handler, handlerIsLoading }) {
  const { name, _id, avatar } = user;
  return (
    <Card className={"py-0 mb-1  m-2"}>
      <CardContent className={"py-0 px-2 "} >
        <div className="flex justify-between ">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="https://github.com/user1.png" />
              <AvatarFallback></AvatarFallback>
            </Avatar>
            <span className="text-md">{name}</span>
          </div>
          <Button
            variant="link"
            className={"cursor-pointer"}
            onClick={handler}
            disabled={handlerIsLoading}
          >
            <GrAddCircle className="size-5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
