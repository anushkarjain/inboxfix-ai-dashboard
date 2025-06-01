import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Notification = {
  type: string;
  message: string;
  source: string;
  time: string;
};

type BridgeSuggestion = {
  summary: string;
  actionItems: string[];
};

export function NotificationsTab() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [aiSuggestions, setAiSuggestions] = useState<BridgeSuggestion | null>(null);

  const ACCESS_TOKEN = "eyJraWQiOiJYYmZSeTktVmNqc0hHSUJDcVcySUVrMmtwdGhPcXFZVHdVdkJmQzJ5b2ljIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULmxDMFVNdmJnLVFvYzBRWnBGbWV5amxUMEhJMHR5SWN2M3BuQzFiM0N2TzAiLCJpc3MiOiJodHRwczovL2lkLmNpc2NvLmNvbS9vYXV0aDIvZGVmYXVsdCIsImF1ZCI6ImFwaTovL2RlZmF1bHQiLCJpYXQiOjE3NDg1MjQyMjEsImV4cCI6MTc0ODUyNzgyMSwiY2lkIjoiY0c5akxYUnlhV0ZzTWpBeU5VMWhlVEl5LTNhNzgyMzgwMzM4OTI5MjE2Y2U3NTFkZTNlMmM4YiIsInNjcCI6WyJjdXN0b21zY29wZSJdLCJzdWIiOiJjRzlqTFhSeWFXRnNNakF5TlUxaGVUSXktM2E3ODIzODAzMzg5MjkyMTZjZTc1MWRlM2UyYzhiIiwiYXpwIjoiY0c5akxYUnlhV0ZzTWpBeU5VMWhlVEl5LTNhNzgyMzgwMzM4OTI5MjE2Y2U3NTFkZTNlMmM4YiJ9.E3V0ogJc6ovndXThUpt0u__YePZ3HoR7B3fRp1j3M-YH0O_yCc69ww8RiiLm3MpJqpYKuUq3-QFlHtZLax09_T5-GAVpoJu0XSJuY2vF4m6Moo63Fjz1Y9a0XKcBbUh3qHOqJ9QW1P_5PZ1hFHelQNhGUqrZrWU9tfmYeExifdZmK4p2_h1WE5IMPHmHAlYJZIhreVQco4N_C_3HJ5nF4RxyXTJu2ZqR-0vJY0VUhKF6y0sben2Gqf7sbQ7A1sVtL_UGb5hr6BSj_5HtrgsQUK-FO7TpUNBBeZXTsdWiNmgFfuDhcn5VPKcFKwtITxKJYjxwJGSlm7rKO8qPAccZWg"; // Optional
  const APP_KEY = "hackathon-ciscoit-fy25-team-25";

  useEffect(() => {
    // Step 1: Mock notification fetch
    const mockNotifs: Notification[] = [
      { type: "High", message: "Jira bug #3487 needs attention", source: "Jira", time: "9:15 AM" },
      { type: "Low", message: "Webex missed call from John", source: "Webex", time: "10:00 AM" },
      { type: "Medium", message: "Outlook: Policy update from HR", source: "Outlook", time: "11:45 AM" },
    ];
    setNotifications(mockNotifs);

    // Step 2: Call GPT to get AI suggestions (mocked)
    const prompt = `Based on these notifications:\n${mockNotifs.map(n => `• ${n.message} (${n.source}, ${n.time})`).join("\n")}\nSummarize key actions and urgent items.`;

    fetch("https://chat-ai.cisco.com/openai/deployments/gpt-4o-mini/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "api-key": ACCESS_TOKEN,
      },
      body: JSON.stringify({
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: prompt }
        ],
        user: JSON.stringify({ appkey: APP_KEY }),
        stop: ["<|im_end|>"]
      })
    })
      .then(res => res.json())
      .then(data => {
        const text = data?.choices?.[0]?.message?.content || "";
        setAiSuggestions({
          summary: text,
          actionItems: ["Review Jira bug #3487", "Respond to missed call", "Acknowledge HR policy update"]
        });
      })
      .catch(err => {
        console.warn("Bridge AI fallback used:", err);
        setAiSuggestions({
          summary: "• 1 urgent Jira ticket needs attention\n• 1 missed Webex call\n• HR sent a new policy update",
          actionItems: ["Check Jira #3487", "Follow up with John", "Read HR mail"]
        });
      });

  }, []);

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-3xl font-bold text-gray-900">Notifications</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {notifications.map((notif, idx) => (
          <Card key={idx}>
            <CardHeader>
              <CardTitle>{notif.message}</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-between items-center">
              <span className="text-gray-600">{notif.source}</span>
              <Badge>{notif.type}</Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      {aiSuggestions && (
        <div>
          <h3 className="text-xl font-semibold mt-8 text-gray-800">AI Suggestions</h3>
          <Card className="mt-3">
            <CardContent className="p-4">
              <p className="text-gray-700 mb-2 whitespace-pre-line">{aiSuggestions.summary}</p>
              <ul className="list-disc list-inside text-gray-600">
                {aiSuggestions.actionItems.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
