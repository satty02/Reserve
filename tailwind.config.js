/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
        orangered: "#ff6b00",
        gainsboro: "#d9d9d9",
        gray: {
          "100": "#7b7979",
          "200": "rgba(0, 0, 0, 0.5)",
        },
        mediumslateblue: "#425ff7",
        lightcoral: "#fd9c9c",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
        tomorrow: "Tomorrow",
        "roboto-flex": "'Roboto Flex'",
      },
    },
    borderRadius: {
      "4xs": "9px",
      "10xs": "3px",
      "41xl": "60px",
        "12xs": "1px",
        "3xs": "10px",
    },
    fontSize: {
      xl: "20px",
      "5xl": "24px",
      sm: "14px",
      "13xl": "32px",
      inherit: "inherit",
      smi: "13px",
      "7xs": "6px",
      xs: "12px",
      mini: "15px",
      "2xs": "11px",
      base: "16px",
      "5xs": "8px"
    },
  },
  corePlugins: {
    preflight: false,
  },
};
