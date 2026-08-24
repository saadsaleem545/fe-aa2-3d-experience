"use client";

import dynamic from "next/dynamic";

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

        <ProductViewer />

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
              The scene uses simple geometry and a capped device pixel ratio.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}