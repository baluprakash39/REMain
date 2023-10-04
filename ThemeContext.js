
// import React, { createContext, useContext, useState } from 'react';

// const ThemeContext = createContext();

// export function ThemeProvider({ children }) {
//   const [isDarkTheme, setIsDarkTheme] = useState(false); // Initial theme state

//   const toggleTheme = () => {
//     setIsDarkTheme((prevTheme) => !prevTheme); // Function to toggle theme
//   };

//   return (
//     <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Appearance } from 'react-native';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(
    Appearance.getColorScheme() === 'dark' // Set initial theme based on device appearance
  );

  useEffect(() => {
    // Update theme when device appearance changes
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setIsDarkTheme(colorScheme === 'dark');
    });

    return () => {
      subscription.remove(); // Clean up the subscription
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ isDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}


export function useTheme() {
  return useContext(ThemeContext);
}
