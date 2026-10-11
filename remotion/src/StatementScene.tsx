import { AbsoluteFill, useCurrentFrame } from "remotion";
import { leave } from "./anim";
import { Words, toWords } from "./Words";

// 3〜7秒
export const StatementScene = () => {
  const frame = useCurrentFrame();
  const verbs = ["design,", "build,", "ship", "run"];
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", ...leave(frame, 198) }}>
      <Words
        start={94}
        size={132}
        lines={[toWords("I design, build, ship and run", verbs), toWords("web and mobile apps.")]}
      />
    </AbsoluteFill>
  );
};
