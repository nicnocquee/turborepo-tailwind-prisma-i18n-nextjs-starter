"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ReactNode } from "react";

const ClientLink = ({
  children,
  href,
  prefetch,
  replace,
  ...rest
}: {
  href: string;
  children: ReactNode;
  prefetch?: boolean;
  replace?: boolean;
}) => {
  const { lng } = useParams();
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

export default ClientLink;
