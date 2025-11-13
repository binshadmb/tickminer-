import React from "react";
import OrderQueuePanel from "./OrderQueuePanel";

const OrderQueueSubtab: React.FC = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "80px",
        left: "4%",
        width: "92%",
        height: "calc(100% - 100px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "14px",
        color: "#666",
        flexDirection: "column",
      }}
    >
      <OrderQueuePanel />
    </div>
  );
};

export default OrderQueueSubtab;
