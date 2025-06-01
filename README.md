# 📬 InboxFix AI – Smart Email Assistant for Cisco

![InboxFix AI Light Theme](./assets/inboxfix-sidebar-light.png)
![InboxFix AI Dark Theme](./assets/inboxfix-sidebar-dark.png)

## 🚀 Project Name
**InboxFix AI**

## 👥 Team Name & Members
**Team 25 – Hack to the Future**  
- Eshika Jain (Anushkarjain) – Developer, UX Designer  
- Solo submission

---

## 🧠 Problem Statement
Cisco employees face notification overload across tools like Outlook, Webex, and Jira. Important emails get buried, response times suffer, and productivity drops.

### ⚠️ Business Problem:
- Buried priorities in overflowing inboxes
- Inconsistent follow-ups on flagged or urgent threads
- Context switching between tools and priorities

---

## 💡 AI-Powered Solution: InboxFix AI
A smart email assistant that classifies, prioritizes, and schedules email workflows with:
- ✅ Daily email digest powered by GPT
- 🧠 AI classification of task types (logical, admin, creative)
- ⏰ Personal focus scheduler based on calendar & task load
- 📊 Priority dashboards with trends and sources
- 💬 Motivational quotes and snooze/reschedule actions

---

## 🔧 Submission Type
**✅ Working code-based prototype** (React + GPT + BridgeIT APIs)  
Extra credit included: 🎯 Fully functional dashboard UI, with mocked Outlook Add-in preview.

## 📹 Vidcast Demo (≤ 5 min)
🎥 [Click to watch](#) — _Add your Loom/YouTube video here_

---

## 📂 Repository Link
GitHub: [https://github.com/anushkarjain/inboxfix-ai-dashboard](https://github.com/anushkarjain/inboxfix-ai-dashboard)

---

## 🛠️ How to Run This Code Locally

```bash
# 1. Clone the repo
git clone https://github.com/anushkarjain/inboxfix-ai-dashboard
cd inboxfix-ai-dashboard

# 2. Install dependencies
npm install

# 3. Create a .env.local file (for token, optional)
touch .env.local

# 4. Run the dev server
npm run dev
```

_Use a modern browser (Chrome/Edge), preferably desktop for full UI._

---

## ⚙️ Tech Stack Used

| Area | Stack |
|------|-------|
| Frontend | React + TypeScript + TailwindCSS |
| Charts | Recharts |
| APIs | BridgeIT Profile API, GPT via Cisco Chat API |
| State | React Context |
| Auth | Bearer Token (for demo only) |
| Deployment | GitHub Pages + Manual Push |
| Design Mockups | Polymet AI, Figma (for Outlook Add-in UI) |

---

## 🧩 Features

- [x] Priority-wise email classification (High, Medium, Low)
- [x] Digest summary with unread, flagged, meeting stats
- [x] GPT-based email summarization (mocked)
- [x] BridgeIT API integration for real user profile + task data
- [x] Personal focus time generator (respects lunch hours & energy peaks)
- [x] Quote engine based on time of day
- [x] Snooze & Move logic for every task
- [x] Trend charts with sources and daily patterns

---

## 📥 Outlook Add-in (Preview Only)

- Light & Dark mode designs attached
- Replicates dashboard logic within Outlook
- Built with Polymet AI

![Preview - Outlook Add-in](./assets/inboxfix-sidebar-light.png)

---

## 🔮 Future Enhancements

- 🔁 Real calendar sync (Outlook/Google Calendar APIs)
- 🔍 Smart insights (which days/tasks lead to delays)
- 🤖 Auto GPT-classifier for long emails (brain-heavy/admin)
- ☁️ One-click deploy to Edge Sidebar as Outlook add-in
- 🔐 Secure OAuth2 token rotation for APIs

---

## 🧠 AI Summary Engine (BridgeGPT)
- Prompts designed for digest-style summaries from email blobs
- Token-safe truncation to support hourly refreshes
- Preconfigured with appkey/session_id/user JSON

---

## 🧪 Testing Notes
- Mocked email data used for GPT input
- Task estimation logic uses keyword detection for time
- Works best in desktop viewports ≥ 1280px

---

## 🕒 Submission Timestamp
June 01, 2025 (IST)

---

## 📝 Feedback
Please feel free to raise an issue, share feedback, or fork this repo!

---

_“InboxFix AI – Because your brain deserves better than inbox chaos.”_
