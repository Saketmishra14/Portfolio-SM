import { useState } from "react";
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
import BlogPage from "./pages/BlogPage";
import DeveloperToolPage from "./pages/DeveloperToolPage";
import TokenGenerator from "./components/developerTool/TokenGenerator";
import HashTextTool from "./components/developerTool/HashTextTool";
import BcryptTool from "./components/developerTool/BcryptTool";
import UuidGenerator from "./components/developerTool/UuidGenerator";
import UlidGenerator from "./components/developerTool/UlidGenerator";
import EncryptDecryptTool from "./components/developerTool/EncryptDecryptTool"
import BIP39Generator from "./components/developerTool/Bip39GeneratorTool";
import PasswordStrengthAnalyzer from "./components/developerTool/PasswordStrengthAnalyzer";


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
            <Route path="/blog" element={<BlogPage/>}/>
            <Route path="/Tool" element={<DeveloperToolPage/>}/>
            <Route path="/Tool/token-generator" element={<TokenGenerator/>}/>
            <Route path="/Tool/hash-text" element={<HashTextTool/>}/>
            <Route path="/Tool/bcrypt" element={<BcryptTool/>}/>
            <Route path="/Tool/uuid-generator" element={<UuidGenerator/>}/>
            <Route path="/Tool/ulid-generator" element={<UlidGenerator/>}/>
            <Route path="/Tool/encryption" element={<EncryptDecryptTool/>}/>
            <Route path="/Tool/bip39-generator" element={<BIP39Generator/>}/>
            <Route path="/Tool/password-strength-analyser" element={<PasswordStrengthAnalyzer/>}/>
            
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
