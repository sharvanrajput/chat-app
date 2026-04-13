import Layout from "@/components/Layout/Layout";
import Title from "@/components/shared/Title";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Profile from "@/components/specific/Profile";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CgAttachment } from "react-icons/cg";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { sampleMessage } from "@/constants/sampleData";
import MessageItem from "@/components/shared/MessageItem";

const user = {
  _id: "1",
  name: "sharvan rajput"
}
function Chat() {
  return (
    <>
      <Title title="Chat app" description={" this is my chat app"} />

      <div className="h-[83%] bg-gray-200">

        {
          sampleMessage.map((i) => (
            <MessageItem key={i._id} message={i} user={user} />
          ))
        }


        {/* chat
        <Sheet>
          <SheetTrigger>Open</SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>This action cannot be undone.</SheetDescription>
            </SheetHeader>
            <Profile />
          </SheetContent>
        </Sheet> */}
      </div>

      <form className="h-[7%] mt-2 w-[98%] mx-auto bg-gray-200 rounded-full ">
        <div className=" flex justify-between items-center
       h-full mt-2 w-full relative  border border-gray-400 rounded-full">

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className={" mx-2 rotate-30 hover:bg-transparent "}>
                <CgAttachment className="size-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>


          <Input className={"border-0 shadow-none outline-0 ring-0 active:ring-0 active:outline-none active:shadow-none active:border-0 "} />
          <Button variant="" className={" mx-2 rounded-full "} type="submit" >
            <Send className="size-5" />
          </Button>
        </div>
      </form>
    </>
  );
}
export default Layout(Chat);
