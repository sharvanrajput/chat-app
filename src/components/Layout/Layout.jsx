import AppSidebar from "../AppSidebar";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import Header from "./Header";

export default function Layout(WrappedComponent) {
  return (props) => {
    return (
      <>
        <SidebarProvider
          style={{
            "--sidebar-width": "25rem",
            "--sidebar-width-mobile": "20rem",
          }}
        >
          <AppSidebar />
          <main className="w-full">
            <Header />
            <WrappedComponent {...props} />
          </main>
        </SidebarProvider>
      </>
    );
  };
}
