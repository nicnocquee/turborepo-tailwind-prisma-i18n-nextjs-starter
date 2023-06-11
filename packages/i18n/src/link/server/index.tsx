import Link from "next/link";
import { ReactNode } from "react";

const ServerLink = ({
  lng,
  children,
  href,
  prefetch,
  replace,
  ...rest
}: {
  lng: string;
  href: string;
  children: ReactNode;
  prefetch?: boolean;
  replace?: boolean;
}) => {
  return (
    <Link
      href={`/${lng}${href}`}
      prefetch={prefetch}
      replace={replace}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default ServerLink;
