"use client";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

const priorityData = [
  { priority: "High", count: 6 },
  { priority: "Medium", count: 12 },
  { priority: "Low", count: 9 },
];

const sourceData = [
  { source: "Jira", count: 8 },
  { source: "Webex", count: 5 },
  { source: "Outlook", count: 14 },
];

const trendData = [
  { day: "Mon", emails: 10 },
  { day: "Tue", emails: 15 },
  { day: "Wed", emails: 8 },
  { day: "Thu", emails: 12 },
  { day: "Fri", emails: 20 },
];

const focusList = [
  "Reply to pending threads from Engineering",
  "Review flagged emails from leadership",
  "Approve QBR presentation",
];

const barColors = ["#00BCEB", "#AE63E4", "#5AC8B0", "#F59E0B"];

export function HomeTab() {
  const [greeting, setGreeting] = useState("Hello");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good morning");
    else if (hour < 18) setGreeting("Good afternoon");
    else setGreeting("Good evening");
  }, []);

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-1">{greeting}, Anushka 👋</h2>
        <p className="text-gray-600">Here’s your daily summary overview</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Priority Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Email by Priority</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={priorityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="priority" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#1a73e8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Source Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Email Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={sourceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="source" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#34a853" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Trend Line */}
        <Card>
          <CardHeader>
            <CardTitle>Daily Email Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="emails"
                  stroke="#fbbc04"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Today’s Focus Section */}
      <div>
        <Card>
          <CardHeader>
            <CardTitle>🔍 Today’s Focus</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
              {focusList.map((task, idx) => (
                <li key={idx}>{task}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
