"use client";

import { useRef, useState } from "react";
import { Transition } from "@headlessui/react";

type DropdownProps = {
  children: React.ReactNode;
  title: string;
  className?: string;
};

export default function Dropdown({
  children,
  title,
  className = "",
}: DropdownProps) {
  const dropdownRef = useRef<HTMLUListElement | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setDropdownOpen(!dropdownOpen);
  };

  const handleFocusOut = (e: React.FocusEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.relatedTarget as Node)
    ) {
      setDropdownOpen(false);
    }
  };

  return (
    <li
      className="relative flex items-center gap-0.5 px-3 py-1"
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
    >
      <span className={"text-lg flex cursor-pointer items-center " + className}>
        {title}
      </span>
      <button
        className="shrink-0 p-1"
        aria-expanded={dropdownOpen}
        onClick={handleClick}
      >
        <span className="sr-only">Show submenu for "{title}"</span>
        <svg
          className="fill-gray-900"
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="6"
          strokeWidth={0.5}
          stroke="currentColor"
        >
          <path d="m1.06.19 3.5 3.5 3.5-3.5 1.061 1.06-4.56 4.56L0 1.25 1.06.19Z" />
        </svg>
      </button>
      <Transition
        ref={dropdownRef}
        show={dropdownOpen}
        as="ul"
        className="absolute left-0 top-full w-36 origin-top-left rounded-xl border bg-white px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100)before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 -translate-y-2"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        onBlur={handleFocusOut}
      >
        {children}
      </Transition>
    </li>
  );
}
