"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import Logo from "./logo";
import Dropdown from "@/components/dropdown";
import MobileMenu from "./mobile-menu";
import { SCALED_HOVER } from "@/constants";

export default function Header() {
  const [top, setTop] = useState<boolean>(true);

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = (): void => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-slate-100/70 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100)before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow flex-wrap items-center justify-center gap-4 lg:gap-8 text-gray-900 text-lg font-semibold font-sans">
              <li className="px-3 py-1">
                <Link
                  href="#features"
                  className={
                    "btn-sm text-gray-800 transition ease-in-out delay-150 hover:bg-[#111827] hover:text-gray-200 font-sans font-semibold tracking-normal text-base" +
                    SCALED_HOVER
                  }
                >
                  See Your Benefits
                </Link>
              </li>
            </ul>
          </nav>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <Link
                href="#faqs"
                className={
                  "btn-sm bg-white text-gray-800 shadow hover:bg-gray-50" +
                  SCALED_HOVER
                }
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="#waitlist-subscribe"
                className={
                  "btn-sm bg-gray-800 text-gray-200 shadow hover:bg-gray-900 font-sans font-semibold tracking-wide" +
                  SCALED_HOVER
                }
              >
                Join Waitlist
              </Link>
            </li>
          </ul>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
