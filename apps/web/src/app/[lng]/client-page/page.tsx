import { useTranslation } from "i18n";
import { Footer } from "../components/Footer/client";
import Counter from "./counter";
import Link from "i18n/link/server";

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng, "client-page");
  return (
    <>
      <Counter lng={lng} />
      <Link lng={lng} href={`/`} className="underline text-brandblue">
        {t("back-to-home")}
      </Link>
      <Footer lng={lng} />
    </>
  );
}
