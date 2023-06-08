/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        colorPrimary: "#18B1A2",
        colorSecondary: "#624dd6",
        colorTertiary: "#DC3136",

        colorDark: "#282c34",

        colorGreyDark1: "rgba(17, 17, 17, 0.6)",
        colorGreyDark2: "#333",
        colorGreyDark3: "#777",
        colorGreyDark4: "#999",

        colorGreyLight1: "#faf9f9",
        colorGreyLight2: "#f4f2f2",
        colorGreyLight3: "#f0eeee",
        colorGreyLight4: "#ccc",
      },

      fontSize: {
        textH1: "3.2rem",
        textH2: "2.8rem",
        textH3: "2.4rem",
        textH4: "2.2rem",
        textH5: "2rem",
        textH6: "1.8rem",
        textBody: "1.6rem",
      },

      borderRadius: {
        radius: "0.8rem",
        Radius1x: "2.5rem",
      },
    },
  },
  plugins: [require("daisyui")],
};
