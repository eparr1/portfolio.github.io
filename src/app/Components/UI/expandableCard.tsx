"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/app/Components/UI/hookforOutsideClick";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className=" w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white  sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
            
            {/*This bit is when the card expands the text for that */}
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-[#131316] "
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-[#262628]"
                    >
                      {active.description}
                    </motion.p>
                  </div>
{/*This changes the button when it expands*/}
                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    className="px-4 py-3 text-sm rounded-full font-semibold bg-neutral-900 text-white hover:bg-neutral-700"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className=" text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full space-y-3">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center rounded-xl cursor-pointer border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700"
          >
            <div className="flex gap-4 flex-col md:flex-row">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-900 dark:text-neutral-100 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-500 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-semibold bg-neutral-100 hover:bg-neutral-900 hover:text-white text-neutral-900 dark:bg-neutral-800 dark:text-white dark:hover:bg-white dark:hover:text-neutral-900 mt-4 md:mt-0"
              onClick={() => setActive(card)}
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "1/09/24",
    title: "Front-end QR Code Challenge",
    src: "/QRcode.png",
    ctaText: "Read More",
    ctaLink: "/blog",
    content: () => {
      return (
        <p>
          So, this is my first challenge using front-end mentor and I used Tailwind CSS again. The main aim was to recreate the QR code image with the one provided and I have to say actually 
          setting up both the Tailwind CSS and uploading it onto my GitHub was actually frustrating at times. It&apos;s amazing how quickly you forget the simple set-up instructions for a new project.
          I don&apos;t know if this was just me but for some reason my Tailwind CSS was not computing with Git, as I set up and linked my project to GitHub first. It didn&apos;t like that. 
          I ended up starting again, linking my Tailwind CSS first before connecting to GitHub and it did work. But still so annoying!!
          Don&apos;t get me started on merging existing changes because there seemed to be some unsolved change stuck in the Git universe. I did work it out though ... eventually.
          Just learning to take my time with it. But overall really glad I did this  challenge, which taught me a lot about setting up GitHub and setting up a project on 
          Visual Studio Code.
        </p>
      );
    },
  },
  {
    description: "20/08/24",
    title: "How I started the portfolio website",
    src: "/gradphoto.jpg",
    ctaText: "Read more",
    ctaLink: "/blog",
    content: () => {
      return (
        <p>
          
        </p>
      );
    },
  },
];




{/* 
  {
    description: "Using Front-end Mentor Challenge to create a QR code!",
    title: "09/09/2024",
    src: "/avater.png",
    ctaText: "Play",
    content: () => {
      return (
        <p>
          So, this is my first challenge using front-end mentor and I used Tailwind CSS again. The main aim was to recreate the QR code image with the one provided and I have to say actually 
          setting up both the Tailwind CSS and uploading it onto my GitHub was actually frustrating at times. It&apos;s amazing how quickly you forget the simple set-up instructions for a new project.
          I don&apos;t know if this was just me but for some reason my Tailwind CSS was not computing with Git, as I set up and linked my project to GitHub first. It didn&apos;t like that. 
          I ended up starting again, linking my Tailwind CSS first before connecting to GitHub and it did work. But still so annoying!!
          Don&apos;t get me started on merging existing changes because there seemed to be some unsolved change stuck in the Git universe. I did work it out though ... eventually.
          Just learning to take my time with it. But overall really glad I did this super easy challenge, which taught me a lot about setting up GitHub and setting up a project on 
          Visual Studio Code.
        </p>
      );
    },
  },
  {
    description: "Babbu Maan",
    title: "Mitran Di Chhatri",
    ctaText: "Play",
    content: () => {
      return (
        <p>
          Babu Maan, a legendary Punjabi singer, is renowned for his soulful
          voice and profound lyrics that resonate deeply with his audience. Born
          in the village of Khant Maanpur in Punjab, India, he has become a
          cultural icon in the Punjabi music industry. <br /> <br /> His songs
          often reflect the struggles and triumphs of everyday life, capturing
          the essence of Punjabi culture and traditions. With a career spanning
          over two decades, Babu Maan has released numerous hit albums and
          singles that have garnered him a massive fan following both in India
          and abroad.
        </p>
      );
    },
  },
  */}

  

