/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
    "./elements/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Mulish"],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      fontSize: {
        "3xs": ".625rem",   //10px
        "2xs": ".75rem",    //12px
        xs: ".875rem",      //14px
        sm: "1rem",         //16px
        md: "1.125rem",     //18px
        lg: "1.25rem",      //20px
        xl: "1.5rem",       //24px
        "2xl": "1.75rem",   //28px
        "3xl": "1.875rem",  //30px
        "4xl": "2rem",      //32px
        "5xl": '2.25rem',   //36px
        "6xl": "2.375rem",  //38px
        "7xl": "2.75rem",   //44px
        "8xl": '2.875rem',  //46px
        "9xl": '3.75rem',   //60px
      },
      lineHeight: {
        "16": '6.8rem',     //110px
        "15": '4rem',       //64px
        "14": '3.25rem',    //52px
        "13": "3.125rem",   //50px
        "12": '2.75rem',    //44px
        "11": "2.5rem",     //40px
        "10": "1.875rem",   //30px
        "9": "1.625rem",     //26px
      },
      colors: {
        success: "#27a744",
        danger: "#dd3444",
        white: {
          100: "#fdfdfd",
          DEFAULT: "#ffffff",
        },
        gray: {
          100: "#929AA4",
          200: "#C9CBCF",
          DEFAULT: "#e5e5e5",
        },
        blue: {
          100: "#edfcfc",
          DEFAULT: "#c1f7f5",
        },
        yellow: {
          100: "#fcfaed",
          200: "#fbf9e8",
          DEFAULT: "#f6edbd",
        },
        pink: {
          100: "#fef5f8",
          200: "#f9e6f2",
          DEFAULT: "#fce0eb",
        },
        purple: {
          100: "#faf6fe",
          DEFAULT: "#ead2fe",
        },
        primary: {
          100: "#a4669f",
          DEFAULT: "#863d80",
        },
        secondary: {
          100: "#edcd64",
          DEFAULT: "#ffc106",
        },
        tertiary: {
          100: "#223345",
          DEFAULT: "#0c1e30",
        },
        black: {
          50: "#91979d",
          100: "#656b74",
          200: "#5E646E",
          300: "#303740",
          400: "#252a32",
          500: "#22272F",
          600: "#020f20",
          DEFAULT: "#000000",
        },
      },
      padding: {
        18: "4.5rem",
        84: "21rem",
        88: "22rem",
        92: "23rem",
        94: "23.5rem",
      },
      borderRadius: {
        xs: "0.75rem",
        sm: ".875rem",   //14px
        md: "1.25rem", //20px
        lg: "1.875rem",  //30px
      },
      boxShadow: {
        sm: "0px 0px 14px 0px",
        md: "0px 1px 24px 0px",
        // lg: "0px 2px 24px 0px",
        lg: '0px 2px 34px rgba(134, 61, 128, 0.6)',
      },
      width: {
        "1/13": "53%",
      }
    },
  },
  plugins: [
    function ({addComponents}) {
      addComponents({
        '.container': {
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",

          "@screen sm": {
            maxWidth: "640px",
          },

          "@screen md": {
            maxWidth: "768px",
          },

          "@screen lg": {
            maxWidth: "1024px",   
          },

          "@screen xl": {
            maxWidth: "1343px",
          },
        }
      })
    }
  ],
}
