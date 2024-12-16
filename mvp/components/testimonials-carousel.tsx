import Testimonial from "@/components/testimonial";
import TestimonialImg01 from "@/public/images/kyle-ryan.jpg";
import TestimonialImg02 from "@/public/images/nonsap-visuals.jpg";
import TestimonialImg03 from "@/public/images/priscilla-du-preez.jpg";
import TestimonialImg04 from "@/public/images/stephanie-tuohy.jpg";
import TestimonialImg05 from "@/public/images/vinicius-wiesehofer.jpg";
import Logo from "./ui/logo";

export default function TestimonialsCarousel() {
  const testimonials = [
    {
      img: TestimonialImg01,
      name: "Kyle Ryan",
      username: "@kyleryan",
      date: "May 19, 2024",
      content:
        "The environmental impact of plastic packaging is enormous, so why not develop a biodegradable one? A plant-based alternative would significantly reduce the amount of waste worldwide!",
      channel: "default",
    },
    {
      img: TestimonialImg02,
      name: "Rodri Sans",
      username: "@rodri_sans",
      date: "Apr 3, 2024",
      content:
        "Companies struggle to manage remote teams effectively. That's why I want to develop solutions that help organizations build thriving remote work cultures to increase productivity and employee satisfaction.",
      channel: "default",
    },
    {
      img: TestimonialImg03,
      name: "Priscilla Du Preez",
      username: "@dupreez",
      date: "Mar 04, 2024",
      content:
        "Urban dwellers are craving green spaces and fresh produce, so why not offer them a monthly subscription service delivering seasonal gardening kits that make home gardening easy and accessible?",
      channel: "default",
    },
    {
      img: TestimonialImg04,
      name: "Stephanie Tuohy",
      username: "@stephii.tuohy",
      date: "Feb 3, 2024",
      content:
        "Long waits for therapy mean people don't get the support they need, which can be life-threatening. An AI-driven chatbot could offer immediate mental health help until they receive actual therapy.",
      channel: "default",
    },
    {
      img: TestimonialImg05,
      name: "Vinicius Wiesehofer",
      username: "@vinicius12",
      date: "Jan 15, 2024",
      content:
        "Pets need better food to have a long and healthy life, and with uniquely designed boxes, they get their natural supplements and wellness products tailored to them.",
      channel: "default",
    },
  ];

  return (
    <section className="relative before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:h-[120%] before:bg-gradient-to-b before:from-gray-100 bg-gradient-to-b from-[#F4F6F9] from-5% via-40% to-100% to-[#DCE6F5]">
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 translate-y-2/3"
        aria-hidden="true"
      >
        <div className="h-80 w-80 rounded-full bg-gradient-to-tr from-blue-500 to-gray-900 opacity-40 blur-[160px]" />
      </div>
      <div className="pt-4 md:pt-6">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="text-3xl font-bold text-[#1a2945] md:text-4xl"
              data-aos="fade-in"
              data-aos-delay="320"
            >
              Nothing Great is Built Alone.
            </h2>
            <p
              className="text-lg text-gray-700"
              data-aos="zoom-y-out"
              data-aos-delay="380"
            >
              Work on your own idea, or join other teams and be part of their
              project from day one
            </p>
          </div>
        </div>
        <div className="relative mx-auto flex max-w-[94rem] justify-center">
          <div
            className="absolute bottom-20 -z-10 -translate-x-36"
            aria-hidden="true"
          >
            <div className="h-80 w-80 rounded-full bg-gradient-to-tr from-blue-500 to-gray-900 opacity-30 blur-[160px]" />
          </div>
          <div className="absolute -bottom-10 -z-10" aria-hidden="true">
            <div className="h-80 w-80 rounded-full bg-blue-500 opacity-40 blur-[160px]" />
          </div>
          <div className="absolute bottom-0 -z-10" aria-hidden="true">
            <div className="h-56 w-56 rounded-full border-[20px] border-white blur-[20px]" />
          </div>
          {/* Row */}
          <div className="group inline-flex w-full flex-nowrap py-12 [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)] md:py-20">
            <div className="flex animate-[infinite-scroll_60s_linear_infinite] items-start justify-center group-hover:[animation-play-state:paused] md:justify-start [&>*]:mx-3">
              {/* Items */}
              {testimonials.map((testimonial, index) => (
                <Testimonial
                  key={index}
                  testimonial={testimonial}
                  className="w-[22rem] transition-transform duration-300 group-hover:rotate-0"
                >
                  {testimonial.content}
                </Testimonial>
              ))}
            </div>
            {/* Duplicated element for infinite scroll */}
            <div
              className="flex animate-[infinite-scroll_60s_linear_infinite] items-start justify-center group-hover:[animation-play-state:paused] md:justify-start [&>*]:mx-3"
              aria-hidden="true"
            >
              {/* Items */}
              {testimonials.map((testimonial, index) => (
                <Testimonial
                  key={index}
                  testimonial={testimonial}
                  cloned={true}
                  className="w-[22rem] transition-transform duration-300 group-hover:rotate-0"
                >
                  {testimonial.content}
                </Testimonial>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
