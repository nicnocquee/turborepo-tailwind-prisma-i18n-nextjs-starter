"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ReactNode } from "react";

export const ClientLink = ({
  children,
  href,
  prefetch,
  replace,
  className,
  ...rest
}: {
  href: string;
  children: ReactNode;
  prefetch?: boolean;
  replace?: boolean;
  className?: string;
}) => {
  const { lng } = useParams();
  return (
    <Link
      href={`/${lng}${href}`}
      prefetch={prefetch}
      replace={replace}
      className={className}
      {...rest}
    >
      {children}
    </Link>
  );
};
