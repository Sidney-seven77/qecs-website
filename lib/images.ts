// To use a real photo: copy it into public/images, then change the path here.
// Example: hero: "/images/hero.jpg"
export const images: Record<string, string> = {
  hero: "/images/hero.jpg",
  about: "/images/about.jpg",
  "level-1": "/images/level-1.jpg",
  "level-2": "/images/level-2.jpg",
  "level-3": "/images/level-3.jpg",
  "leader-1": "/images/leader-1.jpg",
  "leader-2": "/images/leader-2.jpg",
  "leader-3": "/images/leader-3.jpg",
  "news-term-opening": "/images/news-term-opening.jpg",
  "news-science-fair": "/images/news-science-fair.jpg",
  "news-sports-day": "/images/news-sports-day.jpg",
  "news-library-opening": "/images/news-library-opening.jpg",
  "news-parents-forum": "/images/news-parents-forum.jpg",
  "news-music-festival": "/images/news-music-festival.jpg",
  ...Object.fromEntries(Array.from({ length: 12 }, (_, i) => [`gallery-${i + 1}`, `/images/gallery-${i + 1}.jpg`])),
};
