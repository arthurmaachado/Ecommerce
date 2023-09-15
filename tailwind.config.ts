import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: {
      extends: {
        colors: {
          Orange: "#F24E24",
          Gray: "#F5DFC2",
          EbonyClay: "#24253B",
          Tacao: "#F4A484",
        },
      },
    },
  },
};
export default config;
