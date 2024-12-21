import React from "react";
import { createContext , useState, useContext} from "react";

const Theme = createContext();

export const useTheme = () => useContext(Theme);

export const ThemeProvider = ({children}) =>{
    const [darkTheme, setDarkTheme] = useState(false);
    
    const themeChanged = () =>{
      setDarkTheme(!darkTheme);
    }
    return (
        <Theme.Provider value={{darkTheme, themeChanged}}>
            {children}
        </Theme.Provider>
    );
} 
