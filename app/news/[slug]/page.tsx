import Link from "next/link";
import { notFound } from "next/navigation";
import Placeholder from "@/components/Placeholder";
import { news } from "@/lib/content";
import { images } from "@/lib/images";
export function generateStaticParams() { return news.map((n) => ({ slug: n.slug })); }
export default function Article({ params }: { params: { slug: string } }) {
  const n = news.find((x) => x.slug === params.slug);
  if (!n) notFound();
  return (
    <article className="mx-auto max-w-3xl px-5 py-16">
      <Link href="/news" className="font-semibold text-forest underline underline-offset-4">Back to news</Link>
      <h1 className="mt-6 font-display text-4xl font-bold text-forest">{n.title}</h1>
      <time className="mt-2 block text-moss" dateTime={n.date}>{new Date(n.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</time>
      <Placeholder label={n.title} src={images[`news-${n.slug}`]} className="mt-8 aspect-[16/9] w-full" />
      <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/80">{n.body.map((p, i) => <p key={i}>{p}</p>)}</div>
    </article>
  );
}
