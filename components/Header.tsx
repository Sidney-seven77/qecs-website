"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, school } from "@/lib/content";

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [path]);
  const link = (href: string) => `block py-3 md:py-1 border-b-2 ${path === href ? "border-sun" : "border-transparent hover:border-sun/60"} transition-colors`;
  return (
    <header className="sticky top-0 z-40 bg-chalk/95 backdrop-blur border-b border-forest/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link href="/" className="font-display text-lg font-bold leading-tight text-forest">{school.name}</Link>
        <button aria-label="Menu" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)} className="md:hidden rounded-md border border-forest/30 px-3 py-2 text-forest">{open ? "Close" : "Menu"}</button>
        <nav id="menu" className={`${open ? "block" : "hidden"} absolute left-0 right-0 top-full bg-chalk px-5 pb-4 shadow-md md:static md:flex md:items-center md:gap-7 md:bg-transparent md:p-0 md:shadow-none`}>
          {nav.map((n) => <Link key={n.href} href={n.href} className={link(n.href)}>{n.label}</Link>)}
          <Link href="/contact" className="btn btn-primary mt-2 w-full md:mt-0 md:w-auto">Contact us</Link>
        </nav>
      </div>
    </header>
  );
}
