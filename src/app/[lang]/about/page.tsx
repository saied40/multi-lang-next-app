import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("AboutPage");
  return (
    <main>
      <h1>{t("title")}</h1>
    </main>
  );
};
