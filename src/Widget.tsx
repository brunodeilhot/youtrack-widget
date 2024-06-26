import {useEffect, useState} from "react";
import Theme, {
    ThemeProvider,
} from "@jetbrains/ring-ui-built/components/global/theme";
import "@jetbrains/ring-ui-built/components/style.css";
import "./styles.css";

const darkMatcher = window.matchMedia("(prefers-color-scheme: dark)");

export function Widget() {

    const [dark, setDark] = useState(darkMatcher.matches);

    useEffect(() => {
        const onChange = (e: MediaQueryListEvent) => setDark(e.matches);
        darkMatcher.addEventListener("change", onChange);

        return () => darkMatcher.removeEventListener("change", onChange);
    }, []);

    return (
        <ThemeProvider className="App" theme={dark ? Theme.DARK : Theme.LIGHT}>
            <h1>Custom Widget</h1>
        </ThemeProvider>
    );
}
