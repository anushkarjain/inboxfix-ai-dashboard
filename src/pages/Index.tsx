import { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { HomeTab } from "@/components/dashboard/HomeTab";
import { NotificationsTab } from "@/components/dashboard/NotificationsTab";
import { FiltersTab } from "@/components/dashboard/FiltersTab";
import { DigestTab } from "@/components/dashboard/DigestTab";
import { SettingsTab } from "@/components/dashboard/SettingsTab";
import { Badge } from "@/components/ui/badge";
import { Menu, Award, Sparkles } from "lucide-react";

type TabKey = "home" | "digest" | "notifications" | "filters" | "settings";

const Index = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("home");

  const renderTabContent = () => {
    switch (activeTab) {
      case "home":
        return <HomeTab />;
      case "digest":
        return <DigestTab />;
      case "notifications":
        return <NotificationsTab />;
      case "filters":
        return <FiltersTab />;
      case "settings":
        return <SettingsTab />;
      default:
        return <HomeTab />;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar activeTab={activeTab} onTabChange={setActiveTab} />
        <main className="flex-1 flex flex-col">
          {/* Header */}
          <header className="bg-white/95 backdrop-blur-sm border-b border-cisco-blue/10 p-4 lg:p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <SidebarTrigger className="lg:hidden p-2 hover:bg-cisco-blue/10 rounded-lg transition-colors">
                  <Menu className="w-5 h-5 text-cisco-blue" />
                </SidebarTrigger>
                <div>
                  <h1 className="text-2xl font-bold text-cisco-dark">
                    Welcome to InboxFix AI
                  </h1>
                  <p className="text-cisco-gray-dark mt-1 font-medium">
                    AI-powered email assistant for Cisco employees
                  </p>
                </div>
              </div>
              <div className="text-sm text-gray-500">
                {new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            </div>
          </header>

          {/* Main Content */}
          <div className="flex-1 p-4 lg:p-8 overflow-auto">
            {renderTabContent()}
          </div>

          {/* Footer */}
          <footer className="bg-white/95 backdrop-blur-sm border-t border-cisco-blue/10 p-6 flex justify-center">
            <Badge 
              variant="secondary" 
              className="bg-cisco-blue/10 text-cisco-dark border-cisco-blue/20 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-cisco-blue" />
                <span className="font-semibold">Built for Cisco IT Hackathon 2025</span>
                <Sparkles className="w-4 h-4 text-cisco-purple" />
              </div>
            </Badge>
          </footer>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
