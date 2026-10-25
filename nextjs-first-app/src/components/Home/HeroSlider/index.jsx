"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Button from "../../Button";
import { LuArrowRight } from "react-icons/lu";

const Slides = [
  {
    title: "YOUR PRODUCTS ARE GREAT.",
    href: "/shop",
    image: "/image/heroSlider_1.webp",
    alt: "Mobile",
    bg: "bg-[#adb5d3]",
  },
  {
    title: "DESIGNED TO MOVE WITH YOU.",
    href: "/shop",
    image: "/image/heroSlider_2.png",
    alt: "Smart watch",
    bg: "bg-[#d3d3d3]",
  },
  {
    title: "EVERY SECOND COUNTS.",
    href: "/shop",
    image: "/image/heroSlider_3.png",
    alt: "Smart watch",
    bg: "bg-[#ddd4ec]",
  },
];

export default function HeroSlider({ slides = Slides, interval = 3000 }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);
  const total = slides.length;

  const next = useCallback(() => setCurrent((i) => (i + 1) % total), [total]);
  const prev = useCallback(
    () => setCurrent((i) => (i - 1 + total) % total),
    [total]
  );

  // Auto Play
  useEffect(() => {
    if (paused || total < 2) return;
    const id = setInterval(next, interval);
    return () => clearInterval(id);
  }, [paused, interval, next, total, current]);

  // Mobile
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 50) (diff < 0 ? next : prev)();
    touchStartX.current = null;
  };

  return (
    <section
      dir="ltr"
      className="relative w-full max-w-[1920px] overflow-hidden rounded-lg mx-auto"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-roledescription="carousel"
    >
      {/* Slide */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`${slide.bg} flex w-full shrink-0 flex-col items-center justify-center gap-6 px-6 py-10 text-center md:h-85 md:flex-row md:justify-between md:gap-0 md:px-20 md:py-0 md:pt-10 md:text-left`}
            aria-hidden={i !== current}
          >
            {/* Text */}
            <div className="flex flex-col items-center md:items-start gap-5">
              <h2 className="max-w-[18ch] text-3xl font-light leading-tight tracking-wide text-neutral-800 md:text-4xl lg:text-5xl">
                {slide.title}
              </h2>
              <Button icon={LuArrowRight} iconPosition="right">
              <a
                href={slide.href}
                tabIndex={i === current ? 0 : -1}              >
                SHOP NOW
              </a>
              </Button>
            </div>

            {/* Image */}
            <div className="flex w-full justify-center md:h-full md:w-auto md:justify-end">
              <Image
                src={slide.image}
                alt={slide.alt || ""}
                width={420}
                height={420}
                priority={i === 0}
                className="h-56 w-auto object-contain sm:h-64 md:h-full md:max-h-85"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Slider Controls */}
      {total > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-neutral-500 transition hover:bg-white/70 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-neutral-900 md:left-4"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-neutral-500 transition hover:bg-white/70 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-neutral-900 md:right-4"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === current ? "w-5 bg-secondary" : "w-1.5 bg-secondary/30"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
