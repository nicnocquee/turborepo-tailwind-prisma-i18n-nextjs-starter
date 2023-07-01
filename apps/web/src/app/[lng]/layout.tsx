import "../../styles/globals.css";
// include styles from the ui package

import { dir } from "i18next";
import { languages } from "internationalization";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>{children}</body>
    </html>
  );
}
