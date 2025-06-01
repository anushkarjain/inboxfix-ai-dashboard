export function classifyTask(task: string): "brain-heavy" | "admin" | "creative" {
  if (task.toLowerCase().includes("review") || task.toLowerCase().includes("analyze")) {
    return "brain-heavy";
  } else if (task.toLowerCase().includes("reply") || task.toLowerCase().includes("approve")) {
    return "admin";
  } else {
    return "creative";
  }
}

export function estimateTime(task: string): number {
  const category = classifyTask(task);
  switch (category) {
    case "brain-heavy":
      return 90; // mins
    case "creative":
      return 60;
    case "admin":
      return 30;
    default:
      return 45;
  }
}


export function generateSchedule(tasks, calendarEvents) {
  const schedule = [];

  const workingHours = [
    { slot: "9:00 AM", type: "deep" },
    { slot: "11:00 AM", type: "creative" },
    { slot: "1:00 PM", type: "light" },
    { slot: "3:00 PM", type: "meeting" },
    { slot: "5:00 PM", type: "wrap" },
  ];

  const motivationalQuotes = {
    deep: "Tackle the hard stuff now, future you will thank you.",
    creative: "Now’s the time to brainstorm and build.",
    light: "A calm mind does wonders — take it slow.",
    meeting: "Connect. Share. Align.",
    wrap: "Wind down and reflect. You did good today.",
  };


  
  for (let i = 0; i < workingHours.length; i++) {
    const slot = workingHours[i];
    const task = tasks.find(t => t.priority === slot.type) || tasks[i % tasks.length];

    schedule.push({
      time: slot.slot,
      task: task?.title || "Catch-up / Admin",
      type: slot.type,
      quote: motivationalQuotes[slot.type],
    });
  }

  return schedule;
}
