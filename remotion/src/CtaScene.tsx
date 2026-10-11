import { AbsoluteFill, useCurrentFrame } from "remotion";
import { SANS } from "./theme";
import { leave, rise } from "./anim";
import { Words, toWords } from "./Words";

// 11〜15秒：締め＋サイトに載っている連絡先（メール）
export const CtaScene = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", gap: 72, ...leave(frame, 424, 12) }}>
      <Words start={334} size={150} lines={[toWords("Let's build"), toWords("something together.", ["together."])]} />
      <div
        style={{
          ...rise(frame, 356, 18),
          display: "flex",
          alignItems: "center",
          gap: 22,
          padding: "28px 56px",
          borderRadius: 999,
          background: "linear-gradient(135deg, #f1c56b, #b98224)",
          boxShadow: "0 0 60px rgba(217,164,65,0.35)",
          color: "#080808",
          fontFamily: SANS,
          fontWeight: 600,
          fontSize: 60,
        }}
      >
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#080808" strokeWidth="1.9">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
        ryoma.t.engineer@gmail.com
      </div>
    </AbsoluteFill>
  );
};
