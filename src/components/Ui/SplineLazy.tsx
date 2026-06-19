import React, { useEffect, useRef, useState, lazy, Suspense } from "react";
import type { Application } from "@splinetool/runtime";

const LazySpline = lazy(() => import("@splinetool/react-spline"));

type Props = {
  scene: string;
  onLoad?: (app: Application) => void;
  className?: string;
  style?: React.CSSProperties;
};

export default function SplineLazy({ scene, onLoad, className, style }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(() => {
    if (typeof window === "undefined") return false;
    return typeof IntersectionObserver === "undefined";
  });

  useEffect(() => {
    if (shouldLoad || !ref.current) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            obs.disconnect();
          }
        });
      },
      { rootMargin: "200px" },
    );

    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [shouldLoad]);

  return (
    <div ref={ref} className={className} style={style}>
      {shouldLoad ? (
        <Suspense
          fallback={
            <div className="w-full h-full flex items-center justify-center">
              <div className="animate-spin h-8 w-8 border-4 border-tertiary border-t-transparent rounded-full" />
            </div>
          }
        >
          <LazySpline
            scene={scene}
            onLoad={onLoad}
            style={{ width: "100%", height: "100%", background: "transparent" }}
          />
        </Suspense>
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700" />
      )}
    </div>
  );
}
