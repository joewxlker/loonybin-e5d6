import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
      },
      colors: {
        p1: "#ffffff", // Bright yellow
        s1: "#ffffff", // Dark background
        s2: "#ffffff", // Slightly lighter background
        s3: "#ffffff", // Even lighter background
        t1: "#000000", // White text
        t2: "#303030", // Light gray text
        shadow: "rgba(0, 0, 0, 0.2)", // Slight shadow
      },
    },
  },
  plugins: [],
} satisfies Config;
