/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
      extend: {
        backgroundColor:{
          "primary":"#D61355",
          "secondary":"#F94A29",
          "yellow":"#FCE22A",
          "cyan":"#30E3DF"
        },
        colors:{
          "primary":"#D61355",
          "secondary":"#F94A29",
          "yellow":"#FCE22A",
          "cyan":"#30E3DF"
        }
      },
    },
    plugins: [],
  }