import { useServerTranslation, ServerLink as Link } from "internationalization";

export default async function Page({ params: { lng } }) {
  const { t } = await useServerTranslation(lng, ["second-page"]);
  return (
    <>
      <h1>{t("title")}</h1>
      <Link lng={lng} href={`/`} className="underline text-brandblue">
        {t("back")}
      </Link>
    </>
  );
}
