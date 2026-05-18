"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const SplineScene = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => null,
});

const SPHERE_SCENE = "https://prod.spline.design/rEMCgSJpMLTrWfPE/scene.splinecode";

export function SphereBg() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  if (isMobile) return null;

  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <SplineScene scene={SPHERE_SCENE} style={{ width: "100%", height: "100%" }} />
    </div>
  );
}
