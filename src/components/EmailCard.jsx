// src/components/EmailCard.js
import React from "react";

const priorityColors = {
  Urgent: "#fdecea",
  Important: "#fff8e1",
  Normal: "#e6f4ea",
};

export default function EmailCard({ title, count }) {
  return (
    <div style={{
      backgroundColor: priorityColors[title] || "#f0f0f0",
      padding: "0.5rem",
      borderRadius: "6px",
      flex: 1,
      textAlign: "center",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
    }}>
      <h4 style={{ margin: 0 }}>{title}</h4>
      <p style={{ fontSize: "18px", margin: "0.25rem 0" }}>{count}</p>
    </div>
  );
}
