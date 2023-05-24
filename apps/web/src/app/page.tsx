import { Metadata } from "next";
import { env } from "env";
import { Button, Card, TimeoutLabel } from "ui";
import { prisma } from "database";

const CARD_CONTENT = [
  {
    title: "Caching Tasks",
    href: "https://turbo.build/repo/docs/core-concepts/caching",
    cta: "Read More",
  },
  {
    title: "Running Tasks",
    href: "https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks",
    cta: "Read More",
  },
  {
    title: "Configuration Options",
    href: "https://turbo.build/repo/docs/reference/configuration",
    cta: "Read More",
  },
];

export const metadata: Metadata = {
  title: "Web - Turborepo Example",
};

export default async function Home() {
  const users = await prisma.user.count();
  const serverText = env.HELLO_WORLD; // Can read this because Home is server component
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="w-auto px-4 pt-16 pb-8 mx-auto sm:pt-24 lg:px-8">
        <h1 className="mx-auto text-6xl font-extrabold tracking-tight text-center text-white sm:text-7xl lg:text-8xl xl:text-8xl">
          Web
          <span className="block px-2 text-transparent bg-gradient-to-r from-brandred to-brandblue bg-clip-text">
            Turborepo Example
          </span>
        </h1>
        <div className="max-w-xl mx-auto mt-5 sm:flex sm:justify-center md:mt-8">
          <Button />
        </div>

        <div className="grid grid-cols-1 gap-4 mt-12 sm:grid-cols-3 place-content-evenly">
          {CARD_CONTENT.map((card) => (
            <Card key={card.title} {...card} />
          ))}
          <Card title={`Prisma Users: ${users}`} />
          <Card title={`Server Env HELLO_WORLD: ${serverText}`} />
          <TimeoutLabel title={serverText} timeout={3} />
        </div>
      </main>
    </div>
  );
}
