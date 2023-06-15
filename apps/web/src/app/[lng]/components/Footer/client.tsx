"use client";

import { Suspense } from "react";
import { FooterBase } from "./FooterBase";
import { useTranslation } from "i18n/client";

export const Footer = ({ lng }) => {
  return (
    <Suspense fallback="loading">
      <FooterWithTranslation lng={lng} />
    </Suspense>
  );
};

const FooterWithTranslation = ({ lng }) => {
  const { t } = useTranslation(lng, "footer");
  return <FooterBase t={t} lng={lng} />;
};
