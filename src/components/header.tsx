"use client";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useParams } from "next/navigation";

export default function Header() {
  const { lang } = useParams();
  const pathname = usePathname();
  const router = useRouter();

  if (!lang) return null;

  const handleLangChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    // window.location.href = `/${value}`;
    router.replace(pathname, { locale: value });
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
