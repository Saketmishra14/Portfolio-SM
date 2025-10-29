import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ArrowUpward } from "@mui/icons-material";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import ProjectsPage from "./pages/ProjectsPage";
import Resume from "./pages/Resume";
import NotFound from "./pages/NotFound";
import { Analytics } from "@vercel/analytics/react";
import LayoutWithHeader from "./LayoutWithHeader";
import { Toaster } from "react-hot-toast";
import {  HelmetProvider } from 'react-helmet-async';


function App() {
  const [isdarkMode, setIsDarkMode] = useState(false);
  const [isGoTopVisible, setIsGoTopVisible] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 700) {
      setIsGoTopVisible(true);
    } else {
      setIsGoTopVisible(false);
    }
  });

  const goTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`${isdarkMode && "dark"}`}>
      <Toaster />
      <Analytics />
      <div className="bg-white dark:bg-zinc-900 relative">
        <div
          className={`fixed right-6 bottom-3 bg-blue-600 z-50 rounded-full text-white p-1.5 md:p-2 cursor-pointer ${
            isGoTopVisible ? "block" : "hidden"
          }`}
          onClick={goTop}
        >
          <ArrowUpward />
        </div>
      <HelmetProvider>
        <Routes>
          {/* With header routes */}
            <Route element={<LayoutWithHeader setDark={setIsDarkMode} currentMode={isdarkMode} />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          

          {/* Without header routes */}
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
        </HelmetProvider>
        

        <Footer />
      </div>
    </div>
  );
}

export default App;
