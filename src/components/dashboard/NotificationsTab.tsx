
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MoreHorizontal, Flag, Clock, CheckCircle } from "lucide-react";

const mockNotifications = [
  {
    id: 1,
    sender: "Sarah Johnson",
    subject: "Q1 Budget Review Meeting",
    category: "Meeting",
    timestamp: "2 hours ago",
    priority: "High",
    isRead: false,
  },
  {
    id: 2,
    sender: "JIRA System",
    subject: "Critical Bug Report #JB-1234",
    category: "Alert",
    timestamp: "4 hours ago",
    priority: "High",
    isRead: false,
  },
  {
    id: 3,
    sender: "Mike Chen",
    subject: "Code Review Required",
    category: "Action Required",
    timestamp: "6 hours ago",
    priority: "Medium",
    isRead: true,
  },
  {
    id: 4,
    sender: "Webex Teams",
    subject: "Meeting Recording Available",
    category: "Meeting",
    timestamp: "8 hours ago",
    priority: "Low",
    isRead: true,
  },
  {
    id: 5,
    sender: "IT Security",
    subject: "Monthly Security Update",
    category: "Alert",
    timestamp: "1 day ago",
    priority: "Medium",
    isRead: false,
  },
];

const priorityColors = {
  High: "bg-red-100 text-red-800 border-red-200",
  Medium: "bg-yellow-100 text-yellow-800 border-yellow-200",
  Low: "bg-green-100 text-green-800 border-green-200",
};

const categoryColors = {
  Meeting: "bg-blue-100 text-blue-800",
  Alert: "bg-orange-100 text-orange-800",
  "Action Required": "bg-purple-100 text-purple-800",
};

export function NotificationsTab() {
  const [notifications, setNotifications] = useState(mockNotifications);
  const [priorityFilter, setPriorityFilter] = useState<string>("all");
  const [sourceFilter, setSourceFilter] = useState<string>("all");

  const filteredNotifications = notifications.filter((notification) => {
    const priorityMatch = priorityFilter === "all" || notification.priority === priorityFilter;
    const sourceMatch = sourceFilter === "all" || 
      (sourceFilter === "Outlook" && !["JIRA System", "Webex Teams"].includes(notification.sender)) ||
      (sourceFilter === "Jira" && notification.sender === "JIRA System") ||
      (sourceFilter === "Webex" && notification.sender === "Webex Teams");
    return priorityMatch && sourceMatch;
  });

  const handleMarkAsRead = (id: number) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, isRead: true } : notif
    ));
  };

  const handleSnooze = (id: number) => {
    console.log(`Snoozed notification ${id}`);
  };

  const handleFlag = (id: number) => {
    console.log(`Flagged notification ${id}`);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Notifications</h2>
        <p className="text-gray-600">Manage your email alerts and notifications</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Select value={priorityFilter} onValueChange={setPriorityFilter}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Filter by Priority" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Priorities</SelectItem>
            <SelectItem value="High">High</SelectItem>
            <SelectItem value="Medium">Medium</SelectItem>
            <SelectItem value="Low">Low</SelectItem>
          </SelectContent>
        </Select>

        <Select value={sourceFilter} onValueChange={setSourceFilter}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Filter by Source" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Sources</SelectItem>
            <SelectItem value="Outlook">Outlook</SelectItem>
            <SelectItem value="Jira">Jira</SelectItem>
            <SelectItem value="Webex">Webex</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Notification Cards */}
      <div className="space-y-4">
        {filteredNotifications.map((notification) => (
          <Card key={notification.id} className={`transition-all duration-200 hover:shadow-md ${
            !notification.isRead ? "border-l-4 border-l-cisco-blue bg-blue-50/30" : ""
          }`}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-gray-900 truncate">
                      {notification.sender}
                    </h3>
                    <Badge 
                      variant="outline" 
                      className={priorityColors[notification.priority as keyof typeof priorityColors]}
                    >
                      {notification.priority}
                    </Badge>
                    <Badge 
                      variant="secondary" 
                      className={categoryColors[notification.category as keyof typeof categoryColors]}
                    >
                      {notification.category}
                    </Badge>
                  </div>
                  <p className="text-lg font-medium text-gray-800 mb-2">
                    {notification.subject}
                  </p>
                  <p className="text-sm text-gray-500">{notification.timestamp}</p>
                </div>
                
                <div className="flex items-center gap-2 ml-4">
                  {!notification.isRead && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleMarkAsRead(notification.id)}
                      className="hover:bg-green-50 hover:border-green-300"
                    >
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Mark as Read
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleSnooze(notification.id)}
                    className="hover:bg-yellow-50 hover:border-yellow-300"
                  >
                    <Clock className="w-4 h-4 mr-1" />
                    Snooze
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleFlag(notification.id)}
                    className="hover:bg-red-50 hover:border-red-300"
                  >
                    <Flag className="w-4 h-4 mr-1" />
                    Flag
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
