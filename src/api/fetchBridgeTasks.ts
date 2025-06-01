// src/api/fetchBridgeTasks.ts
export async function fetchBridgeTasks(token: string, appKey: string) {
  try {
    const response = await fetch("https://bridgeit.cisco.com/api/v1/user/tasks", {
      headers: {
        Authorization: `Bearer ${token}`,
        "X-App-Key": appKey,
      },
    });

    const data = await response.json();

    // Optional: classify tasks with AI later
    return data.tasks || [];
  } catch (error) {
    console.error("Failed to fetch BridgeIT tasks:", error);
    return [];
  }
}
