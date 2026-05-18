"use client";

import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Environment, Float } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

// ── 調整ポイント ─────────────────────────────────────────────
const CONFIG = {
  sphere: {
    position: [1.8, 0, 0] as [number, number, number],
    radius: 1.5,
    color: "#2a2a3c",       // 球体のベースカラー
    roughness: 0.05,
    metalness: 1,
    distort: 0.3,           // 歪みの強さ (0〜1)
    distortSpeed: 2,        // 歪みのスピード
    envMapIntensity: 3,     // 環境マップの反射強度
  },
  lights: {
    gold: "#d9a441",        // ゴールドライトの色
    goldIntensity: 3,
    purple: "#818cf8",      // パープルライトの色
    purpleIntensity: 1.5,
  },
  bloom: {
    threshold: 0.15,        // ブルームが光り始める輝度
    intensity: 2.0,         // ブルームの強さ
  },
  mouse: {
    speed: 0.05,            // マウス追従のスムージング (小さいほど遅い)
    range: 0.8,             // 回転の最大角度
  },
};
// ──────────────────────────────────────────────────────────────

function DistortSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const targetX = useRef(0);
  const targetY = useRef(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      targetX.current = -(e.clientY / window.innerHeight - 0.5) * CONFIG.mouse.range;
      targetY.current = (e.clientX / window.innerWidth - 0.5) * CONFIG.mouse.range;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame(() => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += (targetX.current - meshRef.current.rotation.x) * CONFIG.mouse.speed;
    meshRef.current.rotation.y += (targetY.current - meshRef.current.rotation.y) * CONFIG.mouse.speed;
  });

  return (
    <Float speed={1.2} floatIntensity={0.35} rotationIntensity={0.1}>
      <mesh ref={meshRef} position={CONFIG.sphere.position}>
        <sphereGeometry args={[CONFIG.sphere.radius, 128, 128]} />
        <MeshDistortMaterial
          color={CONFIG.sphere.color}
          roughness={CONFIG.sphere.roughness}
          metalness={CONFIG.sphere.metalness}
          distort={CONFIG.sphere.distort}
          speed={CONFIG.sphere.distortSpeed}
          envMapIntensity={CONFIG.sphere.envMapIntensity}
        />
      </mesh>
    </Float>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[4, 3, 4]}   intensity={CONFIG.lights.goldIntensity}   color={CONFIG.lights.gold} />
      <pointLight position={[-4, -2, -3]} intensity={CONFIG.lights.purpleIntensity} color={CONFIG.lights.purple} />
      <pointLight position={[0, 6, 2]}   intensity={0.8} color="#ffffff" />
    </>
  );
}

export function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 38 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
    >
      <Lights />
      <DistortSphere />
      <Environment preset="city" />
      <EffectComposer>
        <Bloom
          luminanceThreshold={CONFIG.bloom.threshold}
          luminanceSmoothing={0.9}
          intensity={CONFIG.bloom.intensity}
        />
      </EffectComposer>
    </Canvas>
  );
}
