import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type DigestData = {
  totalEmails: number;
  importantEmails: number;
  unreadCount: number;
  meetingsToday: number;
  flaggedItems: number;
  topProjects: string[];
  highlights: { title: string; timestamp: string }[];
};

type BridgeUser = {
  name: string;
  email: string;
  title: string;
  department: string;
};

export function DigestTab() {
  const [userInfo, setUserInfo] = useState<BridgeUser | null>(null);
  const [digest, setDigest] = useState<DigestData | null>(null);
  const [loadingUser, setLoadingUser] = useState(true);

  const ACCESS_TOKEN = "eyJraWQiOiJYYmZSeTktVmNqc0hHSUJDcVcySUVrMmtwdGhPcXFZVHdVdkJmQzJ5b2ljIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULmxDMFVNdmJnLVFvYzBRWnBGbWV5amxUMEhJMHR5SWN2M3BuQzFiM0N2TzAiLCJpc3MiOiJodHRwczovL2lkLmNpc2NvLmNvbS9vYXV0aDIvZGVmYXVsdCIsImF1ZCI6ImFwaTovL2RlZmF1bHQiLCJpYXQiOjE3NDg1MjQyMjEsImV4cCI6MTc0ODUyNzgyMSwiY2lkIjoiY0c5akxYUnlhV0ZzTWpBeU5VMWhlVEl5LTNhNzgyMzgwMzM4OTI5MjE2Y2U3NTFkZTNlMmM4YiIsInNjcCI6WyJjdXN0b21zY29wZSJdLCJzdWIiOiJjRzlqTFhSeWFXRnNNakF5TlUxaGVUSXktM2E3ODIzODAzMzg5MjkyMTZjZTc1MWRlM2UyYzhiIiwiYXpwIjoiY0c5akxYUnlhV0ZzTWpBeU5VMWhlVEl5LTNhNzgyMzgwMzM4OTI5MjE2Y2U3NTFkZTNlMmM4YiJ9.E3V0ogJc6ovndXThUpt0u__YePZ3HoR7B3fRp1j3M-YH0O_yCc69ww8RiiLm3MpJqpYKuUq3-QFlHtZLax09_T5-GAVpoJu0XSJuY2vF4m6Moo63Fjz1Y9a0XKcBbUh3qHOqJ9QW1P_5PZ1hFHelQNhGUqrZrWU9tfmYeExifdZmK4p2_h1WE5IMPHmHAlYJZIhreVQco4N_C_3HJ5nF4RxyXTJu2ZqR-0vJY0VUhKF6y0sben2Gqf7sbQ7A1sVtL_UGb5hr6BSj_5HtrgsQUK-FO7TpUNBBeZXTsdWiNmgFfuDhcn5VPKcFKwtITxKJYjxwJGSlm7rKO8qPAccZWg"; 
  const APP_KEY = "hackathon-ciscoit-fy25-team-25";

  const mockEmailList = [
    "• Project X Update from lead@cisco.com at 10:00 AM",
    "• Budget Review Meeting from finance@cisco.com at 11:00 AM",
    "• Reminder: Security Training from it@cisco.com at 1:00 PM",
  ].join("\n");

  const prompt = `Summarize the following emails and extract total, important, unread, meetings, flagged, top projects, and highlights:\n${mockEmailList}`;

  const mockParsedData: DigestData = {
    totalEmails: 12,
    importantEmails: 5,
    unreadCount: 4,
    meetingsToday: 3,
    flaggedItems: 2,
    topProjects: ["Project X", "AI Platform"],
    highlights: [
      { title: "Project X kick-off call at 3 PM", timestamp: "10:12 AM" },
      { title: "Submit budget report", timestamp: "11:00 AM" },
    ],
  };

  useEffect(() => {
    const fetchBridgeUser = async () => {
      try {
        const res = await fetch("https://bridgeit.cisco.com/api/v1/user/profile", {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        });
        const data = await res.json();
        setUserInfo(data);
      } catch (error) {
        console.error("BridgeIT user fetch failed:", error);
      } finally {
        setLoadingUser(false);
      }
    };

    const fetchAIDigest = async () => {
      console.log("Fetching GPT summary...");
      try {
        const res = await fetch("https://chat-ai.cisco.com/openai/deployments/gpt-4o-mini/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "api-key": ACCESS_TOKEN,
          },
          body: JSON.stringify({
            messages: [
              { role: "system", content: "You are a helpful assistant." },
              { role: "user", content: prompt },
            ],
            user: JSON.stringify({ appkey: APP_KEY }),
            stop: ["<|im_end|>"],
          }),
        });

        const text = await res.text();
        console.log("GPT response (text):", text);

        // ❗Force-set mock parsed data for now
        setTimeout(() => setDigest(mockParsedData), 500);
      } catch (err) {
        console.error("GPT fetch failed:", err);
        setTimeout(() => setDigest(mockParsedData), 500); // fallback even on failure
      }
    };


    fetchBridgeUser();
    fetchAIDigest();
  }, []);

  if (!digest) {
    return <p className="text-center mt-10 text-gray-500">Loading Digest...</p>;
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {userInfo && (
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            Welcome back,{" "}
            <span className="font-semibold">
              {userInfo.name}
            </span>{" "}
            ({userInfo.title}, {userInfo.department})
          </p>
        </div>
      )}

      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Daily Digest</h2>
        <p className="text-gray-600">Summary of your email activity</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <StatCard title="Total Emails" value={digest.totalEmails} />
        <StatCard title="Important Emails" value={digest.importantEmails} />
        <StatCard title="Unread Emails" value={digest.unreadCount} />
        <StatCard title="Meetings Today" value={digest.meetingsToday} />
        <StatCard title="Flagged Emails" value={digest.flaggedItems} />
        <StatCard title="Top Projects" value={digest.topProjects.join(", ")} />
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Today's Highlights</h3>
        <div className="space-y-2">
          {digest.highlights.map((item, idx) => (
            <Card key={idx}>
              <CardContent className="p-4 flex items-center justify-between">
                <p className="text-gray-800 font-medium">{item.title}</p>
                <Badge variant="outline">{item.timestamp}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value }: { title: string; value: string | number }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm text-gray-500">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </CardContent>
    </Card>
  );
}
