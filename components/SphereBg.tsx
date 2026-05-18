"use client";

import dynamic from "next/dynamic";
import { useState, useEffect, useRef } from "react";

const SplineScene = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => null,
});

const SPHERE_SCENE = "https://prod.spline.design/rEMCgSJpMLTrWfPE/scene.splinecode";

export function SphereBg() {
  const [isMobile, setIsMobile] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  // Forward window mousemove to Spline canvas (bypasses pointer-events:none)
  useEffect(() => {
    if (isMobile) return;
    const handleMouseMove = (e: MouseEvent) => {
      const canvas = containerRef.current?.querySelector("canvas");
      if (canvas) {
        canvas.dispatchEvent(new MouseEvent("mousemove", {
          bubbles: true,
          clientX: e.clientX,
          clientY: e.clientY,
        }));
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div
      ref={containerRef}
      aria-hidden
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <SplineScene scene={SPHERE_SCENE} style={{ width: "100%", height: "100%" }} />
      {/* Cover Spline watermark with background-colored block */}
      <div style={{
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 180,
        height: 48,
        background: "#050505",
        zIndex: 1,
      }} />
    </div>
  );
}
