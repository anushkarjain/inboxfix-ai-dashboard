
import { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { HomeTab } from "@/components/dashboard/HomeTab";
import { NotificationsTab } from "@/components/dashboard/NotificationsTab";
import { FiltersTab } from "@/components/dashboard/FiltersTab";
import { DigestTab } from "@/components/dashboard/DigestTab";
import { SettingsTab } from "@/components/dashboard/SettingsTab";
import { Menu } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");

  const renderTabContent = () => {
    switch (activeTab) {
      case "home":
        return <HomeTab />;
      case "notifications":
        return <NotificationsTab />;
      case "filters":
        return <FiltersTab />;
      case "digest":
        return <DigestTab />;
      case "settings":
        return <SettingsTab />;
      default:
        return <HomeTab />;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-cisco-gray">
        <AppSidebar activeTab={activeTab} onTabChange={setActiveTab} />
        <main className="flex-1 flex flex-col">
          {/* Header */}
          <header className="bg-white border-b border-cisco-blue/20 p-4 lg:p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <SidebarTrigger className="lg:hidden">
                  <Menu className="w-5 h-5" />
                </SidebarTrigger>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    Welcome to InboxFix AI
                  </h1>
                  <p className="text-sm text-gray-600 mt-1">
                    AI-powered email assistant for Cisco employees
                  </p>
                </div>
              </div>
              <div className="text-sm text-gray-500">
                {new Date().toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
            </div>
          </header>

          {/* Main Content */}
          <div className="flex-1 p-4 lg:p-6 overflow-auto">
            {renderTabContent()}
          </div>

          {/* Footer */}
          <footer className="bg-white border-t border-cisco-blue/20 p-4 text-center">
            <p className="text-sm text-gray-600">
              Built for <span className="font-semibold text-cisco-blue">Cisco IT Hackathon 2025</span>
            </p>
          </footer>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
