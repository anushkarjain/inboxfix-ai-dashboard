const fallbackDigestData = {
  totalEmails: 120,
  importantEmails: 40,
  unreadCount: 65,
  meetingsToday: 3,
  flaggedItems: 5,
  topProjects: ["InboxFix", "BridgeIT", "FY25 Goals"],
  highlights: [
    { title: "Important Email from Manager", timestamp: "9:15 AM" },
    { title: "Team Meeting Scheduled", timestamp: "11:30 AM" },
  ],
};

setDigest(fallbackDigestData);
