"use client";
import formatNumber from "@/helper/format-number";
import useSubscribeForm from "@/utils/useSubscribeForm";
import TypewriterText from "./typewriter-text";

export default function SubscribeForm() {
  const { handleSubmit, isSubmitting, setEmail, email } = useSubscribeForm();

  return (
    <>
      <div className="pt-8 border-t border-gray-200" id="waitlist-subscribe">
        {/* illustration */}

        <div
          className="absolute bottom-12 -z-10 -translate-x-36"
          aria-hidden="true"
        >
          <div className="h-80 w-80 rounded-full bg-gradient-to-tr from-blue-300 to-gray-900 opacity-30 blur-[160px]"></div>
        </div>
        <div className="absolute -bottom-16 -z-10" aria-hidden="true">
          <div className="h-80 w-80 rounded-full from-blue-300 opacity-40 blur-[160px]"></div>
        </div>
        <div className="absolute -bottom-4 -z-10" aria-hidden="true">
          <div className="h-56 w-56 rounded-full border-[20px] border-white blur-[20px]"></div>
        </div>
        {/* illustration End */}
        {/* Counter */}
        <div className="max-w-sm mx-auto grid gap-x-6 lg:gap-x-6 gap-y-2 grid-cols-1 md:grid-cols-3 items-start md:max-w-2xl lg:max-w-5xl mt-2 min-h-[300px] md:min-h-[125px]">
          <div
            className="text-center flex flex-col justify-center relative rounded-lg bg-slate-200/90 shadow-inner shadow-black/30 before:pointer-events-none before:absolute before:inset-0 before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] p-2"
            data-aos="zoom-out"
          >
            <div className="text-5xl font-bold mb-1 transition-all duration-500 ease-in-out text-transparent bg-clip-text bg-gradient-to-b from-gray-800 to-gray-500 min-h-[48px]">
              {formatNumber(75400)}
            </div>
            <div className="text-gray-700 text-base font-semibold transition-all duration-500 ease-in-out leading-4">
              Founded startups.
            </div>
          </div>
          <div
            className="text-center flex flex-col justify-center  relative rounded-lg bg-slate-200/90 shadow-inner shadow-black/30 before:pointer-events-none before:absolute before:inset-0 before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] p-2"
            data-aos="zoom-out"
            data-aos-delay="500"
          >
            <div className="text-5xl font-bold mb-1 transition-all duration-500 ease-in-out text-transparent bg-clip-text bg-gradient-to-b from-gray-800 to-gray-500 min-h-[48px] font-variant-numeric slashed-zero lining-nums tabular-nums">
              {`${89}%`}
            </div>
            <div className="text-gray-700 text-base font-semibold transition-all duration-500 ease-in-out leading-4">
              Failing startups.
            </div>
          </div>
          <div
            className="text-center flex flex-col justify-center  relative rounded-lg bg-slate-200/90 shadow-inner shadow-black/30 before:pointer-events-none before:absolute before:inset-0 before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] p-2"
            data-aos="zoom-out"
            data-aos-delay="1000"
          >
            <div className="text-5xl font-bold mb-1 transition-all duration-500 ease-in-out text-transparent bg-clip-text bg-gradient-to-b from-gray-800 to-gray-500 min-h-[48px] font-variant-numeric slashed-zero lining-nums tabular-nums">
              {formatNumber(7536)}
            </div>
            <div className="text-gray-700 text-base font-semibold transition-all duration-500 ease-in-out leading-4">
              Succeeded startups.
            </div>
          </div>
        </div>
        {/* Typewriter Text */}
        <TypewriterText text="Remain with the successful ones." />
      </div>
      {/* Form waitlist */}
      <div
        className="rounded-lg shadow-neumorphic2 bg-inherit text-text-dark hover:shadow-neumorphic2 hover:translate-y-hover transition-all duration-300 py-4 px-6 w-full max-w-md mx-auto mt-6"
        data-aos="zoom-out"
        data-aos-delay="6000"
      >
        <div className="w-full max-w-md mx-auto shrink-0">
          <form className="relative" onSubmit={handleSubmit}>
            <div className="space-y-3">
              <div>
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <div className="relative">
                  <input
                    value={email}
                    onChange={setEmail}
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full flex-auto rounded-md border-0 bg-white/70 px-3.5 py-2 text-slate-900/50 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-slate-900 sm:text-base sm:leading-6 placeholder:text-slate-900/50 font-medium text-center"
                    placeholder="innovator@add.me"
                  ></input>
                </div>
              </div>
              <div>
                <button
                  disabled={isSubmitting}
                  className="btn text-slate-700 bg-[#111A29] hover:bg-[#344e7a] dark:text-slate-700 dark:bg-[#111A29]/90 dark:hover:bg-[#111A29] dark:hover:font-bold dark:hover:text-indigo-200 w-full font-bold tracking-wide text-lg duration-200"
                  type="submit"
                >
                  <span className="hover:animate-none animate-pulse text-slate-200 ">
                    Join The Waitlist
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* Caption */}
      <div
        className="max-w-3xl mx-auto opacity-0 transition-all duration-600 ease-in-out mt-4"
        data-aos="zoom-out"
        data-aos-delay="6500"
      >
        <div className="text-center mx-auto max-w-lg">
          <p className="text-md text-gray-600 mb-6">
            And be part of{" "}
            <span className="text-[#111A29] font-bold font-sans">
              2.000+ Innovators
            </span>{" "}
            who've already signed up. Let's build visions{" "}
            <span className="font-bold text-[#111A29] font-sans">
              together!
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
