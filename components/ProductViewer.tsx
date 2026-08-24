"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, ContactShadows, Float } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";

function Product({
  color,
  reducedMotion,
}: {
  color: string;
  reducedMotion: boolean;
}) {
  return (
    <Float
      speed={reducedMotion ? 0 : 1.5}
      rotationIntensity={reducedMotion ? 0 : 0.35}
      floatIntensity={reducedMotion ? 0 : 0.4}
    >
      <group rotation={[0.15, -0.45, 0]}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[2.8, 1, 4.8]} />
          <meshStandardMaterial
            color={color}
            roughness={0.35}
            metalness={0.05}
          />
        </mesh>

        <mesh position={[0, -0.6, 0]} castShadow receiveShadow>
          <boxGeometry args={[3, 0.25, 5]} />
          <meshStandardMaterial color="#f4f4f5" roughness={0.7} />
        </mesh>

        <mesh position={[0, 0.55, -0.25]} castShadow>
          <boxGeometry args={[2.4, 0.15, 2.8]} />
          <meshStandardMaterial color="#18181b" roughness={0.45} />
        </mesh>

        {[-0.7, 0, 0.7].map((z) => (
          <mesh key={z} position={[0, 0.67, z]}>
            <boxGeometry args={[1.6, 0.08, 0.12]} />
            <meshStandardMaterial color="#ffffff" />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

export default function ProductViewer() {
  const [color, setColor] = useState("#ef4444");
  const [autoRotate, setAutoRotate] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const updatePreference = () => {
      setReducedMotion(mediaQuery.matches);

      if (mediaQuery.matches) {
        setAutoRotate(false);
      }
    };

    updatePreference();

    mediaQuery.addEventListener("change", updatePreference);

    return () => {
      mediaQuery.removeEventListener("change", updatePreference);
    };
  }, []);

  const colors = [
    { name: "Red", value: "#ef4444" },
    { name: "Blue", value: "#3b82f6" },
    { name: "Green", value: "#22c55e" },
    { name: "Purple", value: "#a855f7" },
  ];

  return (
    <div className="relative h-[520px] w-full overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950">
      <Canvas
        shadows
        camera={{ position: [5, 3, 7], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={1.2} />

          <directionalLight
            position={[5, 7, 5]}
            intensity={3}
            castShadow
            shadow-mapSize={[512, 512]}
          />

          <pointLight position={[-5, 3, -5]} intensity={2} />

          <Product
            color={color}
            reducedMotion={reducedMotion}
          />

          <ContactShadows
            position={[0, -1, 0]}
            opacity={0.45}
            scale={8}
            blur={2.5}
            far={4}
          />

          <OrbitControls
            enablePan={false}
            enableZoom
            autoRotate={autoRotate && !reducedMotion}
            autoRotateSpeed={2}
            minDistance={5}
            maxDistance={10}
          />
        </Suspense>
      </Canvas>

      <div className="absolute left-5 top-5">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-400">
          Interactive 3D
        </p>

        <h2 className="mt-1 text-xl font-semibold text-white">
          Product Viewer
        </h2>
      </div>

      <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/60 p-4 backdrop-blur">
        <div className="flex items-center gap-2">
          {colors.map((item) => (
            <button
              key={item.name}
              type="button"
              aria-label={`Change product color to ${item.name}`}
              onClick={() => setColor(item.value)}
              className="h-9 w-9 rounded-full border-2 border-white/30 transition hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
              style={{ backgroundColor: item.value }}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => setAutoRotate((value) => !value)}
          disabled={reducedMotion}
          className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {reducedMotion
            ? "Reduced Motion"
            : autoRotate
              ? "Pause Rotation"
              : "Auto Rotate"}
        </button>
      </div>
    </div>
  );
}