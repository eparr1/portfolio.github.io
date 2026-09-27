'use client'
import React from "react";
import Image from "next/image";

const Contact = () => {
    const openEmailClient = () => {
        window.open('mailto:emmaparr12345@gmail.com', '_blank');
    };

    const openPhoneDialer = () => {
        window.open('tel:07463268450', '_blank');
    };

    const openGoogleMaps = () => {
        window.open('https://www.google.com/maps?q=Edinburgh,+Scotland', '_blank');
    };

    return (
        <section id="contact" className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-500">
                Contact
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
                Let&apos;s talk
            </h2>

            <div className="mt-10 flex flex-col gap-14 lg:flex-row lg:justify-between">
                <div className="flex flex-col gap-8">
                    <p className="max-w-md text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
                        Feel free to reach out about anything you&apos;d like to work on. You can
                        contact me any time via:
                    </p>

                    <div className="flex flex-col gap-4">
                        <button onClick={openEmailClient} className="flex items-center gap-4 text-left text-neutral-700 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">
                            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-800">
                                <Image src="/mail.svg" alt="" width={20} height={20} className="opacity-70 dark:opacity-80 dark:invert" />
                            </span>
                            emmaparr12345@gmail.com
                        </button>

                        <button onClick={openPhoneDialer} className="flex items-center gap-4 text-left text-neutral-700 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">
                            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-800">
                                <Image src="/phoneIcon.svg" alt="" width={20} height={20} className="opacity-70 dark:opacity-80 dark:invert" />
                            </span>
                            07463 268450
                        </button>

                        <button onClick={openGoogleMaps} className="flex items-center gap-4 text-left text-neutral-700 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">
                            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-800">
                                <Image src="/locationIcon.svg" alt="" width={20} height={20} className="opacity-70 dark:opacity-80 dark:invert" />
                            </span>
                            Edinburgh, Scotland
                        </button>
                    </div>
                </div>

                <form className="flex w-full max-w-md flex-col gap-4">
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="name" className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Your name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Jane Doe"
                            className="rounded-lg border border-neutral-200 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none dark:border-neutral-800 dark:bg-neutral-900 dark:text-white dark:placeholder:text-neutral-500 dark:focus:border-neutral-600"
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Your email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="jane@example.com"
                            className="rounded-lg border border-neutral-200 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none dark:border-neutral-800 dark:bg-neutral-900 dark:text-white dark:placeholder:text-neutral-500 dark:focus:border-neutral-600"
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="message" className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            rows={6}
                            placeholder="What are you thinking of building?"
                            className="rounded-lg border border-neutral-200 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none dark:border-neutral-800 dark:bg-neutral-900 dark:text-white dark:placeholder:text-neutral-500 dark:focus:border-neutral-600"
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-2 w-fit rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
                    >
                        Send message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
