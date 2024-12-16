"use client";
import Link from "next/link";
import Logo from "./logo";
import React from "react";
import { EMAIL_REGEX, SCALED_HOVER } from "@/constants";
import useSubscribeForm from "@/utils/useSubscribeForm";

export default function Footer({ border = false }: { border?: boolean }) {
  const { email, handleSubmit, isSubmitting, setEmail } = useSubscribeForm();
  const style: React.CSSProperties = {
    clipPath:
      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%",

    // Add other CSS properties as needed
  };

  return (
    <footer>
      <div className="relative isolate overflow-hidden bg-gray-900 pt-16 sm:pt-24 lg:pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2
                className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
                data-aos="zoom-out"
                data-aos-delay="100"
              >
                Join the waitlist
              </h2>
              <p
                className="text-md  text-gray-300 leading-6	 text-base/6"
                data-aos="zoom-out"
                data-aos-delay="120"
              >
                Be the first to access exclusive insights, expert advice, and
                powerful strategies tailored for your success.
              </p>
              <form onSubmit={handleSubmit} target="_self" autoCorrect="false">
                <div className="mt-6 flex max-w-md gap-x-4">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    required
                    className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    placeholder="Enter your email"
                    data-aos="fade-in"
                    data-aos-delay="400"
                    onChange={setEmail}
                    value={email}
                  />
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className={
                      "flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    }
                    data-aos="fade-in"
                    data-aos-delay="450"
                  >
                    Join now
                  </button>
                </div>
              </form>
            </div>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 14v3m4-6V7a3 3 0 1 1 6 0v4M5 11h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z"
                    />
                  </svg>
                </div>
                <dt className="mt-4 font-semibold text-white">
                  Exclusive Insights
                </dt>
                <dd className="mt-2 text-gray-400 leading-6">
                  Sign up now to secure your spot on the Uleedit waitlist and
                  stay ahead in the world of marketing and lead generation.
                </dd>
              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002"
                    />
                  </svg>
                </div>
                <dt className="mt-4 font-semibold text-white">No spam</dt>
                <dd className="mt-2 leading-6 text-gray-400">
                  We respect your inbox. You receive only valuable updates and
                  the insights you need.
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div
          className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-4"
          aria-hidden="true"
        >
          <div
            className="aspect-[1055/828] w-[72.1875rem] bg-gradient-to-tr from-[#9089fc] to-[#111827] opacity-30"
            style={style}
          ></div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-6">
          {/* Top area: Blocks */}
          <div
            className={`grid gap-10 py-8 sm:grid-cols-12 md:py-12 ${
              border
                ? "border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.200),transparent)1]"
                : ""
            }`}
          >
            {/*  block Logo */}
            <div className="space-y-2 sm:col-span-12 lg:col-span-4">
              <div>
                <Logo theme="white" />
              </div>
              <div className="text-sm text-gray-200">
                &copy; Uleedit.com <br />
                <a
                  href="https://www.callipson.com"
                  referrerPolicy="no-referrer"
                  rel="author noopener noreferrer"
                  className="text-gray-500 text-semibold hover:text-slate-50 transition-colors duration-75 ease-in"
                >
                  A website by <span className="font-semibold">Callipson</span>
                </a>
              </div>
            </div>

            {/*  block Product */}
            <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2 text-gray-200">
              <h3 className="text-md font-sans ">Product</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    className="text-gray-400 transition hover:text-gray-100"
                    href="#features"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-400 transition hover:text-gray-100"
                    href="mailto:uleedit.dev@gmail.com"
                  >
                    Request Feature
                  </Link>
                </li>
              </ul>
            </div>

            {/*  block Company */}
            <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2 text-gray-200">
              <h3 className="text-md font-sans">About Us</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    className="text-gray-400 transition hover:text-gray-100"
                    href="#faqs"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-400 transition hover:text-gray-100"
                    href="/blog"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* block Socials */}
            <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2 text-gray-200">
              <h3 className="text-md font-sans">Socials</h3>
              <ul className="flex gap-y-1 -ml-2">
                <li>
                  <Link
                    className="flex items-center justify-center text-slate-300 transition hover:text-gray-100"
                    href="#0"
                    aria-label="Twitter"
                  >
                    <svg
                      className="h-8 w-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z"></path>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex items-center justify-center text-slate-300 transition hover:text-gray-100"
                    href="#0"
                    aria-label="Medium"
                  >
                    <svg
                      className="h-8 w-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M23 8H9a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1Zm-1.708 3.791-.858.823a.251.251 0 0 0-.1.241V18.9a.251.251 0 0 0 .1.241l.838.823v.181h-4.215v-.181l.868-.843c.085-.085.085-.11.085-.241v-4.887l-2.41 6.131h-.329l-2.81-6.13V18.1a.567.567 0 0 0 .156.472l1.129 1.37v.181h-3.2v-.181l1.129-1.37a.547.547 0 0 0 .146-.472v-4.749a.416.416 0 0 0-.138-.351l-1-1.209v-.181H13.8l2.4 5.283 2.122-5.283h2.971l-.001.181Z"></path>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex items-center justify-center text-slate-300 transition hover:text-gray-100"
                    href="#0"
                    aria-label="Github"
                  >
                    <svg
                      className="h-8 w-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z"></path>
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
