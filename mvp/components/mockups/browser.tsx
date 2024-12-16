"use client";
import useVisibility from "@/utils/useVisibility";
import React, { useEffect, useRef, useState } from "react";
import Logo from "../ui/logo";
import { useInView } from "react-intersection-observer";

const BrowserMockup = ({
  children,
  mockupUrl = "https://daisyui.com",
  mockupTitle = "Uleedit",
}: {
  children: React.ReactNode;
  mockupUrl?: string;
  mockupTitle?: string;
}) => {
  const mockupUrlNode = useRef<HTMLParagraphElement>(null);
  const isVisible = useVisibility(mockupUrlNode);

  const [textNode, setTextNode] = useState<null | HTMLParagraphElement>(null);
  // Intersection observer to detect visibility
  const { ref: textRef, inView: isTextVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    delay: 0,
  });

  const type = async () => {
    if (!isTextVisible || !textNode || textNode.textContent === mockupUrl)
      return;

    let rendered = "";
    const textArray = mockupUrl.split("");
    await new Promise((resolve) => setTimeout(resolve, 100));
    for (const char of textArray) {
      rendered += char;
      textNode.textContent = rendered;
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
  };

  // Effect to handle the typewriter animation
  useEffect(() => {
    if (!isTextVisible || !textNode || textNode.textContent) return;
    type();
  }, [isTextVisible, textNode]);

  return (
    <div className="daisy-mockup-browser bg-base-300" data-theme="nord">
      <div className="daisy-mockup-browser-toolbar">
        <div className="daisy-input">
          <div
            className={`w-fit text-[#242d3bdf] font-sans relative text-left 
            `}
          >
            <p
              ref={(node) => {
                textRef(node); // Attach intersection observer
                setTextNode(node); // Attach to ref for text rendering
              }}
            ></p>
            <span
              className={
                isTextVisible
                  ? "text-left inset-0 absolute bg-[#242d3bdf] animate-caret23 my-1 ease-neumorphic w-[0.100em]"
                  : ""
              }
            ></span>
          </div>
        </div>
      </div>
      <div className="daisy-breadcrumbs text-sm ml-6">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Common Questions</a>
          </li>
          <li className="font-semibold underline underline-offset-1">
            What is Uleedit?
          </li>
        </ul>
      </div>
      <div className="p-2 pt-0">
        <div className="daisy-navbar bg-[#F1F5F9] shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100)before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] rounded-lg">
          <div className="daisy-navbar-start">
            <div className="daisy-dropdown">
              <div
                tabIndex={0}
                role="button"
                className="daisy-btn daisy-btn-ghost daisy-btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="daisy-navbar-center">
            <div className="daisy-btn daisy-btn-ghost text-xl">
              <Logo theme="dark" classNames={["w-24 h-auto"]} />
            </div>
          </div>
          <div className="daisy-navbar-end">
            <button className="daisy-btn daisy-btn-ghost daisy-btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button className="daisy-btn daisy-btn-ghost daisy-btn-circle">
              <div className="daisy-indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="daisy-badge daisy-badge-xs daisy-badge-primary daisy-indicator-item"></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-base-200 flex justify-center px-4 py-16">
        {children}
      </div>
    </div>
  );
};

export default BrowserMockup;
