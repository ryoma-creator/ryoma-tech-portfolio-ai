"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 2000;
const REPULSION_RADIUS = 2.2;
const REPULSION_STRENGTH = 0.055;
const SHOCKWAVE_SPEED = 3.5;
const SHOCKWAVE_STRENGTH = 0.18;
const SHOCKWAVE_DURATION = 1.4;

interface Shockwave {
  x: number; y: number; radius: number; startTime: number;
}

// soft glowing circle texture
function makeCircleTexture() {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0,   "rgba(147,197,253,1)");
  g.addColorStop(0.4, "rgba(147,197,253,0.6)");
  g.addColorStop(1,   "rgba(147,197,253,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  return new THREE.CanvasTexture(canvas);
}

function Particles({ shockwaves }: { shockwaves: React.MutableRefObject<Shockwave[]> }) {
  const mesh = useRef<THREE.Points>(null!);
  const { mouse, viewport } = useThree();
  const clockRef = useRef(0);

  const texture = useMemo(() => makeCircleTexture(), []);

  const { positions, origins, velocities } = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    const ori = new Float32Array(PARTICLE_COUNT * 3);
    const vel = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const x = (Math.random() - 0.5) * 22;
      const y = (Math.random() - 0.5) * 13;
      const z = (Math.random() - 0.5) * 4;
      pos[i*3] = ori[i*3] = x;
      pos[i*3+1] = ori[i*3+1] = y;
      pos[i*3+2] = ori[i*3+2] = z;
      vel[i*3]   = (Math.random() - 0.5) * 0.003;
      vel[i*3+1] = (Math.random() - 0.5) * 0.003;
    }
    return { positions: pos, origins: ori, velocities: vel };
  }, []);

  const sizes = useMemo(() => {
    const s = new Float32Array(PARTICLE_COUNT);
    for (let i = 0; i < PARTICLE_COUNT; i++) s[i] = Math.random() * 3 + 1;
    return s;
  }, []);

  useFrame((_, delta) => {
    if (!mesh.current) return;
    clockRef.current += delta;
    const t = clockRef.current;

    const geo = mesh.current.geometry;
    const pos = geo.attributes.position.array as Float32Array;
    const mx = (mouse.x * viewport.width) / 2;
    const my = (mouse.y * viewport.height) / 2;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const ix = i*3, iy = i*3+1, iz = i*3+2;

      pos[ix] += velocities[ix];
      pos[iy] += velocities[iy];
      pos[iz]  = origins[iz] + Math.sin(t * 0.5 + i * 0.03) * 0.25;

      // return to origin
      pos[ix] += (origins[ix] - pos[ix]) * 0.003;
      pos[iy] += (origins[iy] - pos[iy]) * 0.003;

      // mouse repulsion
      const dx = pos[ix] - mx, dy = pos[iy] - my;
      const dist = Math.sqrt(dx*dx + dy*dy);
      if (dist < REPULSION_RADIUS && dist > 0) {
        const f = ((REPULSION_RADIUS - dist) / REPULSION_RADIUS) * REPULSION_STRENGTH;
        pos[ix] += (dx / dist) * f;
        pos[iy] += (dy / dist) * f;
      }

      // shockwaves
      for (const sw of shockwaves.current) {
        const elapsed = t - sw.startTime;
        if (elapsed > SHOCKWAVE_DURATION) continue;
        const sdx = pos[ix] - sw.x, sdy = pos[iy] - sw.y;
        const sdist = Math.sqrt(sdx*sdx + sdy*sdy);
        const ringWidth = 1.2;
        if (Math.abs(sdist - sw.radius) < ringWidth && sdist > 0) {
          const wave = 1 - Math.abs(sdist - sw.radius) / ringWidth;
          const falloff = 1 - elapsed / SHOCKWAVE_DURATION;
          const push = wave * falloff * SHOCKWAVE_STRENGTH;
          pos[ix] += (sdx / sdist) * push;
          pos[iy] += (sdy / sdist) * push;
        }
      }

      if (pos[ix] > 11) pos[ix] = -11;
      if (pos[ix] < -11) pos[ix] = 11;
      if (pos[iy] > 7)  pos[iy] = -7;
      if (pos[iy] < -7) pos[iy] = 7;
    }

    shockwaves.current = shockwaves.current.filter((sw) => {
      sw.radius += SHOCKWAVE_SPEED * delta;
      return t - sw.startTime < SHOCKWAVE_DURATION;
    });

    geo.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-size"     args={[sizes, 1]}     />
      </bufferGeometry>
      <pointsMaterial
        map={texture}
        size={0.12}
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
        vertexColors={false}
        alphaTest={0.01}
      />
    </points>
  );
}

function ClickHandler({ shockwaves }: { shockwaves: React.MutableRefObject<Shockwave[]> }) {
  const { viewport } = useThree();
  const clockRef = useRef(0);

  useFrame((_, delta) => { clockRef.current += delta; });

  useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      const x = ((e.clientX / window.innerWidth)  * 2 - 1) * (viewport.width  / 2);
      const y = (-(e.clientY / window.innerHeight) * 2 + 1) * (viewport.height / 2);
      shockwaves.current.push({ x, y, radius: 0, startTime: clockRef.current });
    };
    window.addEventListener("pointerdown", onPointerDown);
    return () => window.removeEventListener("pointerdown", onPointerDown);
  }, [viewport, shockwaves]);

  return null;
}

export function ParticleField() {
  const shockwaves = useRef<Shockwave[]>([]);
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 75 }}
        gl={{ antialias: false, alpha: true }}
        style={{ background: "transparent", pointerEvents: "none" }}
        onCreated={({ gl }) => { gl.domElement.style.pointerEvents = "none"; }}
      >
        <Particles shockwaves={shockwaves} />
        <ClickHandler shockwaves={shockwaves} />
      </Canvas>
    </div>
  );
}
