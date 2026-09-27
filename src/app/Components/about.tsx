"use client";

import Image from 'next/image';
import { Skills } from './Skills';

const About = () => {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <div className="flex flex-col items-start gap-12 lg:flex-row lg:gap-16">
        <div className="hidden w-full max-w-xs shrink-0 lg:block">
          <div className="relative">
            <div className="absolute -inset-3 -z-10 rounded-[2rem] border border-neutral-200 dark:border-neutral-800" />
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800">
              <Image
                src="/gradphoto.jpg"
                alt="Emma Parr graduation photo"
                width={500}
                height={625}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="w-full">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-500">
            About Me
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
            From understanding people to building for them
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-400">
            My psychology background shapes how I approach every project: I ask why
            a user gets stuck before I decide how to fix it. I work across JavaScript,
            TypeScript, React, Node.js, Express, PostgreSQL and Sequelize, and I care
            about writing code that&apos;s clear, considered, and genuinely useful, not
            just functional. I&apos;m a fast learner, and I&apos;m only getting started.
          </p>

          <div id="skills" className="mt-10">
            <Skills />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
