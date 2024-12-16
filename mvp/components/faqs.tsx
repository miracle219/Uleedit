"use client";
import Accordion from "@/components/accordion";
import { Suspense, useMemo } from "react";
const faqs = [
  {
    question: "What is Uleedit?",
    answer:
      "Uleedit is a revolutionary platform that connects idea generators with marketers, fostering collaboration and accelerating product development.",
    active: true,
  },
  {
    question: "How does Uleedit work?",
    answer:
      "Uleedit operates as a two-sided marketplace. Idea generators can submit their concepts, while marketers can discover and collaborate on promising ideas. The platform provides tools for communication, project management, and data analysis.",
  },
  {
    question: "Is there a cost to use Uleedit?",
    answer:
      "Uleedit offers a variety of pricing plans to suit different needs. There may be free tiers with limited features or paid subscriptions for advanced functionalities.",
  },
  {
    question: "What kind of data does Uleedit collect?",
    answer:
      "Uleedit collects user-generated content, including ideas, profiles, and messages. This data is used to improve the platform and provide valuable insights to users.",
  },
  {
    question: "How do I submit an idea on Uleedit?",
    answer:
      "Submitting an idea is easy. Simply create an account and use our intuitive form to describe your concept.",
  },
  {
    question: "Can I retain ownership of my idea?",
    answer:
      "Yes, you retain full ownership of your ideas. Uleedit provides a platform for collaboration and potential partnerships, but the intellectual property remains yours.",
  },
  {
    question: "How do I find potential partners on Uleedit?",
    answer:
      "Uleedit offers various tools to connect with potential partners, including search filters, collaboration features, and community forums.",
  },
  {
    question: "How can I find suitable ideas on Uleedit?",
    answer:
      "You can search and filter ideas based on various criteria, such as industry, target market, and stage of development.",
  },
  {
    question: "Can I contact idea generators directly?",
    answer:
      "Yes! Uleedit provides direct messaging and collaboration tools to facilitate communication between marketers and idea generators",
  },
  {
    question: "How can I leverage Uleedit for market research?",
    answer:
      "Uleedit offers analytics and insights tools to help marketers understand market trends and consumer preferences.",
  },
];
export default function Faqs() {
  return (
    <section
      className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900"
      id="faqs"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-gray-200 md:text-4xl leading-8">
              Questions left?
              <p
                className="text-indigo-500 font-bold"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                We Have Answers!
              </p>
            </h2>
          </div>
          <div className="justify-center items-center flex flex-col gap-3">
            <Suspense
              fallback={
                <>
                  <div className="daisy-skeleton w-full max-w-screen-md h-11" />
                  <div className="daisy-skeleton w-full max-w-screen-md h-11" />
                  <div
                    className="daisy-skeleton w-full max-w-screen-md"
                    h-11
                  ></div>
                  <div
                    className="daisy-skeleton w-full max-w-screen-md"
                    h-11
                  ></div>
                  <div
                    className="daisy-skeleton w-full max-w-screen-md"
                    h-11
                  ></div>
                </>
              }
            >
              {faqs.map(({ question, answer }) => (
                <Accordion key={question} title={question} answer={answer} />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}
