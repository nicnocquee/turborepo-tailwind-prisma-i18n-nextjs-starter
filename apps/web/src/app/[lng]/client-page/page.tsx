import Counter from "./counter";
import { useServerTranslation, ServerLink as Link } from "internationalization";

export default async function Page({ params: { lng } }) {
  const { t } = await useServerTranslation(lng, "client-page");
  return (
    <>
      <Counter lng={lng} />
      <Link lng={lng} href={`/`} className="underline text-brandblue">
        {t("back-to-home")}
      </Link>
    </>
  );
}
