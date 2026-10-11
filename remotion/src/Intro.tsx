import { AbsoluteFill, useCurrentFrame } from "remotion";
import { Background } from "./Background";
import { TitleScene } from "./TitleScene";
import { StatementScene } from "./StatementScene";
import { WorkScene } from "./WorkScene";
import { CtaScene } from "./CtaScene";

// 各シーンは絶対フレームで動くので、表示する期間だけ切り替える
const Show = ({ from, to, children }: { from: number; to: number; children: React.ReactNode }) => {
  const frame = useCurrentFrame();
  return frame >= from && frame < to ? <AbsoluteFill>{children}</AbsoluteFill> : null;
};

export const Intro = () => (
  <AbsoluteFill>
    <Background />
    <Show from={0} to={92}><TitleScene /></Show>
    <Show from={90} to={212}><StatementScene /></Show>
    <Show from={208} to={332}><WorkScene /></Show>
    <Show from={328} to={437}><CtaScene /></Show>
    <Show from={436} to={450}><TitleScene /></Show>
  </AbsoluteFill>
);
