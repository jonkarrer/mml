module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    fontSize: {
      x: "11px",
      xr: "12px",
      xty: "13px",
      y: "15px",
      ty: "14px",
      xs: "16px",
      sm: "18px",
      base: "20px",
      xm: "24px",
      md: "28px",
      lg: "36px",
      xl: "45px",
      "2xl": "48px",
      "3xl": "64px",
    },
    colors: {
      clear: "rgba(0,0,0,0)",
      222353: "#222353",
      "2AABC1": "#2AABC1",
      white: "#ffffff",
      black: "#232333",
      dk_bg: "#121212",
      lite: "rgba(255,255,255, .6)",
      dark: "rgba(0,0,0, .6)",
      EFF8FE: "#EFF8FE",
      BFE5FF: "#BFE5FF",
      282929: "#282929",
      "3E8DFF": "#3E8DFF",
      "7A85FF": "#7A85FF",
      FFEED0: "#FFEED0",
      "080B2D": "#080B2D",
      D1CCFF: "#D1CCFF",
      232333: "#232333",
      FFD184: "#FFD184",
      "6BC3FF": "#6BC3FF",
      "8678FF": "#8678FF",
      161616: "#161616",
      "00DCCF": "#00DCCF",
      "1E1F20": "#1E1F20",
      F9F9F9: "#F9F9F9",
      B9B9B9: "#B9B9B9",
      DBDBDB: "#DBDBDB",
      121212: "#121212",
      E7E7F3: "#E7E7F3",
      A5A5A6: "#A5A5A6",
      "01C2FF": "#01C2FF",
      "5F6CFF": "#5F6CFF",
    },
    boxShadow: {
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      plan: "0px 5px 5px rgba(0, 0, 0, 0.1)",
      action: "0px 5px 10px rgba(0, 0, 0, 0.15)",
      button: "0px 5px 5px rgba(0, 0, 0, 0.5)",
      plan_button: "0px 5px 5px rgba(0, 0, 0, 0.15)",
      card: "0px 5px 15px 1px rgba(0, 0, 0, 0.15)",
    },
    extend: {
      backgroundImage: {
        light_grad: "linear-gradient(110deg, #31C1B9, #38AEFF)",
        dark_grad: "linear-gradient(110deg, #33123f, #12123e)",
      },
      width: {
        6: "21px",
        25: "100px",
        26: "105px",
        34: "135px",
        50: "200px",
        54: "215px",
        70: "260px",
        71: "271px",
        75: "300px",
        82: "330px",
        85: "340px",
        100: "400px",
        110: "450px",
        115: "475px",
        120: "500px",
        130: "550px",
        135: "575px",
        140: "600px",
        150: "650px",
        160: "700px",
        170: "750px",
        180: "800px",
        190: "850px",
        195: "875px",
        200: "900px",
        210: "950px",
        220: "1000px",
        230: "1075px",
        240: "1150px",
      },
      height: {
        6: "21px",
        25: "100px",
        26: "105px",
        34: "135px",
        50: "200px",
        54: "215px",
        70: "260px",
        71: "271px",
        75: "300px",
        82: "330px",
        85: "376px",
        100: "400px",
        110: "450px",
        115: "475px",
        120: "500px",
        130: "550px",
        135: "575px",
        140: "600px",
        150: "650px",
        160: "700px",
        170: "750px",
        180: "800px",
        190: "850px",
        200: "900px",
        210: "950px",
        220: "1000px",
        230: "1075px",
        240: "1150px",
        "80vh": "80vh",
      },
      maxHeight: {
        700: "700px",
        800: "800px",
        900: "900px",
        1000: "1000px",
        1100: "1100px",
        1200: "1200px",
      },
      maxWidth: {
        700: "700px",
        800: "800px",
        900: "900px",
        1000: "1000px",
        1100: "1100px",
        1200: "1200px",
      },
      opacity: {
        87: ".87",
      },
      borderRadius: {
        base: "10px",
      },
      borderWidth: {
        1: "1px",
      },
      dropShadow: {
        logo: "4px 5px 5px rgba(0, 0, 0, .3)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
