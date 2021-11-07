export default function Layout({
  children,
  fullPage,
}: {
  children: React.ReactNode;
  fullPage?: boolean;
}) {
  const { signOut } = useAuthentication();

  return (
    <div className="container mx-auto p-4">
      {fullPage ? null : <PageHeader signOut={signOut} />}
      {children}
    </div>
  );
}

import { Link } from "@nextui-org/react";
import NextLink from "next/link";
import React from "react";
import useAuthentication from "./account/useAuthentication";

const pages: Array<[string, string]> = [
  ["Completions", "/completions"],
  ["Classifications", "/classifications"],
  ["Search", "/search"],
];

function PageHeader({ signOut }: { signOut: () => void }) {
  return (
    <header className="mb-8 flex flex-wrap justify-between items-center gap-4 text-xl">
      <span className="whitespace-nowrap">
        <Link href="/">
          <span className="font-bold">👋 Trainer</span>
          <span className="font-light ml-2">The missing UI for OpenAI</span>
        </Link>
      </span>
      <nav className="space-x-4 whitespace-nowrap">
        {pages.map(([name, href]) => (
          <NextLink href={href} key={href}>
            <Link color="primary">{name}</Link>
          </NextLink>
        ))}
      </nav>
      <Link onClick={signOut} className="text-base">
        Sign Out
      </Link>
    </header>
  );
}
