"use client";

import { useState } from "react";
import { useTranslation } from "i18n/client";
import Link from "i18n/link/client";

export default function Counter({ lng }: { lng: string }) {
  const { t } = useTranslation(lng, "client-page");

  const [counter, setCounter] = useState(0);
  return (
    <div className="flex flex-col space-y-4 text-lg">
      <h1 className="text-3xl">{t("title")}</h1>
      <p>{t("counter", { count: counter })}</p>
      <div>
        <button onClick={() => setCounter(Math.max(0, counter - 1))}>-</button>
        <button onClick={() => setCounter(Math.min(10, counter + 1))}>+</button>
      </div>
      <Link href={`/second-page`} className="underline text-brandblue">
        {t("to-second-page")}
      </Link>
    </div>
  );
}
