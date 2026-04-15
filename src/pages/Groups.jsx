import Layout from "@/components/Layout/Layout";

import React, { useEffect, useState } from "react";
import { sampleChats } from "@/constants/sampleData";
import ChatList from "@/components/specific/ChatList";
import { Button } from "@/components/ui/button";
import { Edit, Edit2, Save, Trash } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MdKeyboardBackspace } from "react-icons/md";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "@/components/shared/Title";
import { Card, CardContent } from "@/components/ui/card";
import { DiOnedrive } from "react-icons/di";
import { MdOutlineDoneAll } from "react-icons/md";

function Groups() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };

  const chatid = useSearchParams()[0].get("group")


  const [isEdit, setIsEdit] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [groupNameUpdated, setGroupNameUpdated] = useState("");

  const updateGroupName = () => {
    setIsEdit(false);
    console.log(groupNameUpdated);
  };

  useEffect(() => {
    setGroupName(`Group Name ${chatid}`);
    setGroupNameUpdated(`Group Name ${chatid}`);
  }, [chatid]);

  const GroupName = (
    <>
      <div className="flex p-3">
        {isEdit ? (
          <>
            <Input
              type="text"
              value={groupNameUpdated}
              onChange={(e) => setGroupNameUpdated(e.target.value)}
            />
            <Button variant="icon" onClick={updateGroupName}>
              {" "}
              <MdOutlineDoneAll className="size-5" />
            </Button>
          </>
        ) : (
          <>
            <h3 className="text-3xl font-semibold">{groupName}</h3>
            <Button variant="icon" onClick={() => setIsEdit(true)}>
              {" "}
              <Edit2 />{" "}
            </Button>
          </>
        )}
      </div>

      <Card>
        <CardContent></CardContent>
      </Card>
    </>
  );

  return (
    <div className="flex flex-col items-center justify-center relative py-4 px-12 ">
      <Title title="Chat app" description={" this is my chat app"} />
      <Backbtn handler={handleBack} />
      {GroupName}
    </div>
  );
}

const Backbtn = ({ handler }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={handler}
            className={"absolute top-4 left-4"}
            variant="destructive"
          >
            <MdKeyboardBackspace />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Back</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Layout(Groups);
