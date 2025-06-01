// mockEmails.js

// For DigestTab (Detailed Email Cards)
export const mockDigestEmails = [
  {
    id: 1,
    sender: "Sarah Johnson",
    subject: "Q1 Budget Review Meeting",
    preview:
      "Hi team, I wanted to schedule our quarterly budget review meeting for next week. Please review the attached...",
    importance: "High",
    timestamp: "2 hours ago",
  },
  {
    id: 2,
    sender: "JIRA System",
    subject: "Critical Bug Report #JB-1234",
    preview:
      "A critical bug has been reported in the production environment. The issue affects user authentication and requires...",
    importance: "High",
    timestamp: "4 hours ago",
  },
  {
    id: 3,
    sender: "Mike Chen",
    subject: "Code Review Required",
    preview:
      "Please review the pull request for the new API endpoints. The changes include enhanced security measures and...",
    importance: "Medium",
    timestamp: "6 hours ago",
  },
  {
    id: 4,
    sender: "IT Security",
    subject: "Monthly Security Update",
    preview:
      "This month's security report shows improvements in our threat detection capabilities. We've successfully...",
    importance: "Medium",
    timestamp: "1 day ago",
  },
  {
    id: 5,
    sender: "Marketing Team",
    subject: "Campaign Performance Report",
    preview:
      "The latest marketing campaign has exceeded expectations with a 25% increase in conversion rates. Here's a detailed...",
    importance: "Low",
    timestamp: "1 day ago",
  },
];

// For Charts / Categorized Filters
export const groupedMockEmails = {
  Urgent: [
    {
      subject: "Server Down - Immediate Action Required",
      source: "Jira",
      time: "2 mins ago",
    },
    {
      subject: "Security Breach Detected",
      source: "Outlook",
      time: "5 mins ago",
    },
    {
      subject: "Customer Escalation",
      source: "Webex",
      time: "10 mins ago",
    },
  ],
  Important: [
    {
      subject: "QBR Review Deck",
      source: "Outlook",
      time: "30 mins ago",
    },
    {
      subject: "Monthly Utilization Report",
      source: "BridgeIT",
      time: "45 mins ago",
    },
    {
      subject: "Upcoming Sprint Planning",
      source: "Jira",
      time: "1 hour ago",
    },
    {
      subject: "Meeting Reminder - EMEA team",
      source: "Outlook",
      time: "2 hours ago",
    },
  ],
  Normal: [
    {
      subject: "Weekly Newsletter",
      source: "Outlook",
      time: "1 day ago",
    },
    {
      subject: "Cisco IT Fun Events",
      source: "Webex",
      time: "2 days ago",
    },
    {
      subject: "ServiceNow Update Notice",
      source: "ServiceNow",
      time: "3 days ago",
    },
  ],
};

// For Simple Email Lists or Cards
export const mockEmails = [
  {
    subject: "Your Webex report is ready",
    sender: "webex@cisco.com",
    time: "9:32 AM",
    priority: "High",
  },
  {
    subject: "Jira ticket assigned: IT-3244",
    sender: "jira@cisco.com",
    time: "8:15 AM",
    priority: "Medium",
  },
  {
    subject: "All hands meeting tomorrow",
    sender: "hr@cisco.com",
    time: "7:50 AM",
    priority: "Low",
  },
];
