"use client";

import { useState } from "react";
import { useTranslation } from "i18n/client";

export default function Counter({ lng }: { lng: string }) {
  const { t } = useTranslation(lng, "client-page");

  const [counter, setCounter] = useState(0);
  return (
    <>
      <h1>{t("title")}</h1>
      <p>{t("counter", { count: counter })}</p>
      <div>
        <button onClick={() => setCounter(Math.max(0, counter - 1))}>-</button>
        <button onClick={() => setCounter(Math.min(10, counter + 1))}>+</button>
      </div>
    </>
  );
}
