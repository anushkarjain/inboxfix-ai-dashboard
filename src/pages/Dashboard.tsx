import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DigestTab } from "@/components/Dashboard/DigestTab";
import { FiltersTab } from "@/components/Dashboard/FiltersTab";
import { NotificationsTab } from "@/components/Dashboard/NotificationsTab";
import { SettingsTab } from "@/components/Dashboard/SettingsTab";
import { FiltersTab } from "@/components/tabs/filters-tab";


export default function Dashboard() {
  
  return (
    <div className="p-6">
      <Tabs defaultValue="digest" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-4">
          <TabsTrigger value="digest">Digest</TabsTrigger>
          <TabsTrigger value="filters">Filters</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="digest">
          <DigestTab />
        </TabsContent>
        <TabsContent value="filters">
          <FiltersTab />
        </TabsContent>
        <TabsContent value="notifications">
          <NotificationsTab />
        </TabsContent>
        <TabsContent value="settings">
          <SettingsTab />
        </TabsContent>
        <TabsContent value="filters">        
          <FiltersTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}
