import Link from "next/link";
import { useTranslation } from "i18n";
import { Footer } from "../components/Footer/client";
import Counter from "./counter";

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng, "client-page");
  return (
    <>
      <Counter lng={lng} />
      <Link href={`/${lng}`}>
        <button type="button">{t("back-to-home")}</button>
      </Link>
      <Footer lng={lng} />
    </>
  );
}
