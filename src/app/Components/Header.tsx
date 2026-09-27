"use client";

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { ThemeToggle } from './UI/ThemeToggle';

export const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLUListElement>(null);
    const hamburgerRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current && hamburgerRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                !hamburgerRef.current.contains(event.target as Node)
            ) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className="sticky top-0 z-30 w-full border-b border-neutral-200/70 bg-white/80 backdrop-blur-md dark:border-neutral-800/70 dark:bg-[#0a0a0b]/80">
            <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
                <Link
                    href="/"
                    className="font-display text-lg font-semibold tracking-tight text-neutral-900 dark:text-white"
                >
                    EMMA PARR
                </Link>

                <nav className="hidden items-center gap-8 text-sm font-medium text-neutral-600 md:flex dark:text-neutral-400">
                    <Link href="/#about" className="hover-underline-animation hover:text-neutral-900 dark:hover:text-white">
                        About
                    </Link>
                    <Link href="/#skills" className="hover-underline-animation hover:text-neutral-900 dark:hover:text-white">
                        Skills
                    </Link>
                    <Link href="/blog" className="hover-underline-animation hover:text-neutral-900 dark:hover:text-white">
                        Blog
                    </Link>
                    <Link href="/#contact" className="hover-underline-animation hover:text-neutral-900 dark:hover:text-white">
                        Contact
                    </Link>
                </nav>

                <div className="flex items-center gap-3">
                    <ThemeToggle />
                    <div
                        ref={hamburgerRef}
                        onClick={toggleMenu}
                        className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
                        aria-label="Toggle navigation menu"
                    >
                        <span className="h-[1.5px] w-5 bg-neutral-700 dark:bg-neutral-300" />
                        <span className="h-[1.5px] w-5 bg-neutral-700 dark:bg-neutral-300" />
                        <span className="h-[1.5px] w-5 bg-neutral-700 dark:bg-neutral-300" />
                    </div>
                </div>
            </div>

            <ul
                ref={menuRef}
                className={`fixed inset-x-0 top-16 z-20 flex h-[calc(100vh-4rem)] w-screen flex-col items-center justify-center gap-8 bg-white text-lg font-medium text-neutral-700 transition-opacity duration-200 ease-in-out md:hidden dark:bg-[#0a0a0b] dark:text-neutral-300 ${isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}
            >
                <li>
                    <Link href="/#about" onClick={() => setIsMenuOpen(false)}>About</Link>
                </li>
                <li>
                    <Link href="/#skills" onClick={() => setIsMenuOpen(false)}>Skills</Link>
                </li>
                <li>
                    <Link href="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link>
                </li>
                <li>
                    <Link href="/#contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                </li>
            </ul>
        </header>
    );
};
