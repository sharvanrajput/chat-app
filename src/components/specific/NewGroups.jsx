import React, { useState } from "react";

export default function NewGroups() {
  const [users, setUsers] = useState(res);
  const [searched, setSearched] = useState(users);
  const [input, setIput] = useState("");

  const addFriendHandler = () => {};
  let isLoadingSentFriendRequres = false;

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
          placeholder={"Search People"}
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
          <UserItem
            key={i}
            user={ele}
            handler={addFriendHandler}
            handlerIsLoading={isLoadingSentFriendRequres}
          />
        ))}
      </ScrollArea>
    </>
  );
}
