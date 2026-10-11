import { useCurrentFrame } from "remotion";
import { C, SERIF, SERIF_ITALIC } from "./theme";
import { rise } from "./anim";

type Word = { text: string; gold?: boolean };

// 単語ごとに少しずつ時間をずらして出す見出し
export const Words = ({ lines, start, size }: { lines: Word[][]; start: number; size: number }) => {
  const frame = useCurrentFrame();
  let i = 0;
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: size * 0.12 }}>
      {lines.map((line, li) => (
        <div key={li} style={{ display: "flex", gap: size * 0.26, lineHeight: 1.05 }}>
          {line.map((w) => {
            const s = rise(frame, start + i++ * 4, 16, 34);
            return (
              <span
                key={w.text + i}
                style={{
                  ...s,
                  display: "inline-block",
                  fontFamily: w.gold ? SERIF_ITALIC : SERIF,
                  fontStyle: w.gold ? "italic" : "normal",
                  fontWeight: 500,
                  fontSize: size,
                  letterSpacing: "-0.03em",
                  color: w.gold ? C.goldSoft : C.text,
                }}
              >
                {w.text}
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export const toWords = (line: string, gold: string[] = []): Word[] =>
  line.split(" ").map((t) => ({ text: t, gold: gold.includes(t) }));
