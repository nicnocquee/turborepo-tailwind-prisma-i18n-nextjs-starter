"use client";

import { FooterBase } from "./FooterBase";
import { useClientTranslation } from "internationalization";

export const Footer = ({ lng }: { lng: string }) => {
  const { t } = useClientTranslation(lng, "footer");
  return <FooterBase t={t} lng={lng} />;
};
