import {
  Bell,
  LogOut,
  Plus,
  SidebarCloseIcon,
  Users,
  UserSearch,
} from "lucide-react";
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
  const logouthandler = () => {};

  return (
    <nav className="bg-white py-2 px-3 border border-b">
      <div className="flex justify-between items-center">
        <SidebarCloseIcon onClick={toggleSidebar} className="text-black" />

        <div className="flex items-center gap-3">
          <Navitom fun={openSearch} Icon={UserSearch} tip="Search" />
          <Navitom fun={openNewGroup} Icon={Plus} tip="New Group" />
          <Navitom fun={navigateToGroup} Icon={Users} tip="manage Group" />
          <Navitom fun={openNotification} Icon={Bell} tip="Notifications" />
          <Navitom
            fun={logouthandler}
            variant="destructive"
            Icon={LogOut}
            tip="logout"
          />
        </div>
      </div>

      {isSearch && <Search />}
      {isNotifications && <Notifications />}
      {isNewGroup && <NewGroups />}
    </nav>
  );
}

const Navitom = ({ fun, Icon, tip, variant = "outline" }) => {
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
