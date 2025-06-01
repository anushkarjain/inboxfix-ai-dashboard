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
import { generateSchedule, classifyTask } from "@/utils/focusScheduler";

// Extracted schedule info
const { focusSlot, quote: focusQuote } = generateSchedule([], [], {});

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

// Estimate task duration (simple logic)
const estimateTime = (task: string) => {
  if (task.toLowerCase().includes("review")) return 30;
  if (task.toLowerCase().includes("reply")) return 10;
  return 20;
};

// Dynamic greeting quote
function getMotivationalQuote() {
  const hour = new Date().getHours();
  if (hour < 12) return "🌞 Rise and grind — your focus sets the tone for the day!";
  if (hour < 16) return "🚀 You're in your peak zone — knock out those key tasks!";
  if (hour < 20) return "🌤️ Keep steady, you're doing great. Push through the evening!";
  return "🌙 Reflect and recharge — tomorrow is a new chance to conquer.";
}

export function HomeTab() {
  const [greeting, setGreeting] = useState("Hello");
  const [motivationalQuote, setMotivationalQuote] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good morning");
    else if (hour < 18) setGreeting("Good afternoon");
    else setGreeting("Good evening");

    setMotivationalQuote(getMotivationalQuote());
  }, []);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Greeting + Quote */}
      <div className="flex justify-between items-start flex-wrap gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-1">{greeting}, Anushka 👋</h2>
          <p className="text-gray-600">Here’s your daily summary overview</p>
        </div>
        <Card className="max-w-md shadow-md">
          <CardContent className="py-2 px-4 text-sm text-center text-gray-700 font-medium">
            {motivationalQuote}
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
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
                <Line type="monotone" dataKey="emails" stroke="#fbbc04" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Focus Time Block */}
      <div>
        
        {/* Focus Task List */}
        <Card className="mt-4">
          <CardHeader>
            <CardTitle>🔍 Today’s Focus</CardTitle>
          </CardHeader>
          <CardContent className="text-center py-4">
            🌟 Today’s Focus Time: <strong>{focusSlot}</strong><br />
            <em>{focusQuote}</em>
          </CardContent>
          <CardContent>
            <div className="space-y-3">
              {focusList.map((task, idx) => (
                <div
                  key={idx}
                  className="bg-gray-100 px-4 py-3 rounded-md flex justify-between items-center"
                >
                  <div>
                    <p className="text-gray-800 text-sm font-medium">{task}</p>
                    <p className="text-xs text-gray-600 italic">
                      {classifyTask(task)} • ~{estimateTime(task)} min
                    </p>
                  </div>
                  <div className="space-x-2">
                    <button
                      onClick={() => alert(`Snoozed: ${task}`)}
                      className="text-xs px-2 py-1 bg-yellow-200 hover:bg-yellow-300 rounded"
                    >
                      Snooze
                    </button>
                    <button
                      onClick={() => alert(`Moved: ${task}`)}
                      className="text-xs px-2 py-1 bg-blue-200 hover:bg-blue-300 rounded"
                    >
                      Move
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
