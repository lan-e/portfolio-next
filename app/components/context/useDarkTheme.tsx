import { useState, useEffect } from "react";

export default function useDarkTheme() {
  const [theme, setTheme] = useState(localStorage.theme);
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
    console.log(localStorage.getItem("theme"));
  }, [theme, colorTheme]);

  return { colorTheme, setTheme };
}

//CHEKCS THEME FOR EVERY PAGE
// import { useState, useEffect } from "react";

// export default function useDarkTheme() {
//   const isLocalStorageAvailable = typeof localStorage !== "undefined";

//   const [theme, setTheme] = useState(
//     isLocalStorageAvailable ? localStorage.theme : "light"
//   );
//   const colorTheme = theme === "dark" ? "light" : "dark";

//   useEffect(() => {
//     if (isLocalStorageAvailable) {
//       const root = window.document.documentElement;
//       root.classList.remove(colorTheme);
//       root.classList.add(theme);
//       localStorage.setItem("theme", theme);
//       console.log(localStorage.getItem("theme"));
//     }
//   }, [theme, colorTheme, isLocalStorageAvailable]);

//   return { colorTheme, setTheme };
// }
