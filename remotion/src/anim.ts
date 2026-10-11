import { interpolate, Easing } from "remotion";

const ease = Easing.bezier(0.22, 1, 0.36, 1);

// サイトの fadeUp と同じ「下から・ぼかし→くっきり」
export function rise(frame: number, start: number, dur = 18, dist = 28) {
  const t = interpolate(frame, [start, start + dur], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: ease,
  });
  return {
    opacity: t,
    transform: `translateY(${(1 - t) * dist}px)`,
    filter: `blur(${(1 - t) * 8}px)`,
  };
}

// シーンの退場（上へ・ぼかし）
export function leave(frame: number, start: number, dur = 12) {
  const t = interpolate(frame, [start, start + dur], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.in(Easing.cubic),
  });
  return { opacity: 1 - t, transform: `translateY(${-t * 24}px)`, filter: `blur(${t * 8}px)` };
}

export const clamp01 = (frame: number, a: number, b: number) =>
  interpolate(frame, [a, b], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: ease });
