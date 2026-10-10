import Link from "next/link";
export default function NotFound() {
  return (<div className="mx-auto max-w-xl px-5 py-32 text-center"><h1 className="font-display text-4xl font-bold text-forest">Page not found</h1><p className="mt-3">The page you want has moved or does not exist.</p><Link href="/" className="btn btn-primary mt-6">Go to home</Link></div>);
}
