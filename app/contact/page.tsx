import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import ContactForm from "@/components/ContactForm";
import { school } from "@/lib/content";
export const metadata: Metadata = { title: "Contact us" };
export default function Contact() {
  return (
    <>
      <PageHead title="Contact us" intro="Questions about admissions, visits or the school day? Send us a message." />
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 md:grid-cols-[1.4fr_1fr]">
        <ContactForm />
        <address className="not-italic space-y-4 text-lg">
          <div><p className="font-semibold">Address</p><p>{school.address}</p></div>
          <div><p className="font-semibold">Phone</p><a className="underline underline-offset-4" href={`tel:${school.phone.replace(/\s/g, "")}`}>{school.phone}</a></div>
          <div><p className="font-semibold">Email</p><a className="underline underline-offset-4" href={`mailto:${school.email}`}>{school.email}</a></div>
          <div><p className="font-semibold">Office hours</p><p>{school.hours}</p></div>
          <div>
            <iframe title="Map to Queen Estherville Complex School" src="https://www.google.com/maps?q=Queen+Easter+Gikuni+Shopping+Center&output=embed" className="aspect-[4/3] w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            <a className="mt-2 inline-block font-semibold text-forest underline underline-offset-4" href="https://maps.app.goo.gl/6R6XDWaWCdzWETMu8" target="_blank" rel="noopener noreferrer">Get directions</a>
          </div>
        </address>
      </div>
    </>
  );
}


