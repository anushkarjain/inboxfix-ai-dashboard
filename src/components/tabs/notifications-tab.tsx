"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BellIcon } from "lucide-react";

const mockNotifications = [
  {
    title: "Action Required: Approve QBR slides",
    description: "Marketing QBR deck pending approval from your side.",
    tag: "Urgent",
    time: "Today 10:15 AM",
  },
  {
    title: "Reminder: Submit OKRs",
    description: "Deadline for H2 OKRs is tomorrow EOD.",
    tag: "Reminder",
    time: "Yesterday 5:00 PM",
  },
  {
    title: "Escalation: Missed Email from VP",
    description: "High-priority thread missed from [VP Name]",
    tag: "Escalation",
    time: "Monday 9:23 AM",
  },
];

export function NotificationsTab() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center space-x-3">
        <BellIcon className="h-6 w-6 text-gray-700" />
        <h2 className="text-3xl font-bold text-gray-900">Notifications</h2>
      </div>
      <p className="text-gray-600">Here’s what you shouldn’t miss</p>

      <div className="space-y-4">
        {mockNotifications.map((item, index) => (
          <Card key={index}>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center justify-between text-lg">
                {item.title}
                <Badge variant="outline">{item.tag}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700">{item.description}</p>
              <p className="text-xs text-gray-500 mt-2">{item.time}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
