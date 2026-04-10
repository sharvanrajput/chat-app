import React, { useEffect, useState } from "react";
import { DialogClose, DialogTitle } from "../ui/dialog";
import { Input } from "../ui/input";
import { Search as SearchIcon } from "lucide-react";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import UserItem from "../shared/UserItem";
const users = [
  {
    name: "sharvan",
  },
  {
    name: "rohit",
  },
  {
    name: "vikas",
  },
  {
    name: "jolly llb 2",
  },
  {
    name: "it department",
  },
  
];
export default function Search() {
  const [searched, setSearched] = useState(users);
  const [input, setIput] = useState("");

  useEffect(() => {
    if (!input.trim()) {
      setSearched(users); // show all users when empty
      return;
    }
    const data =
      users.filter((ele) =>
        ele?.name?.toLowerCase().includes(input.toLowerCase()),
      ) || users;
    setSearched(data);
  }, [input]);

  return (
    <>
      <DialogTitle className={"text-center"}>Find People</DialogTitle>
      <div className="relative ">
        <Input
          type={"text"}
          Placeholder={"Search People"}
          vlaue={input}
          onChange={(e) => setIput(e.target.value)}
        />
        <DialogClose asChild>
          <Button variant="icon" className={"absolute right-0 cursor-pointer"}>
            <SearchIcon />
          </Button>
        </DialogClose>
      </div>

      <ScrollArea className="max-h-[300px] w-full rounded-md border  ">
        {searched?.map((ele, i) => (
          <UserItem key={i} user={ele} />
        ))}
      </ScrollArea>
    </>
  );
}
