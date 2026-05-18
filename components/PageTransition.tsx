"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

// 6-panel stair wipe using gold/dark palette
const PANELS = [
  "#d9a441",
  "#c49238",
  "#a87830",
  "#1a1408",
  "#0d0b05",
  "#050505",
];

// initial="enter" → panels slide down covering screen
// animate="reveal" → panels slide up off screen (stagger = staircase effect)
// exit="enter"    → panels slide back down when navigating away
const stair = {
  enter:  { y: "0%" },
  reveal: { y: "-100%" },
};

// reverseIndex: last panel reveals first → staircase reads left-to-right
const reverseIndex = (i: number) => PANELS.length - 1 - i;

function Stairs() {
  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none flex">
      {PANELS.map((color, i) => (
        <motion.div
          key={i}
          variants={stair}
          initial="enter"
          animate="reveal"
          exit="enter"
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            delay: reverseIndex(i) * 0.07,
          }}
          style={{
            flex: 1,
            height: "100%",
            background: color,
          }}
        />
      ))}
    </div>
  );
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <Stairs />
        {/* No opacity wrapper — stairs handle the visual reveal,
            hero animations run with their own delays after stairs clear */}
        {children}
      </div>
    </AnimatePresence>
  );
}
