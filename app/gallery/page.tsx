import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import Gallery from "@/components/Gallery";
export const metadata: Metadata = { title: "Gallery" };
export default function GalleryPage() {
  return (<><PageHead title="Gallery" intro="Classrooms, sports, events and the campus, as they happen." /><Gallery /></>);
}
