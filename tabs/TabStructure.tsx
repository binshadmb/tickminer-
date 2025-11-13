"use client";

import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";

// === Tab structure data ===
export const tabStructure: Record<string, string[]> = {
  "LIVE STATUS": [
    "Overview (Landing)",
    "System Health",
    "Feed Diagnostics",
    "Trade Flow",
    "Order Queue",
    "Execution Latency",
    "Network Monitor",
  ],
  "ACCOUNT": [
    "Overview (Landing)",
    "Exposure",
    "Equity",
    "Margin",
    "CDSS",
    "Audit",
    "Reports",
    "Settings",
  ],
  "FEED MODE": [
    "Overview (Landing)",
    "Metrics Lab",
    "Refinery / Filter Engine",
    "Feed Watchlist",
    "Institutional Flow Map",
    "Diagnostics",
  ],
  "STRATEGY": [
    "Overview (Landing)",
    "Builder",
    "Backtest",
    "Optimizer",
    "Execution Cluster",
    "SL Logic",
    "Performance",
    "Settings",
  ],
  "PROFIT & LOSS": [
    "Overview (Landing)",
    "Daily",
    "Weekly",
    "Breakdown",
    "Charts",
  ],
  "COMPLIANCE": [
    "Overview (Landing)",
    "Rules",
    "Violations",
    "Review",
  ],
  "SETTINGS": [
    "Overview (Landing)",
    "System",
    "Alerts",
    "Themes",
    "Integrations",
  ],
};

export default function TabStructure({
  onSelect,
}: {
  onSelect?: (main: string, sub: string) => void;
}) {

  // Fix: load draggable positions safely AFTER mount
  const [mainPos, setMainPos] = useState({ x: 0, y: 0 });
  const [subPos, setSubPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setMainPos({
        x: parseInt(localStorage.getItem("mainTabsX") || "0", 10),
        y: parseInt(localStorage.getItem("mainTabsY") || "0", 10),
      });

      setSubPos({
        x: parseInt(localStorage.getItem("subTabsX") || "0", 10),
        y: parseInt(localStorage.getItem("subTabsY") || "0", 10),
      });
    }
  }, []);

  const [activeMain, setActiveMain] = useState<keyof typeof tabStructure>("LIVE STATUS");
  const [activeSub, setActiveSub] = useState(tabStructure["LIVE STATUS"][0]);

  const handleMainClick = (main: keyof typeof tabStructure) => {
    setActiveMain(main);
    const firstSub = tabStructure[main][0];
    setActiveSub(firstSub);
    onSelect?.(main, firstSub);
  };

  const handleSubClick = (sub: string) => {
    setActiveSub(sub);
    onSelect?.(activeMain, sub);
  };

  return (
    <div className="w-screen h-screen bg-white text-gray-900 relative p-6">

      {/* MAIN TABS */}
      <Draggable
        defaultPosition={mainPos}
        onStop={(e, data) => {
          localStorage.setItem("mainTabsX", data.x.toString());
          localStorage.setItem("mainTabsY", data.y.toString());
        }}
      >
        <div className="absolute top-16 left-4 flex gap-2 bg-gray-100 border p-2 rounded shadow cursor-move z-50">
          {Object.keys(tabStructure).map((main) => (
            <button
              key={main}
              onClick={() => handleMainClick(main as keyof typeof tabStructure)}
              style={{
                backgroundColor: activeMain === main ? "#FF0000" : "#E5E7EB",
                color: activeMain === main ? "#FFFFFF" : "#374151",
              }}
              className="px-3 py-1 rounded hover:opacity-90"
            >
              {main}
            </button>
          ))}
        </div>
      </Draggable>

      {/* SUBTABS */}
      <Draggable
        defaultPosition={subPos}
        onStop={(e, data) => {
          localStorage.setItem("subTabsX", data.x.toString());
          localStorage.setItem("subTabsY", data.y.toString());
        }}
      >
        <div className="absolute top-32 left-4 flex gap-2 bg-gray-50 border p-2 rounded shadow cursor-move z-40">
          {tabStructure[activeMain].map((sub) => (
            <button
              key={sub}
              onClick={() => handleSubClick(sub)}
              style={{
                border: activeSub === sub ? "2px solid #FF0000" : "none",
                color: activeSub === sub ? "#FF0000" : "#374151",
                backgroundColor: activeSub === sub ? "#FFFFFF" : "#E5E7EB",
              }}
              className="px-3 py-1 rounded hover:opacity-90"
            >
              {sub}
            </button>
          ))}
        </div>
      </Draggable>

      {/* ACTIVE BANNER */}
      <div className="flex-1 flex items-center justify-center text-2xl font-bold mt-48">
        <span style={{ color: "#FF0000" }}>
          {activeMain} → {activeSub}
        </span>
      </div>
    </div>
  );
}
