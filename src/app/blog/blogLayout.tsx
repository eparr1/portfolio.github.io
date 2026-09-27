'use client';

import { ReactNode } from "react";
import { Header } from "../Components/Header";

interface LayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <div className="relative flex flex-col min-h-screen bg-white text-neutral-900 dark:bg-[#0a0a0b] dark:text-neutral-100">
      <Header />

      <div className="relative flex flex-col items-center text-center px-5 pt-14 sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-500">
          Writing
        </p>
        <h1 className="font-display mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
          The Blog
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-400">
          Taking you through my coding journey, from start to finish.
        </p>

        <main className="mx-auto mt-10 w-full max-w-3xl flex-grow">
          {children}
        </main>

        <footer className="w-full py-8 text-sm text-neutral-500 dark:text-neutral-500">
          &copy; {new Date().getFullYear()} Emma Parr. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default RootLayout;
