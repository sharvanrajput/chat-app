import { AdminSidebarData } from "@/constants/sampleData";
import { Link, Navigate, useLocation } from "react-router-dom";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "./ui/sidebar";
import { Button } from "./ui/button";
import { FaWhatsapp } from "react-icons/fa";

export default function AdminSidebar() {
    const { isMobile, setOpenMobile } = useSidebar();

    const onClickSiceclose = () => {
        if (isMobile) {
            setOpenMobile(false);
        }
    };

    const { pathname } = useLocation()



    return (
        <>
            <Sidebar collapsible="icon"  >
                <SidebarHeader className={"bg-white flex flex-row justify-start gap-2 items-center "} >
                    <FaWhatsapp className="size-7" />
                    Hi..
                </SidebarHeader>
                <SidebarContent className={"bg-white"}>
                    <SidebarGroup>
                        <SidebarMenu>
                            {AdminSidebarData.map((menu, i) => (
                                <SidebarMenuItem key={i}>
                                    <Link onClick={onClickSiceclose} to={menu.path}   >
                                        <SidebarMenuButton className={`${menu.path == pathname && "bg-black text-white "} hover:bg-gray-600 hover:text-white`} >
                                            <menu.icon className="size-15" />
                                            {menu.text}
                                        </SidebarMenuButton>
                                    </Link>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroup>
                </SidebarContent>
                <SidebarFooter className={"bg-white"} />
            </Sidebar >
        </>
    );
}
