import {
  Bell,
  LogOut,
  Plus,
  SidebarCloseIcon,
  Users,
  UserSearch,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useSidebar } from "../ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import Search from "../specific/Search";
import NewGroups from "../specific/NewGroups";
import Notifications from "../specific/Notifications";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Header() {
  const { toggleSidebar, open } = useSidebar();

  const [isSearch, setIsSearch] = useState(false);
  const [isNewGroup, setNewGroup] = useState(false);
  const [isNotifications, setNotifications] = useState(false);

  const navigate = useNavigate();
  const openSearch = () => setIsSearch((prev) => !prev);
  const openNotification = () => setNotifications((prev) => !prev);
  const openNewGroup = () => setNewGroup((prev) => !prev);
  const navigateToGroup = () => navigate("/groups");
  const logouthandler = () => { };

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
          // dylogBody={<Notifications />}
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

const Navitom = ({ dropdown, fun, Icon, tip, dylogBody, variant = "outline" }) => {
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
        <DropdownMenuContent className={"ms-10"} >
          <DropdownMenuGroup>
            <DropdownMenuLabel>Notification</DropdownMenuLabel>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />

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
