import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import ContactForm from "@/components/ContactForm";
import { levels, steps } from "@/lib/content";
export const metadata: Metadata = { title: "Admissions" };
export default function Admissions() {
  return (
    <>
      <PageHead title="Admissions" intro="Four steps from first enquiry to your child's first day." />
      <section className="mx-auto max-w-6xl px-5 py-20">
        <ol className="grid gap-10 md:grid-cols-2">
          {steps.map((s, i) => (
            <li key={s.title} className="flex gap-5"><span className="font-display text-4xl font-bold text-sun">{i + 1}</span><div><h2 className="font-display text-xl font-bold text-forest">{s.title}</h2><p className="mt-1 text-ink/75">{s.text}</p></div></li>
          ))}
        </ol>
      </section>
      <section className="bg-mist"><div className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="font-display text-3xl font-bold text-forest">Levels we admit</h2>
        <ul className="mt-6 grid gap-4 md:grid-cols-3">{levels.map((l) => <li key={l.name} className="border-t-4 border-forest pt-3"><p className="font-semibold">{l.name}</p><p className="text-ink/75">{l.text}</p></li>)}</ul>
        <p className="mt-6 text-ink/70">Fees and term dates: add the fee schedule here or link a PDF.</p>
      </div></section>
      <section className="mx-auto max-w-3xl px-5 py-20" id="enquire">
        <h2 className="font-display text-3xl font-bold text-forest">Make an admissions enquiry</h2>
        <div className="mt-8"><ContactForm defaultTopic="Admissions" /></div>
      </section>
    </>
  );
}
