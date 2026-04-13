"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black flex items-center justify-center px-4">
      <main className="w-full max-w-4xl bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-10">
        
        {/* Header */}
        <header className="flex items-center gap-3 mb-10">
          <Image
            src="/next.svg"
            alt="Next.js"
            width={40}
            height={40}
            className="dark:invert"
          />
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            My Next App
          </h1>
        </header>

        {/* Hero Section */}
        <section className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-zinc-900 dark:text-white leading-tight">
            Build modern apps <br /> with Next.js
          </h2>

          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            A clean and minimal static design to kickstart your Next.js
            application using Tailwind CSS.
          </p>
        </section>

        {/* Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {[
            {
              title: "Fast",
              desc: "Optimized performance with server components.",
            },
            {
              title: "Scalable",
              desc: "Build apps that grow with your business.",
            },
            {
              title: "Modern",
              desc: "Best developer experience with App Router.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 text-center hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {item.desc}
              </p>
            </div>
          ))}
        </section>

        {/* CTA Buttons */}
        <section className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="rounded-full bg-black text-white px-6 py-3 text-sm font-semibold hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 transition"  onClick={() => router.push("/users")}>
            Get Started
          </button>

          <button className="rounded-full border border-zinc-300 dark:border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
            Learn More
          </button>
        </section>
        
        <div className="mt-2">
  <div className="flex items-center space-x-2 text-base">
    <h4 className="font-semibold text-slate-900">Contributors</h4>
    <span className="bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700 ...">204</span>
  </div>
  <div className="mt-3 flex -space-x-2 overflow-hidden">
    <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
    <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
    <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
    <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
    <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
  </div>
  <div className="mt-3 text-sm font-medium">
    <a href="#" className="text-blue-500">+ 198 others</a>
  </div>
</div>

        {/* Footer */}
        <footer className="mt-14 text-center text-sm text-zinc-500 dark:text-zinc-400">
          © 2026 My Next App. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
