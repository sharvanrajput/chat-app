import { useEffect, useState } from "react";
import UserItem from "../shared/UserItem";
import { DialogClose, DialogFooter, DialogTitle } from "../ui/dialog";
import { Input } from "../ui/input";
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";
import { sampleUserData } from "@/constants/sampleData";


export default function NewGroups() {
  const [users, setUsers] = useState(sampleUserData);
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [input, setInput] = useState("");


  const selectFriendHandler = (id) => {
    setSelectedMembers((prev) =>
      prev.includes(id) ? prev.filter((ele) => ele !== id) : [...prev, id]
    );
  };
  console.log(selectedMembers)
  const submitHandler = () => { };


  let isLoadingSentFriendRequres = false;







  return (
    <>
      <DialogTitle className={"text-center text-2xl font-bold  "}>New Group</DialogTitle>
      <div className="relative ">
        <Input
          type={"text"}
          placeholder={"Search People"}
          vlaue={input}
          onChange={(e) => setIput(e.target.value)}
        />

      </div>
      <p className="text-lg font-bold mb-0"  >Members</p>
      <ScrollArea className="max-h-[300px] w-full rounded-md border  ">
        {users?.map((ele, i) => (
          <UserItem
            key={i}
            user={ele}
            isAdded={selectedMembers.includes(ele.id)}
            handler={() => selectFriendHandler(ele.id)}
            handlerIsLoading={isLoadingSentFriendRequres}
          />
        ))}
      </ScrollArea>

      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline">Cancel</Button>
        </DialogClose>
        <Button type="submit" onClick={submitHandler}>
          Create
        </Button>
      </DialogFooter>
    </>
  );
}
