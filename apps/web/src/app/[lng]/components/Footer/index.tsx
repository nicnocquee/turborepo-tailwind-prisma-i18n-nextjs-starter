import { useServerTranslation } from "internationalization";
import { FooterBase } from "./FooterBase";

export const Footer = async ({ lng }: { lng: string }) => {
  const { t } = await useServerTranslation(lng, "footer");
  return <FooterBase t={t} lng={lng} />;
};
