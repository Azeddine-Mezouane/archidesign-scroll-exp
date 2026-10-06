"use client";

import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-10 flex items-center justify-between max-md:gap-16 w-full max-w-screen-2xl px-6">
      <div className="rounded-full   bg-black/35 backdrop-blur-md border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.15)] px-3 py-1 text-white text-xs md:text-sm uppercase tracking-wider font-medium">
        Archi Design
      </div>
<Link
        href="https://wa.me/213798413162"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-black/35 backdrop-blur-md border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.15)] px-3 py-1 text-white text-xs md:text-sm uppercase tracking-wider font-medium hover:bg-black/50 transition-colors  cursor-pointer"
      >
        Let's Talk
      </Link>
    </nav>
  );
}