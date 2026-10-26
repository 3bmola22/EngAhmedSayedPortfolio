/* ============================================================================
   AHMED SAYED GALAL — ARCHITECT PORTFOLIO
   Based on github.com/3bmola22/Portfolio (React + Vite + TS + i18n structure)

   ✏️ QUICK EDIT GUIDE | دليل التعديل السريع:
   • Photo, phone, email, CV link, PROJECTS, skill % → src/data/profile.ts
     الصورة والهاتف والبريد ورابط السيرة والمشاريع → src/data/profile.ts
   • All texts (English & Arabic) → src/i18n/translations.ts
     كل النصوص (إنجليزي وعربي) → src/i18n/translations.ts
   • Light / Dark colors → src/index.css (@theme + html:not(.dark))
     ألوان الوضع النهاري والليلي → src/index.css
   • Sections order → below | ترتيب الأقسام بالأسفل
   ========================================================================== */

import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About"; // 01 | نبذة عني
import Projects from "./components/Projects"; // 02 | المشاريع
import SkillsExperience from "./components/SkillsExperience"; // 03 | المهارات
import Contact from "./components/Contact"; // 04 | تواصل معي
import Footer from "./components/Footer";

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="theme-fade min-h-screen bg-surface font-sans antialiased">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Projects />
            <SkillsExperience />
            <Contact />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}