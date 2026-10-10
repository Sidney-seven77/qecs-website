import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import NewsCard from "@/components/NewsCard";
import { news } from "@/lib/content";
export const metadata: Metadata = { title: "News" };
export default function News() {
  return (
    <>
      <PageHead title="News" intro="Updates, results and announcements from around the school." />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-3">{news.map((n) => <NewsCard key={n.slug} n={n} />)}</div>
    </>
  );
}
