export default function PageHead({ title, intro }: { title: string; intro: string }) {
  return (
    <section className="bg-forest text-chalk">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <h1 className="hero-in font-display text-4xl font-bold md:text-6xl">{title}</h1>
        <p className="hero-in mt-4 max-w-xl text-lg text-chalk/80">{intro}</p>
      </div>
    </section>
  );
}
