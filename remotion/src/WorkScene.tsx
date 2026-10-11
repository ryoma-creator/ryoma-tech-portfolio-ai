import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import { C, SANS } from "./theme";
import { clamp01, leave, rise } from "./anim";

// サイトの Projects から分野がばらけるように4つ選ぶ
const SHOTS = [
  { src: "shots/clear-home.png", title: "Clear — Subscription Tracker", phone: true },
  { src: "shots/iot.jpg", title: "IoT Fleet Monitor" },
  { src: "shots/salon.jpg", title: "Beauty Salon LP — &.LUMI hair salon" },
  { src: "shots/ecommerce.jpg", title: "E-Commerce Website" },
];
// サイトに書いてある技術だけ
const CHIPS = ["React", "Next.js", "TypeScript"];

const START = 210;
const STEP = 28;
const W = 1040;
const H = 585;

// ブラウザ枠（Web）
const Browser = ({ src }: { src: string }) => (
  <div style={{ width: W, height: H, borderRadius: 22, overflow: "hidden", background: "#111113", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(217,164,65,0.08)" }}>
    <div style={{ height: 40, display: "flex", alignItems: "center", gap: 10, padding: "0 18px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      {[0, 1, 2].map((i) => (
        <span key={i} style={{ width: 12, height: 12, borderRadius: 99, background: "rgba(255,255,255,0.16)" }} />
      ))}
    </div>
    <Img src={staticFile(src)} style={{ width: "100%", height: H - 40, objectFit: "cover", objectPosition: "top" }} />
  </div>
);

// スマホ枠（上半分だけ見せる）
const Phone = ({ src }: { src: string }) => (
  <div style={{ width: W, height: H, display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
    <div style={{ width: 560, height: H - 10, borderRadius: "64px 64px 0 0", padding: "16px 16px 0", background: "#141416", border: "1px solid rgba(255,255,255,0.12)", borderBottom: "none", boxShadow: "0 0 80px rgba(217,164,65,0.12)", overflow: "hidden", position: "relative" }}>
      <Img src={staticFile(src)} style={{ width: "100%", borderRadius: "50px 50px 0 0", display: "block" }} />
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 220, background: "linear-gradient(to top, #050505 10%, transparent)" }} />
    </div>
  </div>
);

// 7〜11秒：制作物をテンポよく横送り
export const WorkScene = () => {
  const frame = useCurrentFrame();
  // 0→3 へ段階的に進む位置
  const p = [1, 2, 3].reduce((acc, k) => acc + clamp01(frame, START + k * STEP - 8, START + k * STEP + 6), 0);

  return (
    <AbsoluteFill style={{ ...rise(frame, START, 14, 40), ...(frame >= 318 ? leave(frame, 318) : {}) }}>
      {SHOTS.map((s, i) => {
        const d = i - p;
        const ad = Math.min(Math.abs(d), 1.4);
        return (
          <div
            key={s.src}
            style={{
              position: "absolute",
              left: 960 - W / 2 + d * 760,
              top: 110,
              transform: `scale(${1 - ad * 0.2}) perspective(1600px) rotateY(${-d * 14}deg)`,
              opacity: interpolate(ad, [0, 1, 1.4], [1, 0.32, 0]),
              zIndex: 10 - Math.round(ad * 5),
            }}
          >
            {s.phone ? <Phone src={s.src} /> : <Browser src={s.src} />}
          </div>
        );
      })}

      {/* 今見えている制作物の名前 */}
      {SHOTS.map((s, i) => (
        <p
          key={s.title}
          style={{
            position: "absolute",
            top: 738,
            width: "100%",
            textAlign: "center",
            margin: 0,
            fontFamily: SANS,
            fontWeight: 600,
            fontSize: 46,
            color: C.text,
            opacity: interpolate(Math.abs(i - p), [0, 0.35], [1, 0], { extrapolateRight: "clamp" }),
          }}
        >
          {s.title}
        </p>
      ))}

      <div style={{ position: "absolute", top: 836, width: "100%", display: "flex", justifyContent: "center", gap: 22 }}>
        {CHIPS.map((c, i) => (
          <span
            key={c}
            style={{
              ...rise(frame, START + STEP + i * 5, 14, 20),
              padding: "16px 40px",
              borderRadius: 999,
              border: `1px solid ${C.borderGold}`,
              background: "rgba(255,255,255,0.04)",
              boxShadow: "0 0 24px rgba(217,164,65,0.08)",
              fontFamily: SANS,
              fontWeight: 600,
              fontSize: 50,
              color: C.goldSoft,
            }}
          >
            {c}
          </span>
        ))}
      </div>
    </AbsoluteFill>
  );
};
