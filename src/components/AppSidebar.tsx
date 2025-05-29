
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
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const menuItems = [
  {
    title: "Dashboard",
    icon: Home,
    id: "home",
    description: "Overview and analytics"
  },
  {
    title: "Notifications",
    icon: Bell,
    id: "notifications", 
    description: "Manage email alerts"
  },
  {
    title: "Filters",
    icon: Filter,
    id: "filters",
    description: "Customize filtering rules"
  },
  {
    title: "Daily Digest",
    icon: Mail,
    id: "digest",
    description: "Preview daily summary"
  },
  {
    title: "Settings",
    icon: Settings,
    id: "settings",
    description: "Configure preferences"
  },
];

interface AppSidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function AppSidebar({ activeTab, onTabChange }: AppSidebarProps) {
  return (
    <TooltipProvider>
      <Sidebar className="border-r border-cisco-blue/10 bg-white/95 backdrop-blur-sm">
        <SidebarHeader className="p-6 border-b border-cisco-blue/10">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cisco-blue to-cisco-blue-dark rounded-xl flex items-center justify-center shadow-lg">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-cisco-blue to-cisco-dark bg-clip-text text-transparent">
                InboxFix AI
              </h1>
              <p className="text-xs text-cisco-gray-dark">Smart Email Assistant</p>
            </div>
          </div>
        </SidebarHeader>
        <SidebarContent className="p-4">
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.id}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <SidebarMenuButton
                          onClick={() => onTabChange(item.id)}
                          isActive={activeTab === item.id}
                          className={`w-full justify-start space-x-3 py-3 px-4 rounded-xl transition-all duration-300 group ${
                            activeTab === item.id
                              ? "bg-gradient-to-r from-cisco-blue to-cisco-blue-dark text-white shadow-lg shadow-cisco-blue/25"
                              : "hover:bg-cisco-blue/5 text-cisco-dark hover:shadow-md"
                          }`}
                        >
                          <item.icon className={`w-5 h-5 transition-transform duration-300 ${
                            activeTab === item.id ? "scale-110" : "group-hover:scale-105"
                          }`} />
                          <span className="font-medium">{item.title}</span>
                        </SidebarMenuButton>
                      </TooltipTrigger>
                      <TooltipContent side="right" className="bg-cisco-dark text-white">
                        {item.description}
                      </TooltipContent>
                    </Tooltip>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </TooltipProvider>
  );
}
