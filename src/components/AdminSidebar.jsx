import { AdminSidebarData } from "@/constants/sampleData";
import { Link } from "react-router-dom";
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

export default function AdminSidebar() {
    const { isMobile, setOpenMobile } = useSidebar();

    const onClickSiceclose = () => {
        if (isMobile) {
            setOpenMobile(false);
        }
    };

    return (
        <>
            <Sidebar>
                <SidebarHeader className={"bg-white"} >
                    ADMIN DASHBOARD
                </SidebarHeader>
                <SidebarContent className={"bg-white"}>
                    <SidebarGroup>
                        <SidebarMenu>
                            {AdminSidebarData.map((menu, i) => (
                                <SidebarMenuItem key={i}>
                                    <Link onClick={onClickSiceclose} to={menu.path}   >
                                        <SidebarMenuButton asChild>
                                            <Button variant="ghost">
                                                <menu.icon />
                                                {menu.text}
                                            </Button>
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
