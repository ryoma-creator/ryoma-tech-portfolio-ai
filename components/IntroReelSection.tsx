"use client";

import Image from "next/image";
import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

// 動きを減らす設定かどうか（SSR時は poster を出す側に倒す）
function subscribe(cb: () => void) {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}
const getSnapshot = () => window.matchMedia(QUERY).matches;
const getServerSnapshot = () => true;

// React は muted を属性に出さないため、iOS の自動再生条件を確実に満たすよう直接設定する
function forceMuted(el: HTMLVideoElement | null) {
  if (!el) return;
  el.defaultMuted = true;
  el.muted = true;
}

// ページ最上部の15秒紹介動画（無音・ループ）。reduced-motion 時は poster 画像のみ
export function IntroReelSection() {
  const reduceMotion = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <section className="relative w-full max-w-[1180px] mx-auto px-4 sm:px-6 pt-6 sm:pt-10" style={{ zIndex: 10 }}>
      <div
        aria-hidden
        className="absolute inset-x-4 sm:inset-x-6 top-6 sm:top-10 bottom-0 rounded-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 70% 20%, rgba(217,164,65,0.12), transparent 70%)", filter: "blur(24px)" }}
      />
      <div
        className="relative w-full overflow-hidden"
        style={{
          aspectRatio: "16 / 9",
          borderRadius: "20px",
          border: "1px solid rgba(255,255,255,0.07)",
          boxShadow: "0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(217,164,65,0.06)",
          background: "#050505",
        }}
      >
        {reduceMotion ? (
          <Image
            src="/intro/intro-poster.jpg"
            alt="Ryoma Taguchi — Japanese · Bilingual (Japanese / English) · Based in Manila"
            fill
            priority
            sizes="(max-width: 1180px) 100vw, 1132px"
            className="object-cover"
          />
        ) : (
          <video
            ref={forceMuted}
            src="/intro/intro.mp4"
            poster="/intro/intro-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label="15-second intro video: Ryoma Taguchi"
            className="absolute inset-0 block h-full w-full object-cover"
          />
        )}
      </div>
    </section>
  );
}
