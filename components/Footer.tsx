import Link from "next/link";
import { nav, school } from "@/lib/content";
export default function Footer() {
  return (
    <footer className="bg-forest text-chalk">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3">
        <div><p className="font-display text-xl font-bold">{school.name}</p><p className="mt-2 text-chalk/70">{school.motto}</p></div>
        <ul className="space-y-2">{[...nav, { href: "/contact", label: "Contact us" }].map((n) => <li key={n.href}><Link className="hover:text-sun" href={n.href}>{n.label}</Link></li>)}</ul>
        <address className="not-italic space-y-1 text-chalk/80">
          <p>{school.address}</p><p><a className="hover:text-sun" href={`tel:${school.phone.replace(/\s/g, "")}`}>{school.phone}</a></p>
          <p><a className="hover:text-sun" href={`mailto:${school.email}`}>{school.email}</a></p><p>{school.hours}</p>
        </address>
      </div>
      <p className="border-t border-chalk/15 py-4 text-center text-sm text-chalk/60">© {new Date().getFullYear()} {school.name}</p>
    </footer>
  );
}
