"use client";
import Link from 'next/link';

const TAGS = ["Frontend Development", "UI Engineering", "Problem Solving", "Continuous Learning"];

const Hero = () => {
    return (
        <section className="relative mx-auto w-full max-w-6xl px-5 pb-20 pt-14 sm:px-8 sm:pt-20 lg:pt-28">
            <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-10">
                {/* Text column */}
                <div className="lg:col-span-7">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 px-3.5 py-1.5 text-xs font-medium text-neutral-600 dark:border-neutral-800 dark:text-neutral-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        Open to new opportunities
                    </div>

                    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-500">
                        Software Developer, Edinburgh, Scotland
                    </p>

                    <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl dark:text-white">
                        I build software that makes sense to the people using it.
                    </h1>

                    <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-400">
                        I&apos;m Emma Parr, a developer with a Masters in Child Clinical Psychology.
                        I spent years studying how people think before I started building for them,
                        and that shows in every interface I ship.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-neutral-500 dark:text-neutral-500">
                        {TAGS.map((tag, i) => (
                            <span key={tag} className="flex items-center gap-6">
                                {tag}
                                {i < TAGS.length - 1 && <span className="text-neutral-300 dark:text-neutral-700">/</span>}
                            </span>
                        ))}
                    </div>

                    <div className="mt-10 flex flex-wrap items-center gap-4">
                        <Link
                            href="/blog"
                            className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
                        >
                            View my work
                        </Link>
                        <Link
                            href="/#contact"
                            className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-800 transition-colors hover:border-neutral-500 hover:text-neutral-950 dark:border-neutral-700 dark:text-neutral-200 dark:hover:border-neutral-500 dark:hover:text-white"
                        >
                            Get in touch
                        </Link>
                    </div>
                </div>

                {/* Framed photo placeholder */}
                <div className="lg:col-span-5">
                    <div className="relative mx-auto w-full max-w-sm">
                        <div className="absolute -inset-3 -z-10 rounded-[2rem] border border-neutral-200 dark:border-neutral-800" />
                        <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900">
                            <div className="flex h-full w-full flex-col items-center justify-center gap-3">
                                <span className="font-display text-6xl font-semibold text-neutral-300 dark:text-neutral-700">
                                    EP
                                </span>
                                <span className="text-xs font-medium uppercase tracking-widest text-neutral-400 dark:text-neutral-600">
                                    Photo coming soon
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
