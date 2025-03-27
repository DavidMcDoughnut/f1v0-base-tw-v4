import React from "react";

export default function SandboxPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 w-full">
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="text-2xl font-bold mb-4">Tailwind V4 Sandbox</h1>
          <p className="text-black/70 dark:text-white/70 mb-4">
            A space to experiment with Tailwind CSS v4 components
          </p>
          <div className="border border-yellow-500 dark:border-yellow-200 rounded-xl p-8 w-full h-[20rem] text-center shadow-sm">

          </div>
        </div>
    </div>
  );
} 