import { env } from "env";
import { useEffect, useState } from "react";

export const TimeoutLabel = ({
  title,
  timeout = 5,
}: {
  title: string;
  timeout?: number;
}) => {
  const [count, setCount] = useState<number>(timeout);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((curr) => {
        const next = curr - 1;
        if (next === 0) {
          clearInterval(timer);
        }
        return next;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="ui-group ui-mt-4 ui-rounded-lg ui-border ui-border-transparent ui-overflow-hidden ui-bg-origin-border ui-bg-gradient-to-r ui-from-brandred ui-to-brandblue ui-text-[#6b7280]">
      <div className="ui-flex-col ui-p-4 ui-bg-zinc-900 ui-h-full">
        <p className=" ui-text-xl ui-text-white">{`This is a Client component with title: ${title}`}</p>
        {count === 0 ? (
          <p className=" ui-text-xl ui-text-white">{`NEXT_PUBLIC_SOMEENV is ${env.NEXT_PUBLIC_SOMEENV}`}</p>
        ) : (
          <p className=" ui-text-xl ui-text-white">{`Showing NEXT_PUBLIC_SOMEENV env in ${count}`}</p>
        )}
        {/* The following will cause the app crash */}
        {/* <p className=" ui-text-xl ui-text-white">{`The server env HELLO_WORLD: ${env.HELLO_WORLD}`}</p> */}
      </div>
    </div>
  );
};
