import { createInstance } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";
import { defaultNS, getOptions } from "./settings";

const initI18next = async (lng: string, ns: string) => {
  // on server side we create a new instance for each render, because during compilation everything seems to be executed in parallel
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`./locales/${language}/${namespace}.json`)
      )
    )
    .init(getOptions(lng, ns));
  return i18nInstance;
};

export async function useTranslation(
  lng: string,
  ns: string | string[] = defaultNS,
  options: any = {}
) {
  const namespace = Array.isArray(ns) ? ns[0] : ns;
  const i18nextInstance = await initI18next(lng, namespace);
  return {
    t: i18nextInstance.getFixedT(lng, namespace, options.keyPrefix),
    i18n: i18nextInstance,
  };
}
