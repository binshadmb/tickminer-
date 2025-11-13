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
  const [dragEnabled, setDragEnabled] = useState(true);
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
      const savedDrag = localStorage.getItem("dragEnabled");
      if (savedDrag !== null) setDragEnabled(savedDrag === "true");
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

  const toggleDrag = () => {
    const newState = !dragEnabled;
    setDragEnabled(newState);
    localStorage.setItem("dragEnabled", newState.toString());
  };

  // === Styled Toggle Switch ===
  const DragToggle = (
    <div className="absolute top-4 left-4 z-50">
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={dragEnabled}
          onChange={toggleDrag}
          className="sr-only peer"
        />
        <div className="w-12 h-6 bg-gray-300 rounded-full peer-checked:bg-red-500 relative transition-colors">
          <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-6"></div>
        </div>
        <span className="ml-3 text-sm font-medium text-gray-700">
          {dragEnabled ? "Dragging On" : "Dragging Off"}
        </span>
      </label>
    </div>
  );

  // === Main Tabs ===
  const MainTabs = (
    <div className="flex gap-2 bg-gray-100 border p-2 rounded shadow z-50">
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
  );

  // === Sub Tabs ===
  const SubTabs = (
    <div className="flex gap-2 bg-gray-50 border p-2 rounded shadow z-40">
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
  );

  return (
    <div className="w-screen h-screen bg-white text-gray-900 relative p-6">
      {DragToggle}

      {/* MAIN TABS */}
      {dragEnabled ? (
        <Draggable
          defaultPosition={mainPos}
          onStop={(e, data) => {
            localStorage.setItem("mainTabsX", data.x.toString());
            localStorage.setItem("mainTabsY", data.y.toString());
            setMainPos({ x: data.x, y: data.y });
          }}
        >
          {MainTabs}
        </Draggable>
      ) : (
        <div
          style={{ transform: `translate(${mainPos.x}px, ${mainPos.y}px)` }}
          className="fixed"
        >
          {MainTabs}
        </div>
      )}

      {/* SUBTABS */}
      {dragEnabled ? (
        <Draggable
          key={activeMain}
          defaultPosition={subPos}
          onStop={(e, data) => {
            localStorage.setItem("subTabsX", data.x.toString());
            localStorage.setItem("subTabsY", data.y.toString());
            setSubPos({ x: data.x, y: data.y });
          }}
        >
          {SubTabs}
        </Draggable>
      ) : (
        <div
          style={{ transform: `translate(${subPos.x}px, ${subPos.y}px)` }}
          className="fixed"
        >
          {SubTabs}
        </div>
      )}

      {/* ACTIVE BANNER */}
      <div className="flex-1 flex items-center justify-center text-2xl font-bold mt-48">
        <span style={{ color: "#FF0000" }}>
          {activeMain} → {activeSub}
        </span>
      </div>
    </div>
  );
}
