import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { sampleNotifications } from "@/constants/sampleData";
import {
  Bell,
  Check,
  LogOut,
  Plus,
  SidebarCloseIcon,
  Users,
  UserSearch,
  X
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NewGroups from "../specific/NewGroups";
import Search from "../specific/Search";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { useSidebar } from "../ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

export default function Header() {
  const { toggleSidebar, open } = useSidebar();

  const [notfic, setNotfic] = useState(sampleNotifications);

  const [isSearch, setIsSearch] = useState(false);
  const [isNewGroup, setNewGroup] = useState(false);
  const [isNotifications, setNotifications] = useState(false);

  const navigate = useNavigate();
  const openSearch = () => setIsSearch((prev) => !prev);
  const openNotification = () => setNotifications((prev) => !prev);
  const openNewGroup = () => setNewGroup((prev) => !prev);
  const navigateToGroup = () => navigate("/groups");
  const logouthandler = () => {};

  return (
    <nav className="bg-white py-2 px-3 border border-b">
      <div className="flex justify-between items-center">
        <SidebarCloseIcon onClick={toggleSidebar} className="text-black" />

        <div className="flex items-center gap-3">
          <Navitom
            fun={openSearch}
            Icon={UserSearch}
            tip="Search"
            dylogBody={<Search />}
          />
          <Navitom
            fun={openNewGroup}
            Icon={Plus}
            tip="New Group"
            dylogBody={<NewGroups />}
          />
          <Navitom fun={navigateToGroup} Icon={Users} tip="manage Group" />
          <Navitom
            fun={openNotification}
            Icon={Bell}
            tip="Notifications"
            dropdown={true}
            notfic={notfic}
          />
          <Navitom
            fun={logouthandler}
            variant="destructive"
            Icon={LogOut}
            tip="logout"
          />
        </div>
      </div>
    </nav>
  );
}

const Navitom = ({
  dropdown,
  fun,
  Icon,
  tip,
  dylogBody,
  notfic,
  variant = "outline",
}) => {
  if (dylogBody) {
    return (
      <Dialog>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <DialogTrigger asChild>
                <Button
                  variant={variant}
                  size="icon"
                  className={
                    variant === "outline" &&
                    "  bg-white text-black r  hover:bg-gray-200 "
                  }
                >
                  <Icon />
                </Button>
              </DialogTrigger>
            </TooltipTrigger>
            <TooltipContent>{tip}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <DialogContent>{dylogBody}</DialogContent>
      </Dialog>
    );
  }
  if (dropdown) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            onClick={fun}
            variant={variant}
            size="icon"
            className={
              variant === "outline" &&
              "  bg-white text-black r  hover:bg-gray-200 "
            }
          >
            <Icon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className={"me-17 w-[310px]"}>
          <DropdownMenuGroup>
            <DropdownMenuLabel>Notification</DropdownMenuLabel>
            <ScrollArea className="max-h-[200px] w-[300px] rounded-md p-1">
              {notfic?.map((ele) => (
                <NotificationItom {...ele} />
              ))}
            </ScrollArea>

            {notfic.length == 0 && (
              <DropdownMenuItem>0 Notification</DropdownMenuItem>
            )}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={fun}
            variant={variant}
            size="icon"
            className={
              variant === "outline" &&
              "  bg-white text-black r  hover:bg-gray-200 "
            }
          >
            <Icon />
          </Button>
        </TooltipTrigger>
        <TooltipContent>{tip}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export const NotificationItom = ({ id, sender }) => {
  return (
    <>
      <DropdownMenuItem key={id} asChild>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <Avatar>
              <AvatarImage src={sender?.avatar} />
              <AvatarFallback></AvatarFallback>
            </Avatar>
            <span>{sender?.name}</span>
          </div>
          <div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost">
                    <Check />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Accept Request</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="destructive">
                    <X />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Reject Request</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </DropdownMenuItem>
    </>
  );
};
