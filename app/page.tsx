"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

const ProductViewer = dynamic(
  () => import("@/components/ProductViewer"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[520px] items-center justify-center rounded-3xl border border-zinc-800 bg-zinc-950 text-zinc-400">
        Loading 3D experience...
      </div>
    ),
  }
);

export default function Home() {
  const [show3D, setShow3D] = useState(false);

  return (
    <main className="min-h-screen bg-black px-5 py-10 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
            FE-AA2
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-6xl">
            Your First 3D Experience
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            An interactive product viewer built with Next.js,
            React Three Fiber and Three.js.
          </p>
        </header>

        <section
          aria-label="Interactive 3D product viewer"
          className="min-h-[520px]"
        >
          {show3D ? (
            <ProductViewer />
          ) : (
            <div className="flex h-[520px] flex-col items-center justify-center rounded-3xl border border-zinc-800 bg-zinc-950 px-6 text-center">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
                Interactive 3D
              </p>

              <h2 className="mt-3 text-2xl font-semibold text-white">
                Product Viewer
              </h2>

              <p className="mt-3 max-w-md text-sm leading-6 text-zinc-400">
                Explore the product in 3D, rotate it, and customize its color.
              </p>

              <button
                type="button"
                onClick={() => setShow3D(true)}
                className="mt-6 rounded-xl bg-white px-5 py-3 font-semibold text-black transition hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-950"
              >
                Load 3D Experience
              </button>
            </div>
          )}
        </section>

        <section className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
            <h3 className="font-semibold">Rotate</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Drag the product with your mouse or touch to inspect it.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
            <h3 className="font-semibold">Customize</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Change the product color using the controls.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
            <h3 className="font-semibold">Performance</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              The 3D scene is loaded only when requested to reduce initial
              JavaScript work.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}