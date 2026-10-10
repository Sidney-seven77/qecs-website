"use client";
import { useCallback, useEffect, useState } from "react";
import Placeholder from "./Placeholder";
import { albums, photos } from "@/lib/content";

export default function Gallery() {
  const [album, setAlbum] = useState<string>("All");
  const [open, setOpen] = useState<number | null>(null);
  const list = album === "All" ? photos : photos.filter((p) => p.album === album);
  const step = useCallback((d: number) => setOpen((o) => (o === null ? o : (o + d + list.length) % list.length)), [list.length]);
  useEffect(() => {
    if (open === null) return;
    const k = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(null); if (e.key === "ArrowRight") step(1); if (e.key === "ArrowLeft") step(-1); };
    window.addEventListener("keydown", k); document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", k); document.body.style.overflow = ""; };
  }, [open, step]);
  const cur = open !== null ? list[open] : null;
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <div role="tablist" aria-label="Albums" className="flex flex-wrap gap-6 border-b border-forest/15">
        {["All", ...albums].map((a) => (
          <button key={a} role="tab" aria-selected={album === a} onClick={() => { setAlbum(a); setOpen(null); }}
            className={`-mb-px border-b-2 pb-3 font-semibold transition-colors ${album === a ? "border-sun text-forest" : "border-transparent text-ink/60 hover:text-forest"}`}>{a}</button>
        ))}
      </div>
      <ul className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {list.map((p, i) => (
          <li key={p.id} className="mb-4 break-inside-avoid">
            <button onClick={() => setOpen(i)} className="block w-full overflow-hidden transition-transform duration-300 hover:scale-[1.02]" aria-label={`Open ${p.caption}`}>
              <Placeholder label={p.caption} src={p.src} i={p.id} className={`w-full ${p.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`} />
            </button>
          </li>
        ))}
      </ul>
      {cur && (
        <div role="dialog" aria-modal="true" aria-label={cur.caption} className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4" onClick={() => setOpen(null)}>
          <div className="w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <Placeholder label={cur.caption} src={cur.src} i={cur.id} className="aspect-[4/3] w-full" />
            <div className="mt-4 flex items-center justify-between text-chalk">
              <p>{cur.caption} ({(open ?? 0) + 1} of {list.length})</p>
              <div className="flex gap-3">
                <button className="btn btn-sun" onClick={() => step(-1)}>Previous</button>
                <button className="btn btn-sun" onClick={() => step(1)}>Next</button>
                <button className="btn border border-chalk/50" onClick={() => setOpen(null)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
