import React, { memo } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { GrAddCircle } from "react-icons/gr";
import { Card, CardContent } from "../ui/card";
import { IoMdRemoveCircleOutline } from "react-icons/io";


function UserItem({ user, handler, handlerIsLoading, isAdded, num = 1 }) {
  const { name, _id, avatar } = user;
  return (
    <Card className={"py-0 mb-1  m-2"}>
      <CardContent className={"py-3 px-2 "} >
        <div className="flex justify-between ">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={`https://github.com/user${num}.png`} />
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

            {isAdded ? <IoMdRemoveCircleOutline className="size-5 text-red-500" /> : <GrAddCircle className="size-5" />}

          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default memo(UserItem);