import Link from "next/link";
import Placeholder from "./Placeholder";
import { images } from "@/lib/images";
export default function NewsCard({ n }: { n: { slug: string; date: string; title: string; summary: string } }) {
  const d = new Date(n.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  return (
    <article className="group">
      <Link href={`/news/${n.slug}`} aria-hidden tabIndex={-1}><Placeholder label={n.title} src={images[`news-${n.slug}`]} className="aspect-[4/3] w-full" /></Link>
      <time dateTime={n.date} className="mt-4 block text-sm text-moss">{d}</time>
      <h3 className="mt-1 font-display text-xl font-bold text-forest"><Link href={`/news/${n.slug}`} className="underline-offset-4 group-hover:underline">{n.title}</Link></h3>
      <p className="mt-2 text-ink/75">{n.summary}</p>
    </article>
  );
}
