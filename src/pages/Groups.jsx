import Layout from "@/components/Layout/Layout";

import React, { useEffect, useState } from "react";
import { sampleChats } from "@/constants/sampleData";
import ChatList from "@/components/specific/ChatList";
import { Button } from "@/components/ui/button";
import { Delete, Edit, Edit2, Save, Trash, Trash2 } from "lucide-react";
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
import { GrAddCircle } from "react-icons/gr";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

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
    return () => {
      setGroupName("")
      setGroupNameUpdated("")
      setIsEdit(false)
    }
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
      <div className="w-full ">

        <div className="flex md:flex-row-reverse gap-2 md:justify-between flex-col">

          <Button> <GrAddCircle /> Add Member</Button>
          <Dialog>
            <DialogTrigger asChild >
              <Button variant="destructive" > <Trash2 /> Delete Member</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete your account
                  and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">No</Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button variant="outline">Yes</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>


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
