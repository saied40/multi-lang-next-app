"use client";
import { routing } from "@/i18n/routing";
import { useParams } from "next/navigation";

export default function Header() {
  const { lang } = useParams();

  if (!lang) return null;

  const handleLangChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    window.location.href.replace('/' + lang as string, '/' + value);
  };

  return (
    <header>
      <h1>{lang}</h1>
      <select name="" id="" defaultValue={lang} onChange={handleLangChange}>
        {routing.locales.map((locale) => (
          <option key={locale} value={locale}>{locale}</option>
        ))}
      </select>
    </header>
  );
};
