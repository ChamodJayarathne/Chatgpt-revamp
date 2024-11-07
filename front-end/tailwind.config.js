/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      "chat-dark": "#2F3136",
      "chat-green": "#00B894",
    },
    // backgroud:{
    //   "text-gradient": "linear-gradient(90deg, rgba(9, 127, 77, 0.5) 0%, rgba(9, 127, 77, 0) 100%)"

    // }
  },
  plugins: [],
};
