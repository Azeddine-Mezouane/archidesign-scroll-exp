"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "/img-1.jpg",
  "/img-2.jpg",
  "/img-3.jpg",
  "/img-4.jpg",
  "/img-5.jpg",
];

export default function Slider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<(HTMLDivElement | null)[]>(new Array(images.length).fill(null));
  const [slidesReady, setSlidesReady] = useState(false);

  const setSlideRef = useCallback((index: number) => (el: HTMLDivElement | null) => {
    slidesRef.current[index] = el;
    // Check if all slides are ready
    if (slidesRef.current.every(s => s !== null)) {
      setSlidesReady(true);
    }
  }, []);

  useEffect(() => {
    if (!slidesReady) return;

    const slider = sliderRef.current;
    const slides = slidesRef.current.filter(Boolean) as HTMLDivElement[];

    if (!slider || slides.length === 0) return;

    const totalSlides = slides.length;
    const sectionHeight =
      (document.body.scrollHeight - window.innerHeight) / totalSlides;

    slides.forEach((slide, index) => {
      gsap.to(slide, {
        zIndex: (progress: number) => {
          return progress < 0.5 ? 1 : 5 - index;
        },
        scrollTrigger: {
          start: `${sectionHeight * index} top`,
          end: `${sectionHeight * (index + 1)} top`,
          scrub: 1,
        },
      });

      gsap.fromTo(
        slide,
        { scale: index === 0 ? 1 : 0 },
        {
          scale: 1,
          scrollTrigger: {
            start: `${sectionHeight * index} top`,
            end: `${sectionHeight * (index + 1)} top`,
            scrub: 1,
          },
        }
      );

      if (index !== 0) {
        const img = slide.querySelector(".slide-img") as HTMLElement;
        if (img) {
          gsap.fromTo(
            img,
            { scale: 2 },
            {
              scale: 1,
              top: "0%",
              scrollTrigger: {
                start: `${sectionHeight * index} top`,
                end: `${sectionHeight * (index + 1)} top`,
                scrub: 1,
              },
            }
          );
        }
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf("*");
    };
  }, [slidesReady]);

  return (
    <div
      ref={sliderRef}
      className="fixed inset-0 w-full h-screen bg-white z-0"
      style={{ height: "500vh" }}
    >
      {images.map((src, index) => (
        <div
          key={index}
          ref={setSlideRef(index)}
          id={`slide-${index + 1}`}
          className="absolute inset-0 w-full h-screen overflow-hidden"
          style={{
            transformOrigin: index === 0 ? undefined : "center",
            zIndex: index === 0 ? undefined : 2,
          }}
        >
          <img
            src={src}
            alt={`Description of Image ${index + 1}`}
            className="slide-img absolute inset-0 w-full h-full object-cover"
            style={{ zIndex: 0 }}
          />
        </div>
      ))}
    </div>
  );
}