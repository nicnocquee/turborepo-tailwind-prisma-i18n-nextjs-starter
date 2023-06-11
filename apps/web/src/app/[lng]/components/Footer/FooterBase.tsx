import Link from "i18n/link/server";
import { Trans } from "react-i18next/TransWithoutContext";
import { languages } from "i18n/settings";

export const FooterBase = ({ t, lng }: { t: any; lng: string }) => {
  return (
    <footer className="mt-40">
      <Trans i18nKey="languageSwitcher" t={t}>
        {/* @ts-ignore */}
        Switch from <strong>{{ lng }}</strong> to:{" "}
      </Trans>
      {languages
        .filter((l) => lng !== l)
        .map((l, index) => {
          return (
            <span key={l}>
              {index > 0 && " or "}
              <Link lng={l} className="underline text-brandblue" href={`/`}>
                {l}
              </Link>
            </span>
          );
        })}
    </footer>
  );
};
