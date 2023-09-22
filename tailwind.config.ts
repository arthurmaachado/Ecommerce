import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
  theme: {
    extend: {
      colors: {
        Orange: "#F24E24",
        Sidecar: "#F5DFC2",
        EbonyClay: "#24253B",
        Tacao: {
          dark: "#f5956e",
          light: "#F4A484",
        },
      },
    },
  },
};
export default config;
