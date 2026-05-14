import { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  const [language, setLanguage] = useState("fr");

  return (
    <div className="min-h-screen overflow-hidden bg-[#08110f] text-[#f7f0e6]">
      <div className="portfolio-backdrop" aria-hidden="true">
        <div className="backdrop-grid" />
        <div className="backdrop-ribbon ribbon-one" />
        <div className="backdrop-ribbon ribbon-two" />
        <div className="backdrop-ribbon ribbon-three" />
        <div className="backdrop-noise" />
      </div>
      <Navbar language={language} onLanguageChange={setLanguage} />
      <main className="pt-20">
        <Home language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
}

export default App;
