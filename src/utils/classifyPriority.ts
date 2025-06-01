
export function classifyTask(task: string): "High" | "Medium" | "Low" {
  const lowered = task.toLowerCase();
  if (lowered.includes("review") || lowered.includes("qbr")) return "High";
  if (lowered.includes("check") || lowered.includes("log")) return "Medium";
  return "Low";
}
