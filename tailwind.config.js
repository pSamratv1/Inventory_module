/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
// import { GOOGLE_FONTS, FONT_SIZES } from "./src/common/assets/global/font";
// import { Z_INDEX } from "./src/common/assets/global/css";

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    // ...FONT_SIZES,
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        poppins: [`Poppins, sans-serif`],
        "dm-sans": [`DM Sans, sans-serif`],
        roboto: [`Roboto, sans-serif`],
      },
      // ...Z_INDEX,
      boxShadow: {
        "custom-05": "0px 10px 50px rgba(0, 0, 0, 0.05)",
        "custom-10": "0px 10px 20px rgba(0, 0, 0, 0.10)",
        "custom-15": "0px 10px 20px rgba(0, 0, 0, 0.15)",
        "custom-25": "0px 10px 20px rgba(0, 0, 0, 0.25)",
        "custom-25-dark": "10px 25px 50px rgba(0, 0, 0, 0.25)",
        "colored-1": "2px 2px 30px 2px #FFF5EC",
        "dropdown-box": "0px 2px 4px rgba(0, 0, 0, 0.08)",
        "module-box": "0px 10px 20px #000000",
        "slight-top": "0px -4px 5px lightGray",
        "top-medium": "0px -4px 6px -2px rgba(122,122,122,1)",
        "down-medium": "0px 4px 6px -2px rgba(122,122,122,1)",
        "left-medium": "-4px 0px 6px -2px rgba(122,122,122,1)",
        "right-medium": "4px 0px 6px -2px rgba(122,122,122,1)",
        "top-left-medium": "-4px -4px 6px -2px rgba(122,122,122,1)",
        "down-left-medium": "4px -4px 6px -2px rgba(122,122,122,1)",
        "top-right-medium": "-4px 4px 6px -2px rgba(122,122,122,1)",
        "down-right-medium": "4px 4px 6px -2px rgba(122,122,122,1)",
      },
      colors: {
        input: {
          100: "#F3F4F6",
        },
        "new-black": {
          200: "#4B5563",
          300: "#ABABAB",
        },
        "new-blue": {
          700: "#1F3D61",
        },
        logo: {
          pinkish: "#FF6363",
        },
        footer: {
          blueish: "#1F3D61",
        },
        tags: {
          manager: "#59E6F6",
        },
        info: {
          100: "#EEF6FF",
          light: "#CCF8FE",
        },
        primary: {
          100: "#E1E1E1",
          300: "#817AF6",
          light: "#DAD7FE",
          lighter: "#9A9AB0",
          normal: "#02A0FC",
          medium: "#5541D8",
          bold: "#5541D7",
          dark: "#4339F2",
        },
        success: {
          light: "#E2FBD7",
          normal: "#34B53A",
        },
        warning: {
          light: "#FFF5CC",
          normal: "#FFB200",
        },
        danger: {
          light: "#FFE5D3",
          normal: "#F61F1F",
        },
        light: {
          100: "#F7F7FC",
          200: "#DBD7F4",
          250: "#CCCCCC",
          300: "#E2E2EA",
          350: "#F8F8F8",
          400: "#D3D3D3",
          450: "#F4F7FC",
          600: "#F5F5F5",
          700: "#D9D9D9",
        },
        dark: {
          100: "#666666",
          200: "#5C5C5C",
          300: "#3F3F3F",
          320: "#333333",
          350: "#333333E5",
          400: "#35353D",
          450: "#35353D",
          500: "#1E1E1E",
          550: "##291F1F",
          600: "#5C5C5C40",
          700: "#000F37",
          800: "#585858",
        },
        grey: {
          50: "#e9e9e9",
          100: "#b9b9b9",
          200: "#989898",
          300: "#686868",
          400: "#4b4b4b",
          500: "#1e1e1e",
          600: "#1b1b1b",
          700: "#151515",
          800: "#111111",
          900: "#0d0d0d",
        },
        purple: {
          50: "#ecebfe",
          100: "#c5c2fb",
          200: "#a9a4f9",
          300: "#817af6",
          400: "#6961f5",
          500: "#4339f2",
          600: "#3d34dc",
          700: "#3028ac",
          800: "#251f85",
          900: "#1c1866",
        },
        newBlack: "#35353D",
        extras: {
          gray: "#E1E1FB",
          lightblue: "#48B0F4",
          reddish: "#F61F1F",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
  // plugins: [],
};
