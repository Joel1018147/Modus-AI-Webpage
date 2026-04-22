import React, { createContext, useContext, useEffect, useState } from "react";

export type Lang = "en" | "bm" | "cn" | "id" | "vn" | "ar" | "th";

export const LANGUAGES: { code: Lang; label: string; native: string; rtl?: boolean }[] = [
  { code: "en", label: "EN", native: "English" },
  { code: "bm", label: "BM", native: "Bahasa Malaysia" },
  { code: "cn", label: "CN", native: "中文" },
  { code: "id", label: "ID", native: "Indonesia" },
  { code: "vn", label: "VN", native: "Tiếng Việt" },
  { code: "th", label: "TH", native: "ภาษาไทย" },
  { code: "ar", label: "AR", native: "العربية", rtl: true },
];

type LanguageContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  isRtl: boolean;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  isRtl: false,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const isRtl = lang === "ar";

  useEffect(() => {
    document.documentElement.dir = isRtl ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang, isRtl]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, isRtl }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
