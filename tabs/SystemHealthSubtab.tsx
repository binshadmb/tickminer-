import React from "react";
import SystemHealthPanel from "./SystemHealthPanel";

const SystemHealthSubtab: React.FC = () => {
  return (
    <div style={{ padding: 20 }}>
      <h2>System Health</h2>
      <SystemHealthPanel />
    </div>
  );
};

export default SystemHealthSubtab;
