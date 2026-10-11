import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { C, SANS, SERIF } from "./theme";
import { leave, rise } from "./anim";

// 0〜3秒：名前と肩書き。1枚目(=poster)で完成形が見えるよう、最初から表示しておく
export const TitleScene = () => {
  const frame = useCurrentFrame();
  // 末尾で再登場 → ループの継ぎ目をなくす
  const style = frame < 200 ? leave(frame, 78) : rise(frame, 436, 13);
  const zoom = frame < 200 ? interpolate(frame, [0, 90], [1, 1.035]) : 1;
  const sweep = interpolate(frame, [8, 58], [-40, 140], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const parts = ["Japanese", "Bilingual (Japanese / English)", "Based in Manila"];
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", ...style }}>
      <div style={{ transform: `scale(${zoom})`, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h1 style={{ fontFamily: SERIF, fontWeight: 500, fontSize: 210, letterSpacing: "-0.04em", lineHeight: 0.95, color: C.text, margin: 0 }}>
          Ryoma Taguchi
        </h1>
        <div
          style={{
            width: 260,
            height: 2,
            margin: "44px 0 40px",
            background: `linear-gradient(90deg, transparent, ${C.gold} ${sweep - 30}%, ${C.goldSoft} ${sweep}%, ${C.gold} ${sweep + 30}%, transparent)`,
            backgroundColor: "rgba(217,164,65,0.45)",
            boxShadow: "0 0 18px rgba(217,164,65,0.45)",
          }}
        />
        <p style={{ fontFamily: SANS, fontSize: 56, fontWeight: 500, color: C.muted, margin: 0, letterSpacing: "0.01em" }}>
          {parts.map((p, i) => (
            <span key={p}>
              {i > 0 && <span style={{ color: C.gold, margin: "0 0.45em" }}>·</span>}
              {p}
            </span>
          ))}
        </p>
      </div>
    </AbsoluteFill>
  );
};
