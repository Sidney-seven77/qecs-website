import Link from "next/link";
import Placeholder from "@/components/Placeholder";
import NewsCard from "@/components/NewsCard";
import { levels, news, school } from "@/lib/content";
import { images } from "@/lib/images";

export default function Home() {
  return (
    <>
      <section className="bg-forest text-chalk">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <h1 className="hero-in font-display text-5xl font-bold leading-[1.05] md:text-7xl">{school.name}</h1>
            <p className="hero-in mt-6 max-w-md text-lg text-chalk/80">A school where every child is known by name, taught with care and challenged to grow. Now enrolling for the next intake.</p>
            <div className="hero-in mt-8 flex flex-wrap gap-3">
              <Link href="/admissions" className="btn btn-sun">Apply for admission</Link>
              <Link href="/gallery" className="btn border border-chalk/50 hover:bg-chalk hover:text-forest">See school life</Link>
            </div>
          </div>
          <div className="hero-in relative">
            <Placeholder label="Pupils in class" src={images.hero} className="aspect-[4/5] w-full rounded-sm" />
            <div className="absolute -bottom-4 -left-4 hidden h-24 w-24 bg-sun md:block" aria-hidden />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="font-display text-3xl font-bold text-forest md:text-4xl">From early years to secondary</h2>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {levels.map((l, i) => (
            <div key={l.name}><Placeholder label={l.name} src={images[`level-${i + 1}`]} className="aspect-[3/2] w-full" /><h3 className="mt-4 font-display text-xl font-bold">{l.name}</h3><p className="mt-2 text-ink/75">{l.text}</p></div>
          ))}
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-display text-3xl font-bold text-forest md:text-4xl">Latest news</h2>
            <Link href="/news" className="font-semibold text-forest underline underline-offset-4">All news</Link>
          </div>
          <div className="mt-10 grid gap-10 md:grid-cols-3">{news.slice(0, 3).map((n) => <NewsCard key={n.slug} n={n} />)}</div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-20 md:grid-cols-[1fr_auto]">
        <div><h2 className="font-display text-3xl font-bold text-forest md:text-4xl">Come and see the school</h2><p className="mt-3 max-w-xl text-ink/75">Book a visit, meet our teachers and ask anything about fees, uniforms or transport.</p></div>
        <Link href="/contact" className="btn btn-primary">Book a visit</Link>
      </section>
    </>
  );
}
