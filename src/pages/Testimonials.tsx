const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Replace this with your best client quote. Something about how you delivered the whole thing on your own and on time.",
      name: "Client name",
      role: "Business, project type",
      initial: "C",
      featured: true,
    },
    {
      quote:
        "A shorter quote about communication, speed or how easy you were to work with.",
      name: "Client name",
      role: "Business, project type",
      initial: "C",
      featured: false,
    },
    {
      quote:
        "A quote about the result, like better looks, fewer bugs or more customers.",
      name: "Client name",
      role: "Business, project type",
      initial: "C",
      featured: false,
    },
  ];

  return (
    <section
      id="testimonials"
      className="px-5 py-16 md:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <h2
          className="
            max-w-[16ch]
            text-6xl
            font-extrabold
            text-[clamp(34px,5vw,58px)]
            tracking-tighter
            text-brand-black
          "
        >
          What clients{" "}
          <span className="highlighted-text font-bold">
            say about working with me.
          </span>
        </h2>

        <p
          className="
            mb-11 max-w-[52ch] text-lg text-brand-black
          "
        >
          Short, honest words from people I've built for.
        </p>

        {/* Testimonials */}
        <div className="grid gap-5 lg:grid-cols-[1.25fr_1fr]">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.quote}
              className={`
                relative
                flex
                flex-col
                justify-between
                rounded-[14px]
                border-3
                gap-5
                p-8
                border-highlight
                ${
                  testimonial.featured
                    ? `
                      min-h-90
                      bg-highlight
                      text-beige-extra-light
                      lg:row-span-2
                    `
                    : `
                      text-highlight
                    `
                }
              `}
            >
              {/* Quote */}
              <blockquote
                className={`
                  font-serif
                  font-semibold
                  italic
                  leading-[1.35]
                  tracking-[-0.01em]
                  ${
                    testimonial.featured
                      ? "text-[clamp(26px,3.2vw,36px)] leading-[1.2]"
                      : "text-[22px]"
                  }
                `}
              >
                {testimonial.featured && (
                  <span
                    aria-hidden="true"
                    className="
                      block

                      highlighted-beige-text
                      text-[110px]
                      font-bold
                      italic
                      leading-[0.6]!
                      opacity-40
                    "
                  >
                    “
                  </span>
                )}

                {testimonial.quote}
              </blockquote>

              {/* Client */}
              <figcaption className="flex items-center gap-3 text-[15px] leading-[1.3]">
                <div
                  className={`
                    grid
                    h-11
                    w-11
                    shrink-0
                    place-items-center
                    rounded-lg
                    font-extrabold
                    ${
                      testimonial.featured
                        ? "bg-beige-extra-light text-highlight"
                        : "bg-highlight text-beige-extra-light"
                    }
                  `}
                >
                  {testimonial.initial}
                </div>

                <div>
                  <b className="block font-bold">
                    {testimonial.name}
                  </b>

                  <span
                    className={
                      testimonial.featured
                        ? "opacity-75"
                        : "text-highlight"
                    }
                  >
                    {testimonial.role}
                  </span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;