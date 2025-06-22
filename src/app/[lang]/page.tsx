import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
// import { getTranslations } from "next-intl/server"; // for async components

export default function HomePage() {
  const t = useTranslations("HomePage");
  // const t = getTranslations("HomePage");

  return (
    <main>
      <h1>{t("title")}</h1>
      <Link href={'/about'}>{t("about")}</Link>
    </main>
  );
};
