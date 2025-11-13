import React from "react";
import TradeFlowPanel from "./TradeFlowPanel"; // ✅ Correct import

const TradeFlowSubtab: React.FC = () => {
  return (
    <div style={{ position: "absolute", top: "80px", left: "4%", width: "92%", height: "calc(100% - 100px)" }}>
      <TradeFlowPanel />
    </div>
  );
};

export default TradeFlowSubtab;
