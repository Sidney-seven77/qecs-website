"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from "react";

const EXT = /\.(jpe?g|png|webp)$/i;
function fallback(img: HTMLImageElement) {
  if (EXT.test(img.src) && !img.dataset.fb) {
    img.dataset.fb = "1";
    img.src = img.src.replace(EXT, ".svg");
  }
}
export default function Placeholder({ label, src, className = "" }: { label: string; src?: string; i?: number; className?: string }) {
  const ref = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) fallback(img);
  }, [src]);
  return (
    <div className={`relative overflow-hidden bg-mist ${className}`}>
      {src && <img ref={ref} src={src} alt={label} loading="lazy" onError={(e) => fallback(e.currentTarget)} className="absolute inset-0 h-full w-full object-cover" />}
    </div>
  );
}
