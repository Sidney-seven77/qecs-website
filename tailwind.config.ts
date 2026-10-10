import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { forest: "#12372A", sun: "#E3B23C", chalk: "#F5F6F2", ink: "#1B1F1D", mist: "#DCE6E0", moss: "#436850" },
      fontFamily: { display: ["var(--font-display)", "Georgia", "serif"], body: ["var(--font-body)", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
