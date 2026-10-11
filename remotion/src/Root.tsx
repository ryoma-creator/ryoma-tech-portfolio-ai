import { Composition } from "remotion";
import { Intro } from "./Intro";

// 15秒・16:9・30fps
export const Root = () => (
  <Composition id="Intro" component={Intro} durationInFrames={450} fps={30} width={1920} height={1080} />
);
