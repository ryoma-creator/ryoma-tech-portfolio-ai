import { AbsoluteFill, useCurrentFrame } from "remotion";

// 黒地 + 金のグロー + うっすらグリッド（サイトのヒーロー背景）
export const Background = () => {
  const frame = useCurrentFrame();
  // 450フレームで一周 → ループ時に継ぎ目が出ない
  const a = (frame / 450) * Math.PI * 2;
  const gx = 72 + Math.cos(a) * 6;
  const gy = 14 + Math.sin(a) * 5;
  return (
    <AbsoluteFill style={{ background: "#050505" }}>
      <AbsoluteFill
        style={{
          background: `radial-gradient(circle at ${gx}% ${gy}%, rgba(217,164,65,0.16), transparent 38%), radial-gradient(circle at 18% 78%, rgba(255,255,255,0.035), transparent 30%)`,
        }}
      />
      <AbsoluteFill
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "96px 96px",
          maskImage: "radial-gradient(ellipse at 50% 45%, black 30%, transparent 78%)",
        }}
      />
    </AbsoluteFill>
  );
};
