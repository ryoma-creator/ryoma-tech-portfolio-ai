import { loadFont as loadSerif } from "@remotion/google-fonts/CormorantGaramond";
import { loadFont as loadSans } from "@remotion/google-fonts/Inter";

// サイト(globals.css)と同じ色・フォント
export const C = {
  bg: "#050505",
  gold: "#d9a441",
  goldSoft: "#f1c56b",
  text: "#f5f1e8",
  muted: "#a6a09a",
  borderGold: "rgba(217,164,65,0.32)",
};

export const SERIF = loadSerif("normal", { weights: ["500"], subsets: ["latin"] }).fontFamily;
export const SERIF_ITALIC = loadSerif("italic", { weights: ["500"], subsets: ["latin"] }).fontFamily;
export const SANS = loadSans("normal", { weights: ["400", "500", "600"], subsets: ["latin"] }).fontFamily;
