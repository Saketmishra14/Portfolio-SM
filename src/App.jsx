import { useEffect, useState } from "react";
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
import PDFSignatureChecker from "./components/developerTool/PDFSignatureChecker";
import SEO from "./components/SEO";


function App() {
  const [isdarkMode, setIsDarkMode] = useState(false);
  const [isGoTopVisible, setIsGoTopVisible] = useState(false);

  useEffect(() => {
    const toggleGoTopVisibility = () => {
      setIsGoTopVisible(window.scrollY > 700);
    };

    window.addEventListener("scroll", toggleGoTopVisibility);
    toggleGoTopVisibility();

    return () => {
      window.removeEventListener("scroll", toggleGoTopVisibility);
    };
  }, []);

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
            <Route path="/tool" element={<DeveloperToolPage/>}/>
            <Route path="/tool/token-generator" element={<><SEO title="Token Generator | Saket Mishra" description="Generate secure random tokens with Saket Mishra's free browser-based developer utility." path="/tool/token-generator" /><TokenGenerator/></>}/>
            <Route path="/tool/hash-text" element={<><SEO title="Hash Text Tool | Saket Mishra" description="Hash text with common algorithms using Saket Mishra's free developer utility." path="/tool/hash-text" /><HashTextTool/></>}/>
            <Route path="/tool/bcrypt" element={<><SEO title="Bcrypt Tool | Saket Mishra" description="Generate and verify bcrypt hashes with Saket Mishra's free developer utility." path="/tool/bcrypt" /><BcryptTool/></>}/>
            <Route path="/tool/uuid-generator" element={<><SEO title="UUID Generator | Saket Mishra" description="Generate UUID values quickly with Saket Mishra's free developer utility." path="/tool/uuid-generator" /><UuidGenerator/></>}/>
            <Route path="/tool/ulid-generator" element={<><SEO title="ULID Generator | Saket Mishra" description="Generate sortable ULID values quickly with Saket Mishra's free developer utility." path="/tool/ulid-generator" /><UlidGenerator/></>}/>
            <Route path="/tool/encryption" element={<><SEO title="Encrypt and Decrypt Text Tool | Saket Mishra" description="Encrypt and decrypt text in the browser with Saket Mishra's free developer utility." path="/tool/encryption" /><EncryptDecryptTool/></>}/>
            <Route path="/tool/bip39-generator" element={<><SEO title="BIP39 Generator | Saket Mishra" description="Generate BIP39 mnemonic phrases with Saket Mishra's free browser-based developer utility." path="/tool/bip39-generator" /><BIP39Generator/></>}/>
            <Route path="/tool/password-strength-analyser" element={<><SEO title="Password Strength Analyser | Saket Mishra" description="Check password strength in the browser with Saket Mishra's free developer utility." path="/tool/password-strength-analyser" /><PasswordStrengthAnalyzer/></>}/>
            <Route path="/tool/pdf-signature-checker" element={<><SEO title="PDF Signature Checker | Saket Mishra" description="Check PDF signature details with Saket Mishra's free developer utility." path="/tool/pdf-signature-checker" /><PDFSignatureChecker/></>}/>
            
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
