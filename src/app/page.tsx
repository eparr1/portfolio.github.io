import Head from "next/head";
import Image from "next/image";
import { Header } from '@/app/Components/Header';
import Hero from "./Components/Hero";
import About from "./Components/about";
import { Skills } from "./Components/Skills";
import { Container } from "postcss";
import { TracingBeam } from "./Components/UI/tracing-beam";
import Blog from "./blog/page";
import Contact from "./Components/contact";
import { ExpandableCardDemo } from "./Components/UI/expandableCard";
import { BlogSection } from "./Components/appBlogSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Welcome to the homepage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
        <div className="relative min-h-screen bg-white text-neutral-900 dark:bg-[#0a0a0b] dark:text-neutral-100">
          <Header />

          <TracingBeam className="w-full">
            {/*Hero Section*/}
            <div><Hero /></div>

            {/*About me*/}
            <About />

            <BlogSection />

            <Contact />
          </TracingBeam>
        </div>
      </main>
    </>
  );
}