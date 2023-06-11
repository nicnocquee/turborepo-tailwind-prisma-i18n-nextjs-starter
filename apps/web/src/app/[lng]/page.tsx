import { useTranslation } from "i18n";
import Link from "i18n/link/server";
import { Footer } from "./components/Footer";

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng);

  return (
    <div className="flex flex-col">
      <h1 className="text-5xl font-extrabold">{t("title")}</h1>
      <Link
        lng={lng}
        href={`/second-page`}
        className="underline text-brandblue"
      >
        {t("to-second-page")}
      </Link>
      <Link
        lng={lng}
        href={`/client-page`}
        className="underline text-brandblue"
      >
        {t("to-client-page")}
      </Link>
      <Footer lng={lng} />
    </div>
  );
}
