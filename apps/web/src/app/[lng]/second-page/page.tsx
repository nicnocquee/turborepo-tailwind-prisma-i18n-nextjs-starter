import Link from "i18n/link/server";
import { useTranslation } from "i18n";

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng, ["second-page"]);
  return (
    <>
      <h1>{t("title")}</h1>
      <Link lng={lng} href={`/`} className="underline text-brandblue">
        {t("back")}
      </Link>
    </>
  );
}
