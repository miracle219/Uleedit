"use client";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

type TypewriterTextProps = {
  text: string;
  threshold?: number;
  delay?: number;
};

const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  threshold = 0.1,
  delay = 0,
}) => {
  // Use ref for the paragraph element

  const [textNode, setTextNode] = useState<null | HTMLParagraphElement>(null);
  // Intersection observer to detect visibility
  const { ref: textRef, inView: isTextVisible } = useInView({
    triggerOnce: true,
    threshold,
    delay,
  });

  const type = async () => {
    if (!isTextVisible || !textNode || textNode.textContent === text) return;

    let rendered = "";
    const textArray = text.split("");
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
    <div className="w-full mt-3" data-aos="zoom-y-out" data-aos-delay="8000">
      <div className="w-fit mx-auto h-fit relative p-2">
        <div
          className={`text-lg text-[#242d3bdf] font-semibold mx-auto relative text-center 
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
                ? "text-left inset-0 absolute bg-[#31343ae8] animate-caret my-1 ease-neumorphic w-[0.100em]"
                : ""
            }
          ></span>
        </div>
      </div>
    </div>
  );
};

export default TypewriterText;
