import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface ThemeContextData {
    dark: boolean,
    toggleDark: () => void,
}

interface ThemeProviderProps {
    children: ReactNode;
}

let countdownTimeout: NodeJS.Timeout;

export const ThemeContext = createContext({} as ThemeContextData);

export function ThemeProvider({ children }: ThemeProviderProps) {

    const [dark, setDark] = useState(false);

    function toggleDark() {
        setDark(!dark);
    }

    useEffect(() => {
        if (dark) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [dark])

    return (
        <ThemeContext.Provider
            value={{
                dark,
                toggleDark
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

