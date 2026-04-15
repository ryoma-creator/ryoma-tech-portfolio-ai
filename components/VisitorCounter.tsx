"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// ページ訪問時にカウントをインクリメントして表示
export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/visitors", { method: "POST" })
      .then((r) => r.json())
      .then((d) => setCount(d.count))
      .catch(() => {});
  }, []);

  if (!count) return null;

  return (
    <motion.div
      className="inline-flex items-center gap-1.5 text-zinc-500 text-xs"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <span className="w-1 h-1 rounded-full bg-zinc-600" />
      {count.toLocaleString()} visitors
    </motion.div>
  );
}
