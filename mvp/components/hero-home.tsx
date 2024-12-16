import PageIllustration from "@/components/page-illustration";
import SubscribeForm from "./subscribe-form";

export default function HeroHome() {
  return (
    <section className="relative min-h-svh flex items-center justify-center mb-36">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-8 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <div className="mx-auto max-w-3xl">
              <div className={`text-center max-w-3xl mx-auto mb-6`}>
                <h1
                  className="text-5xl md:text-6xl font-bold text-gray-800 text-transparent bg-clip-text bg-gradient-to-b from-slate-800 to-indigo-300 mb-6 max-w-3xl m-auto"
                  data-aos="zoom-out"
                >
                  Empowering every step,{" "}
                  <span className="underline decoration-2 decoration-[#99A7EB] underline-offset-4">
                    from idea to impact
                  </span>
                </h1>
                <p
                  className="mb-2 text-xl text-gray-700 leading-6 md:leading-8"
                  data-aos="zoom-out"
                  data-aos-delay="500"
                >
                  Seasoned expert or budding entrepreneur,{" "}
                  <span className="font-bold text-[#262E3D] md:inline-block">
                    we provide you the space to bring your vision alive.
                  </span>
                </p>
              </div>

              <SubscribeForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
