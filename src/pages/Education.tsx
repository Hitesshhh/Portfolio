
const Education = () => {
  const journey = [
    {
      title: "Chose tech over the CA path",
      description:
        "Saw that the CA route was financially out of reach and decided to build a skill I could start on my own.",
    },
    {
      title: "Web development",
      description:
        "Learned to build websites and then full web apps with the MERN stack.",
    },
    {
      title: "Mobile apps and design",
      description:
        "Added React Native for apps and Figma so I could design what I build.",
    },
    {
      title: "Real client work",
      description:
        "Built websites, worked on software and fixed bugs for 10+ clients.",
    },
    {
      title: "Software Developer Job For 2 Years",
      description:
        "Built websites, worked on software and fixed bugs as a software ddeveloper or Ai Engineer.",
    },
    {
      title: "Now: developer and AI engineer",
      description:
        "Working as a software developer, adding AI to what I make, and sharing tips with other learners on Instagram.",
      current: true,
    },
  ];

  return (
    <>
      <section
        id="education"
        className="px-5 py-16 md:px-8 lg:py-24"
      >
        <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="
            max-w-[16ch]
            text-6xl
            font-extrabold
            text-[clamp(34px,5vw,58px)]
            tracking-tighter
            text-brand-black">
          Learned in class,{" "}
          <span className="highlighted-text">
            and by building.
          </span>
        </h2>

        <p className="mb-11 max-w-[52ch] text-lg text-brand-black">
          I started in commerce and taught myself tech. Here's how I got here.
        </p>

        {/* Education + Timeline */}
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] md:gap-14">
          {/* Degree Card */}
          <div className="flex flex-col gap-5">
          <div className="rounded-lg border-2 border-highlight p-8 text-white">
            <small className="text-sm text-brand-black opacity-75">
              Formal education
            </small>

            <h3 className="mt-2 text-[clamp(34px,4.4vw,52px)] font-extrabold leading-none tracking-tighter text-brand-black">
              B.Com{" "}
              <span className="font-serif italic text-highlight">
                Commerce
              </span>
            </h3>

            <div className="mt-2 text-lg opacity-90 text-brand-black font-medium pb-5">
              Your college name, University name · Year
            </div>

            <p className="border-t   border-highlight pt-5 text-lg leading-[1.55] font-medium text-brand-black tracking-tight">
              Commerce gave me a feel for how businesses think about money,
              customers and results. I use that when I plan a product so it
              helps the business, not just looks good.
            </p>
          </div>

          <div className="rounded-lg border-2 border-highlight p-8 bg-highlight">
            <small className="text-sm text-beige-extra-light opacity-75">
              Master's Education
            </small>

            <h3 className="mt-2 text-[clamp(34px,4.4vw,52px)] font-extrabold leading-none tracking-tighter text-beige-extra-light">
              MCA
            </h3>

            <div className="mt-2 text-lg opacity-90 text-beige-extra-light font-medium pb-5">
              Your college name, University name · Year
            </div>

            <p className="border-t   border-beige-extra-light pt-5 text-lg leading-[1.55] font-medium text-beige-extra-light tracking-tight">
              Commerce gave me a feel for how businesses think about money,
              customers and results. I use that when I plan a product so it
              helps the business, not just looks good.
            </p>
          </div>
          </div>

          {/* Self-Taught Journey */}
          <div>
            <h3 className="mb-5 text-3xl font-extrabold tracking-tighter">
              Self-taught journey
            </h3>

            <ul className="relative m-0 grid list-none gap-8 p-0">
              {/* Timeline Line */}
              <span className="absolute bottom-2 left-3 top-2 w-0.5 rounded-full bg-highlight!" />

              {journey.map((item) => (
                <li
                  key={item.title}
                  className="relative pl-10"
                >
                  {/* Timeline Dot */}
                  <span
                    className={`
                      absolute left-0.75 top-2
                      h-5 w-5 rounded-full
                      border-4 border-highlight
                      ${
                        item.current
                          ? "bg-highlight"
                          : "bg-beige-extra-light"
                      }
                    `}
                  />

                  <h4 className={`mb-1 text-2xl font-bold tracking-tighter highlighted-text ${item.current ? "text-highlight!" : "text-brand-black!"}`}>
                    {item.title}
                  </h4>

                  <p className="text-base leading-normal text-brand-black">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        </div>
      </section>

      {/* Bottom Note */}
      <p className="mx-auto my-12 max-w-7xl px-5 text-center text-[clamp(26px,3.6vw,40px)] leading-[1.15] highlighted-text">
        Still learning, every single week.
      </p>
    </>
  );
};

export default Education;