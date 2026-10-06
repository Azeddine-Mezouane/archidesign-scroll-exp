"use client";

export default function Footer() {
  return (
    <footer className="fixed bottom-6 left-1/2 pl-6 -translate-x-1/2 z-10 w-full max-w-screen-2xl max-md:pr-6 ">
      <div className="rounded-2xl  bg-black/35 backdrop-blur-md border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.15)] px-4 py-2 max-w-md text-white text-xs md:text-sm leading-relaxed">
        This is a web animation experiment built with GSAP, created to explore and showcase different possibilities for web animation and interaction.
      </div>
    </footer>
  );
}