import { ExpandableCardDemo } from "./UI/expandableCard"

export const BlogSection = () => {
    return (
        <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-500">
                Writing
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
                The Blog
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-400">
                Following the projects I&apos;m building and what I&apos;m learning along the way.
            </p>

            <div className="mt-10">
                <ExpandableCardDemo />
            </div>
        </section>
    );
};
