"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { LuShoppingCart } from "react-icons/lu";
import Button from "../Button";

const DEFAULT_BREAKPOINTS = [
  [1024, 4],
  [768, 3],
  [480, 2],
  [0, 1],
];

function usePerView(breakpoints) {
  const pick = useCallback(() => {
    if (typeof window === "undefined") return breakpoints[0][1];
    const w = window.innerWidth;
    return (breakpoints.find(([min]) => w >= min) || breakpoints.at(-1))[1];
  }, [breakpoints]);

  const [perView, setPerView] = useState(pick);

  useEffect(() => {
    const onResize = () => setPerView(pick());
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [pick]);

  return perView;
}

function DotProgress({ paused, interval }) {
  const [run, setRun] = useState(false);

  useEffect(() => {
    if (paused) {
      setRun(false);
      return;
    }
    let r2;
    const r1 = requestAnimationFrame(() => {
      r2 = requestAnimationFrame(() => setRun(true));
    });
    return () => {
      cancelAnimationFrame(r1);
      cancelAnimationFrame(r2);
    };
  }, [paused]);

  return (
    <span
      className={`absolute inset-0 origin-left bg-[#222] ${
        run
          ? "scale-x-100 transition-transform ease-linear motion-reduce:transition-none"
          : "scale-x-0"
      }`}
      style={{ transitionDuration: `${interval}ms` }}
    />
  );
}

export default function ProductSlider({
  products = [],
  interval = 3000,
  breakpoints = DEFAULT_BREAKPOINTS,
  onAddToCart = () => {},
}) {
  const total = products.length;
  const perView = usePerView(breakpoints);
  const canSlide = total > perView;

  const [index, setIndex] = useState(0);
  const [tick, setTick] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef(null);

  const slides = canSlide
    ? [...products, ...products.slice(0, perView)]
    : products;

  const goTo = useCallback((i) => {
    setAnimate(true);
    setIndex(i);
    setTick((t) => t + 1);
  }, []);

  // Shift 1 Box
  useEffect(() => {
    if (!canSlide || paused) return;
    const id = setTimeout(() => goTo(index + 1), interval);
    return () => clearTimeout(id);
  }, [index, tick, paused, canSlide, interval, goTo]);

  // Loop
  const handleTransitionEnd = (e) => {
    if (e.target !== trackRef.current) return;
    if (index >= total) {
      setAnimate(false);
      setIndex(index - total);
    }
  };
  useEffect(() => {
    if (animate) return;
    const raf = requestAnimationFrame(() =>
      requestAnimationFrame(() => setAnimate(true)),
    );
    return () => cancelAnimationFrame(raf);
  }, [animate]);

  useEffect(() => {
    setAnimate(false);
    setIndex(0);
  }, [perView, total]);

  const activeDot = canSlide ? index % total : 0;

  return (
    <section
      className="w-full overflow-hidden text-secondary px-4 py-4 sm:px-8 lg:px-16 lg:py-5"
      dir="ltr"
      aria-roledescription="carousel"
      aria-label="Products"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="overflow-hidden -mx-1.5 sm:-mx-2">
        <div
          ref={trackRef}
          className={`flex will-change-transform ${
            animate
              ? "transition-transform duration-500 motion-reduce:transition-none"
              : ""
          }`}
          style={{ transform: `translateX(-${(index * 100) / perView}%)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.map((item, i) => {
            const isClone = i >= total;
            return (
              <article
                key={`${item.id}-${isClone ? "c" : "o"}`}
                className="min-w-0 shrink-0 grow-0 box-border px-1.5 sm:px-2"
                style={{ flexBasis: `${100 / perView}%` }}
                aria-hidden={isClone || undefined}
              >
                <div className="group block">
                  <div className="relative w-full max-h-75 aspect-[4/4.4] min-[481px]:aspect-3/4 overflow-hidden rounded border-2 border-muted">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                        draggable="false"
                        className="block h-full w-full select-none object-contain p-5 transition-transform duration-500 group-hover:scale-[1.045] motion-reduce:transition-none"
                      />
                    ) : (
                      <div
                        aria-hidden="true"
                        className="grid h-full w-full place-items-center"
                      >
                        {item.name?.[0]}
                      </div>
                    )}

                    <Button 
                    icon={LuShoppingCart} 
                    iconPosition="right"
                    iconSize="20px"
                    tabIndex={isClone ? -1 : 0}
                    onClick={() => onAddToCart(item)}
                    className="group/btn absolute inset-x-0 bottom-0 tracking-[.06em] 
                    transition-[transform,opacity,background-color] motion-reduce:transition-none
                    translate-y-[101%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100
                    focus-visible:translate-y-0 focus-visible:opacity-100
                    focus-visible:outline-2 focus-visible:-outline-offset-4
                    [@media(hover:none)]:translate-y-0 [@media(hover:none)]:opacity-100 [@media(hover:none)]:py-2.75"
                    >
                        ADD TO CART
                    </Button>
                  </div>

                  <div className="flex items-baseline justify-between gap-3 pt-3 text-md">
                    <span className="tracking-[.02em] motion-reduce:transition-none">
                      {item.name}
                    </span>
                    <span className="text-md tabular-nums text-primary">
                      ${item.price}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {canSlide && (
        <div
          className="mt-5.5 flex items-center justify-center gap-2"
          role="tablist"
          aria-label="Slide position"
        >
          {products.map((item, i) => {
            const active = i === activeDot;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={active}
                aria-label={`Go to ${item.name}`}
                onClick={() => goTo(i)}
                className={`relative h-1.75 cursor-pointer overflow-hidden rounded-full border-0 bg-muted p-0
                  transition-[width,background-color] duration-500 motion-reduce:transition-none
                  focus-visible:outline-2 focus-visible:outline-offset-[3px]
                  ${active ? "w-7" : "w-1.75 hover:bg-secondary"}`}
              >
                {active && (
                  <DotProgress key={tick} paused={paused} interval={interval} />
                )}
              </button>
            );
          })}
        </div>
      )}
    </section>
  );
}
