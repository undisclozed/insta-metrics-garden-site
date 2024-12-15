import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, User, BarChart2, Settings } from "lucide-react";
import Sidebar, {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

const items = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Profile",
    path: "/profile",
    icon: User,
  },
  {
    title: "Analytics",
    path: "/analytics",
    icon: BarChart2,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-3 px-3 py-2 ${
                      location.pathname === item.path
                        ? "text-primary bg-primary/10"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="font-medium">{item.title}</span>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}