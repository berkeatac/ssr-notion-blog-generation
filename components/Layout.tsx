import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
}

const Home: NextPage<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 px-16">
      <Head>
        <title>berkeatac</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="flex flex-row w-full max-w-7xl">
        <h1 className="text-3xl justify-start tracking-wider">
          <Link href={"/"}>berkeatac</Link>
        </h1>
        <div className="flex flex-row justify-end w-full">
          <Link
            href="/saved"
            className="text-xl rounded-md px-2 py-1 hover:bg-slate-100 transition-colors"
          >
            saved
          </Link>
          <Link
            href="/work"
            className="text-xl rounded-md px-2 py-1 hover:bg-slate-100 transition-colors"
          >
            work
          </Link>
        </div>
      </nav>

      <main className="flex w-full flex-1 flex-col py-12">{children}</main>

      <footer className="flex h-24 w-full items-center justify-center border-t gap-3">
        <Link href={"https://www.twitter.com/berkeatac"}>twitter</Link>
        <Link href={"https://www.github.com/berkeatac"}>github</Link>
      </footer>
    </div>
  );
};

export default Home;
