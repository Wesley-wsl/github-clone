import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import Repo from "./pages/Repo";
import GlobalStyles from "./styles/GlobalStyles";
import "react-calendar-heatmap/dist/styles.css";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

import { ThemeName, themes } from "./styles/themes";

function App() {
    const [themeName, setThemeName] = useState<ThemeName>("light");
    const currentTheme = themes[themeName];

    return (
        <ThemeProvider theme={currentTheme}>
            <BrowserRouter>
                <Header themeName={themeName} setThemeName={setThemeName} />
                <Routes>
                    <Route path="/" element={<Profile />} />
                    <Route path="/:username" element={<Profile />} />
                    <Route path="/:username/:reponame" element={<Repo />} />
                </Routes>
                <Footer />
                <GlobalStyles />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
