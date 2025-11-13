// sorted/tsx/components/MainTabBar.tsx
import React from "react";
import Link from "next/link";

interface MainTabBarProps {
  activeMain: string;
}

const mainTabs = [
  { label: "Live Status", path: "/" },
  { label: "Account", path: "/Account" },
  { label: "Feed Mode", path: "/FeedMode" },
  { label: "Strategy", path: "/Strategy" },
  { label: "Profit & Loss", path: "/ProfitLoss" },
  { label: "Compliance", path: "/Compliance" },
  { label: "Settings", path: "/Settings" },
];

export const MainTabBar: React.FC<MainTabBarProps> = ({ activeMain }) => {
  return (
    <div className="flex items-center gap-3 mb-5 border-b border-slate-800 pb-2">
      {mainTabs.map((tab) => (
        <Link
          key={tab.label}
          href={tab.path}
          className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
            activeMain === tab.label
              ? "bg-emerald-500 text-black shadow"
              : "text-slate-400 hover:text-white hover:bg-slate-800"
          }`}
        >
          {tab.label}
        </Link>
      ))}
    </div>
  );
};
