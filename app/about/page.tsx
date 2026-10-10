import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import Placeholder from "@/components/Placeholder";
import { school } from "@/lib/content";
import { images } from "@/lib/images";
export const metadata: Metadata = { title: "About us" };
const values = [
  { t: "Respect", d: "We treat every pupil, parent and colleague with courtesy." },
  { t: "Diligence", d: "We value steady effort and finishing what we start." },
  { t: "Service", d: "We teach pupils to contribute to their community." },
];
export default function About() {
  return (
    <>
      <PageHead title="About us" intro={`Learn who we are, what we believe and how ${school.short} serves families.`} />
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2">
        <div className="space-y-4 text-lg text-ink/80">
          <h2 className="font-display text-3xl font-bold text-forest">Our story</h2>
          <p>Queen Estherville Complex School began as a small classroom with a handful of pupils and a simple promise: every child would be known by name. Over the years it has grown into a complete school from early years to secondary.</p>
          <p>Our mission is to give each pupil a strong education, good character and the confidence to serve their community. (Placeholder text: replace with the real story.)</p>
        </div>
        <Placeholder label="School building" src={images.about} className="aspect-[4/3] w-full" />
      </section>
      <section className="bg-mist"><div className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="font-display text-3xl font-bold text-forest">What we stand for</h2>
        <dl className="mt-8 grid gap-8 md:grid-cols-3">
          {values.map((v) => <div key={v.t} className="border-l-4 border-sun pl-4"><dt className="font-display text-xl font-bold">{v.t}</dt><dd className="mt-1 text-ink/75">{v.d}</dd></div>)}
        </dl>
      </div></section>
      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="font-display text-3xl font-bold text-forest">Leadership</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          {["Head teacher", "Deputy head teacher", "Director of studies"].map((r, i) => (
            <div key={r}><Placeholder label={r} src={images[`leader-${i + 1}`]} className="aspect-square w-full" /><p className="mt-3 font-semibold">Name Surname</p><p className="text-ink/70">{r}</p></div>
          ))}
        </div>
      </section>
    </>
  );
}
