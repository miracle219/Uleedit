import BrowserMockup from "./mockups/browser";

const features = [
  {
    title: "Social Network",
    description:
      "Connect with creative professionals, exchange ideas, and form valuable partnerships. Expand your network and bring your product vision to life.",
    icon: (
      <svg
        className="fill-indigo-500"
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
      >
        <path d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm2-4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4Zm1 10a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H5Z" />
      </svg>
    ),
    delay: 100,
  },
  {
    title: "Newsletter",
    description:
      "Receive notifications about the latest innovations, targeted marketing campaigns, interesting offers, and exciting start-ups.",
    icon: (
      <svg
        className="fill-indigo-500"
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
      >
        <path d="M14.29 2.614a1 1 0 0 0-1.58-1.228L6.407 9.492l-3.199-3.2a1 1 0 1 0-1.414 1.415l4 4a1 1 0 0 0 1.496-.093l7-9ZM1 14a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H1Z" />
      </svg>
    ),
    delay: 400,
  },
  {
    title: "Community Building",
    description:
      "Join active communities that focus on specific industries or interests. Share ideas, collaborate, and learn from like-minded people.",
    icon: (
      <svg
        className="fill-indigo-500"
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
      >
        <path
          d="M2.248 6.285a1 1 0 0 1-1.916-.57A8.014 8.014 0 0 1 5.715.332a1 1 0 0 1 .57 1.916 6.014 6.014 0 0 0-4.037 4.037Z"
          opacity=".3"
        />
        <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1.715-6.752a1 1 0 0 1 .57-1.916 8.014 8.014 0 0 1 5.383 5.383 1 1 0 1 1-1.916.57 6.014 6.014 0 0 0-4.037-4.037Zm4.037 7.467a1 1 0 1 1 1.916.57 8.014 8.014 0 0 1-5.383 5.383 1 1 0 1 1-.57-1.916 6.014 6.014 0 0 0 4.037-4.037Zm-7.467 4.037a1 1 0 1 1-.57 1.916 8.014 8.014 0 0 1-5.383-5.383 1 1 0 1 1 1.916-.57 6.014 6.014 0 0 0 4.037 4.037Z" />
      </svg>
    ),
    delay: 600,
  },
  {
    title: "Collaboration",
    description:
      "Realize your visions thanks to efficient collaboration and optimal marketing.",
    icon: (
      <svg
        className="fill-indigo-500"
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
      >
        <path d="M8 0a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1Zm6 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1a1 1 0 1 1 0 2h-1a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h1a1 1 0 1 1 0 2h-1ZM1 1a1 1 0 0 0 0 2h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 1 0 0 2h1a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H1Z" />
      </svg>
    ),
    delay: 800,
  },
  {
    title: "Integration",
    description:
      "No matter where you are, whether desktop or mobile, always up to date without loss. Stay connected and productive anywhere.",
    icon: (
      <svg
        className="fill-indigo-500"
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
      >
        <path d="M10.284.33a1 1 0 1 0-.574 1.917 6.049 6.049 0 0 1 2.417 1.395A1 1 0 0 0 13.5 2.188 8.034 8.034 0 0 0 10.284.33ZM6.288 2.248A1 1 0 0 0 5.718.33 8.036 8.036 0 0 0 2.5 2.187a1 1 0 0 0 1.372 1.455 6.036 6.036 0 0 1 2.415-1.395ZM1.42 5.401a1 1 0 0 1 .742 1.204 6.025 6.025 0 0 0 0 2.79 1 1 0 0 1-1.946.462 8.026 8.026 0 0 1 0-3.714A1 1 0 0 1 1.421 5.4Zm2.452 6.957A1 1 0 0 0 2.5 13.812a8.036 8.036 0 0 0 3.216 1.857 1 1 0 0 0 .574-1.916 6.044 6.044 0 0 1-2.417-1.395Zm9.668.04a1 1 0 0 1-.041 1.414 8.033 8.033 0 0 1-3.217 1.857 1 1 0 1 1-.571-1.917 6.035 6.035 0 0 0 2.415-1.395 1 1 0 0 1 1.414.042Zm2.242-6.255a1 1 0 1 0-1.946.462 6.03 6.03 0 0 1 0 2.79 1 1 0 1 0 1.946.462 8.022 8.022 0 0 0 0-3.714Z" />
      </svg>
    ),
    delay: 1000,
  },
  {
    title: "Find Co-Funders",
    description:
      "Explore new opportunities and connect with experts in the fields you need.",
    icon: (
      <svg
        className="fill-indigo-500"
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
      >
        <path d="M9 1a1 1 0 1 0-2 0v6a1 1 0 0 0 2 0V1ZM4.572 3.08a1 1 0 0 0-1.144-1.64A7.987 7.987 0 0 0 0 8a8 8 0 0 0 16 0c0-2.72-1.36-5.117-3.428-6.56a1 1 0 1 0-1.144 1.64A5.987 5.987 0 0 1 14 8 6 6 0 1 1 2 8a5.987 5.987 0 0 1 2.572-4.92Z" />
      </svg>
    ),
    delay: 1200,
  },
];

export default function FeaturesPlanet() {
  return (
    <section
      className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900"
      id="features"
    >
      <div className="mx-auto max-w-6xl sm:px-6 lg:px-24">
        <div className="py-12 md:py-20">
          {/* Section header */}

          <BrowserMockup mockupUrl="https://www.uleedit.com">
            <div className="flex flex-col" data-theme="nord">
              <h2
                className="font-semibold text-3xl text-center mb-12"
                data-aos="zoom-in-y"
                data-aos-delay="200"
              >
                <span className="text-indigo-600 font-bold text-4xl">
                  Your Ultimate Collaboration Platform
                </span>
                <br />
                Unleash Creativity & Boost Marketing
              </h2>
              {/* Grid */}
              <div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:p-6 [&>*]:before:absolute [&>*]:before:bg-[#bfc3c9] [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-[#bfc3c9] [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] md:[&>*]:p-10">
                {features.map((feature, index) => (
                  <article
                    key={index}
                    data-aos="zoom-y-out"
                    data-aos-delay={feature.delay}
                  >
                    <h3 className="mb-2 flex items-center space-x-2 font-semibold text-lg">
                      {feature.icon}
                      <span>{feature.title}</span>
                    </h3>
                    <p className="text-[15px] text-gray-700 font-hkgrotesk">
                      {feature.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </BrowserMockup>
          {/* code mockup left */}
          <div className="absolute inset-0 left-7 md:left-16 md:-top-16 -top-12 -z-10">
            <div className="daisy-mockup-code w-fit h-fit" data-aos="zoom-out">
              <pre data-prefix="$">
                <code>npx build app -n uleedit</code>
              </pre>
              <pre data-prefix=">" className="text-warning">
                <code>building...</code>
              </pre>
              <pre data-prefix=">" className="text-warning">
                <code>adding features...</code>
              </pre>
              <pre data-prefix=">" className="text-warning">
                <code>doing something...</code>
              </pre>
            </div>
          </div>
          {/* code mockup middle right */}
          <div
            className="absolute left-3 sm:left-0 md:left-28 md:bottom-6 -bottom-5 overflow-hidden"
            data-aos="zoom-out"
          >
            <div className="daisy-mockup-code w-fit h-fit">
              <pre data-prefix="$">
                <code>npx deploy uleedit -y 2025</code>
              </pre>
              <pre data-prefix=">" className="text-warning">
                <code>deploying...</code>
              </pre>
              <pre data-prefix=">" className="text-success">
                <code>released!</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
