import Layout from "@/components/Layout/Layout";

import React, { useState } from "react";
import { sampleChats } from "@/constants/sampleData";
import ChatList from "@/components/specific/ChatList";
import { Button } from "@/components/ui/button";
import { Edit, Save, Trash } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MdKeyboardBackspace } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Title from "@/components/shared/Title";

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

function Groups() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center relative py-4 px-12 ">
      <Title title="Chat app" description={" this is my chat app"} />
      <Backbtn handler={handleBack} /> asdf
    </div>
  );
}

export default Layout(Groups);
