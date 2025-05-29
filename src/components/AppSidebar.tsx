
import {
  Home,
  Bell,
  Filter,
  Mail,
  Settings,
  Bot
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const menuItems = [
  {
    title: "Home",
    icon: Home,
    id: "home",
  },
  {
    title: "Notifications",
    icon: Bell,
    id: "notifications",
  },
  {
    title: "Filters",
    icon: Filter,
    id: "filters",
  },
  {
    title: "Daily Digest Preview",
    icon: Mail,
    id: "digest",
  },
  {
    title: "Settings",
    icon: Settings,
    id: "settings",
  },
];

interface AppSidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function AppSidebar({ activeTab, onTabChange }: AppSidebarProps) {
  return (
    <Sidebar className="border-r border-cisco-blue/20">
      <SidebarHeader className="p-6 border-b border-cisco-blue/20">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-cisco-blue rounded-lg flex items-center justify-center">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-cisco-blue">InboxFix AI</h1>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => onTabChange(item.id)}
                    isActive={activeTab === item.id}
                    className={`w-full justify-start space-x-3 py-3 px-4 rounded-lg transition-all duration-200 ${
                      activeTab === item.id
                        ? "bg-cisco-blue text-white shadow-md"
                        : "hover:bg-cisco-blue/10 text-gray-700"
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
