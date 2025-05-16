"use client";

import { useRef, useState, useEffect } from "react";

const historyData = [
  {
    year: "1923",
    era: "大正12年4月",
    title: "新代田沿線小林水力発電分工場設立 7名が新会社に入社創業",
    id: "1923",
  },
  {
    year: "1940",
    era: "昭和15年 4月",
    title: "水戸市南町に新田工場二重工業として工場を移転",
    id: "1940",
  },
  {
    year: "1945",
    era: "昭和20年12月",
    title: "新興木材有限会社から株式会社に改組し資本金を増加し組織拡充工場拡張",
    id: "1945",
  },
  {
    year: "1959",
    era: "昭和34年 4月",
    title:
      "法人組織に変更　有限会社新興木材工業所として発足。吉田博が代表取締役社長となる",
    id: "1959",
  },
  {
    year: "1961",
    era: "昭和36年 3月",
    title: "原子力、核研究、原発用機器のグローブボックスを設計",
    id: "1961",
  },
];

// Placeholder data for other sections
const certificationData = [
  { year: "2020", title: "ISO 9001取得", id: "cert-1" },
  { year: "2022", title: "ISO 14001取得", id: "cert-2" },
];

const companyData = [
  { title: "会社名", content: "株式会社吉田製作所", id: "comp-1" },
  { title: "設立", content: "1923年4月", id: "comp-2" },
  { title: "代表者", content: "代表取締役社長 吉田 雄大", id: "comp-3" },
  { title: "資本金", content: "1億円", id: "comp-4" },
];

const sections = [
  { id: "history", title: "HISTORY", jpTitle: "沿革" },
  { id: "certification", title: "CERTIFICATION", jpTitle: "認証" },
  { id: "company", title: "COMPANY", jpTitle: "会社概要" },
];

export default function HistoryTimeline() {
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const [activeSection, setActiveSection] = useState("history");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = sectionRefs.current[section.id];
        if (!element) continue;
        const { offsetTop, offsetHeight } = element;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const ref = sectionRefs.current[id];
    if (ref) {
      ref.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  };

  return (
    <div className="w-full overflow-visible" style={{ minHeight: "200vh" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "220px 1fr",
          gap: "40px",
          minHeight: "100vh",
          overflow: "visible",
        }}
      >
        <aside style={{ minHeight: "100vh", overflow: "visible" }}>
          <div
            style={{
              position: "sticky",
              top: "20px", // Reduced for testing
              height: "fit-content",
              marginBottom: "20px",
            }}
          >
            <nav className="space-y-8 mb-12">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleScrollTo(section.id)}
                  className={`block text-left w-full px-4 py-2 rounded transition-colors duration-200 focus:outline-none text-lg md:text-xl font-bold ${
                    activeSection === section.id
                      ? "bg-web-light-bg text-web-main"
                      : "text-web-dark hover:bg-web-light-bg/50"
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </nav>
            {activeSection === "history" && (
              <nav className="space-y-4 md:space-y-6 pl-4 border-l-2 border-web-light">
                {historyData.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleScrollTo(item.id)}
                    className="block text-left w-full px-4 py-1 rounded transition-colors duration-200 hover:bg-web-light-bg focus:bg-web-light-bg focus:outline-none text-web-main font-bold"
                  >
                    {item.year}
                  </button>
                ))}
              </nav>
            )}
          </div>
        </aside>
        <div className="space-y-24">{/* Content sections */}</div>
      </div>
    </div>
  );
}
