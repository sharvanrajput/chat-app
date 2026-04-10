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
function Chat() {
  return (
    <>
      <Title title="Chat app" description={" this is my chat app"} />
      <div>
        chat
        <Sheet>
          <SheetTrigger>Open</SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>This action cannot be undone.</SheetDescription>
            </SheetHeader>
            <Profile />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
export default Layout(Chat);
