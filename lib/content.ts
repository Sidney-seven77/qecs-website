import { images } from "./images";
// EDIT ME: all school facts below are placeholders. Replace with real details.
export const school = {
  name: "Queen Estherville Complex School",
  short: "QECS",
  motto: "Learning with character", // placeholder
  phone: "+254 700 000 000",
  email: "mugwanjask7@gmail.com",
  address: "Gikuni Shopping Center, Kenya",
  hours: "Monday to Friday, 7:30 am to 4:30 pm",
};
export const nav = [
  { href: "/", label: "Home" }, { href: "/about", label: "About us" }, { href: "/news", label: "News" },
  { href: "/gallery", label: "Gallery" }, { href: "/admissions", label: "Admissions" },
];
export const news = [
  { slug: "term-opening", date: "2026-09-01", title: "Term three opens with a full timetable", summary: "Classes resume on Monday with new club schedules, a revised timetable and a welcome assembly for new pupils.", body: ["Pupils returned on Monday morning to a freshly painted compound and a full timetable. The head teacher welcomed everyone at assembly and reminded pupils that term three is the longest of the year, with exams in the final fortnight.", "New this term are Friday afternoon clubs, including debate, chess, art and coding. Pupils sign up with their class teachers during the first week.", "Parents can collect the term calendar from the school office. It lists exam weeks, the sports day and the parents' meetings."] },
  { slug: "science-fair", date: "2026-08-14", title: "Pupils showcase projects at the science fair", summary: "More than sixty projects, from water filters to solar lamps, were judged by teachers and visiting guests.", body: ["The school hall was full on Thursday as pupils from Grade 4 to Form 4 presented more than sixty projects. Topics ranged from homemade water filters to a solar lamp built from recycled parts.", "A panel of teachers and guests judged each stand on originality, clear explanation and how well the idea could help the community.", "The winning team from Form 2 will represent the school at the county science congress next month. All pupils were praised for their curiosity and teamwork."] },
  { slug: "sports-day", date: "2026-07-20", title: "Inter-house sports day results", summary: "Four houses competed in track, field and relay events across a full day of cheering and friendly rivalry.", body: ["Sports day began with a march past led by the school band. Four houses competed in sprints, long jump, relays and the ever-popular sack race.", "Blue House took the overall trophy by a narrow margin, with Green House winning the relay shield. Teachers joined in for a tug of war that ended in a draw.", "Thank you to the parents who volunteered as marshals and handed out water throughout the day."] },
  { slug: "library-opening", date: "2026-06-30", title: "New library opens its doors", summary: "A bright reading room with over two thousand books, tablets for research and a quiet corner for younger pupils.", body: ["The new school library opened this week after months of fundraising and donations from parents and alumni. It holds more than two thousand books across fiction, science, history and local languages.", "Every class now has a weekly library period. Younger pupils have a cushioned reading corner, while older pupils can book study desks.", "The school is still accepting book donations in good condition. Please drop them at the office."] },
  { slug: "parents-forum", date: "2026-06-12", title: "Parents' forum discusses safe transport and homework", summary: "Over a hundred parents met teachers to share ideas on school transport, homework routines and reading at home.", body: ["More than a hundred parents attended Saturday's forum. Teachers explained how homework is set and marked, and offered tips for building a calm evening routine.", "The transport committee presented a plan for safer drop-off and pick-up points, which will start next term.", "Parents also suggested a monthly reading morning. The school will trial it in the coming weeks."] },
  { slug: "music-festival", date: "2026-05-25", title: "Choir and band shine at the music festival", summary: "The school choir took second place and the junior band earned praise from the judges at the district festival.", body: ["Our school choir travelled to the district music festival and returned with a second-place trophy. The judges praised their harmony and stage presence.", "The junior band, performing in public for the first time, received special mention for rhythm and teamwork.", "Rehearsals continue on Tuesday and Thursday afternoons. New members are welcome."] },
];
export const levels = [
  { name: "Early years", text: "Play-based learning, early literacy and numeracy in small, closely supervised classes." },
  { name: "Primary", text: "A broad curriculum with strong foundations in English, Kiswahili, mathematics and science." },
  { name: "Secondary", text: "Subject specialist teaching, careers guidance and preparation for national examinations." },
];
export const steps = [
  { title: "Send an enquiry", text: "Use the form below or call the office. We reply within two working days." },
  { title: "Visit the school", text: "Tour the classrooms and meet the head teacher and class teachers." },
  { title: "Submit documents", text: "Birth certificate, recent report card, passport photos and immunisation card." },
  { title: "Assessment and offer", text: "A short, friendly assessment, followed by a written offer and fee schedule." },
];
export const albums = ["Classroom", "Sports", "Events", "Campus"] as const;
export const photos = Array.from({ length: 12 }, (_, i) => ({
  id: i, album: albums[i % 4], caption: `Placeholder photo ${i + 1}`, src: images[`gallery-${i + 1}`], tall: i % 5 === 0,
}));

