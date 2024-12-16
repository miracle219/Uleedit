import Link from "next/link";
import { memo } from "react";

const features = [
  {
    title: "Exclusive Access",
    description:
      "Accelerate your marketing efforts and drive business growth with Uleedit's forms marketplace.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="56"
        height="56"
        fill="#131D30"
        viewBox="0 0 16 16"
      >
        <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15zM11 2h.5a.5.5 0 0 1 .5.5V15h-1zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1" />
      </svg>
    ),
    delay: 0,
  },
  {
    title: "Business Validation",
    description:
      "Uleedit fosters collaboration by allowing users to discuss, refine, and develop concepts together.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="56"
        height="56"
        fill="#131D30"
        viewBox="0 0 16 16"
      >
        <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" />
        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5zm6.854 7.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708" />
      </svg>
    ),
    delay: 200,
  },
  {
    title: "Market Analysis",
    description:
      "Analyze market trends, manage leads, and collaborate seamlessly with your team.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="56"
        height="56"
        fill="#131D30"
        viewBox="0 0 16 16"
      >
        <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z" />
      </svg>
    ),
    delay: 400,
  },
];

// Reusable FeatureCard component
const FeatureCard = memo(
  ({
    title,
    description,
    icon,
    delay,
  }: {
    title: string;
    description: string;
    icon: React.ReactNode;
    delay: number;
  }) => (
    <div
      className="flex flex-col items-center relative rounded-lg bg-slate-200/90 shadow-inner shadow-black/30 before:pointer-events-none before:absolute before:inset-0 before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] p-4"
      data-aos="zoom-out"
      data-aos-delay={delay}
    >
      <div className="mb-1">{icon}</div>
      <h4 className="text-2xl font-bold text-[#131D30] text-center mb-2">
        {title}
      </h4>
      <p className="text-lg text-gray-700 text-center leading-6">
        {description}
      </p>
    </div>
  ),
);

export default function FeaturesHome() {
  return (
    <section className="relative pb-24 pt-24 md:pt-5 md:pb-16">
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        <div className="h-80 w-80 rounded-full bg-gradient-to-tr from-blue-500 to-gray-900 opacity-40 blur-[160px]" />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pt-12 md:pt-20 pb-12 md:pb-18">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-18 text-center md:pb-24">
            <h2
              className="text-3xl font-bold text-[#1a2945] md:text-4xl"
              data-aos="fade-in"
              data-aos-delay="320"
            >
              Professional From Day One
            </h2>
            <p
              className="text-lg text-gray-700"
              data-aos="zoom-y-out"
              data-aos-delay="100"
            >
              From concept to market launch, Uleedit provides the community,
              structure and support you need.
            </p>
          </div>

          {/* Render FeatureCards */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 lg:gap-16 items-start md:max-w-none mt-6 md:mt-0">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                delay={feature.delay}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#waitlist-subscribe"
              className="inline-block px-8 py-3 bg-background-light text-text-dark font-semibold rounded-lg shadow-neumorphic duration-300 hover:shadow-neumorphicInset hover:translate-y-hover active:shadow-neumorphicInset active:translate-y-active transition-all w-full max-w-64 text-base"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
