"use client";

import React, { useState } from "react";
import TabStructure from "../tabs/TabStructure";
import { cockpitTabsRegistry } from "../tabs/CockpitTabsRegistry";

export default function HomePage() {
  const [activeMain, setActiveMain] = useState("LIVE STATUS");
  const [activeSub, setActiveSub] = useState("Overview (Landing)");

  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <TabStructure
        onSelect={(main: string, sub: string) => {
          setActiveMain(main);
          setActiveSub(sub);
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "48%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90vw",
          height: "80vh",
          overflow: "auto",
          padding: "20px",
        }}
      >
        {(() => {
          const Component = cockpitTabsRegistry[activeSub];

          if (!Component) {
            return (
              <div
                style={{
                  textAlign: "center",
                  fontSize: "20px",
                  color: "red",
                }}
              >
                Missing Component: {activeSub}
              </div>
            );
          }

          return <Component />;
        })()}
      </div>
    </div>
  );
}
