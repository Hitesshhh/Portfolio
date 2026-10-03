

const Services = () => {
  const services = [
    {
      title: "Design",
      type: "filled",
      description:
        "Interfaces that look good and are easy to use, designed in Figma and approved by you before development starts.",
      items: [
        "Website and app screens",
        "Clean, modern layouts",
        "Matches your brand",
      ],
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 " fill="#c1121f">
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18z" />
        </svg>
      ),
    },
    {
      title: "Development",
      type: "outline",
      description:
        "Fast, reliable websites, web apps and mobile apps built with React, the MERN stack and React Native.",
      items: [
        "Business and portfolio websites",
        "Custom web software and dashboards",
        "iOS and Android apps",
      ],
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#fdf0d5">
          <path d="M16 18l6-6-6-6" />
          <path d="M8 6l-6 6 6 6" />
        </svg>
      ),
    },
    {
      title: "AI Automations & features",
      type: "outline",
      description:
        "Practical AI features that save you time, added to your product or built as a tool of their own.",
      items: [
        "Chatbots and assistants",
        "Automations for repeated work",
        "AI tools for your business",
      ],
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#fdf0d5">
          <rect x="4" y="4" width="16" height="16" rx="3" />
          <path d="M9 9h.01M15 9h.01M9 15h6" />
        </svg>
      ),
    },
    {
      title: "Deployment",
      type: "filled",
      description:
        "I put your project live, test it and fix what breaks, so you launch without technical headaches.",
      items: [
        "Hosting and domain setup",
        "Bug fixes and upgrades",
        "Handover so you're not left guessing",
      ],
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#c1121f">
          <path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2a2.2 2.2 0 0 0-3-3z" />
          <path d="M12 15l-3-3a22 22 0 0 1 2-4 12 12 0 0 1 11-6c0 3-1 8-6 11a22 22 0 0 1-4 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="px-5 py-16 md:px-8 lg:py-24">

        <div className="mx-auto max-w-7xl">
      {/* Heading */}
      <h2 className="
            max-w-[16ch]
            text-6xl
            font-extrabold
            text-[clamp(34px,5vw,58px)]
            tracking-tighter
            text-brand-black">
        What I can <span className="highlighted-text">build for you.</span>
      </h2>

      <p className="mb-11 max-w-[52ch] text-lg text-brand-black">
        Four things, done by one person, so you don't have to manage a team.
      </p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.title}
            className={`flex flex-col gap-3 rounded-lg border-3 p-5 border-highlight ${service.type == "filled" ? "bg-highlight" : ""}`}
          >
            {/* Icon */}
            <div className={`grid h-13 w-13 place-items-center rounded-lg ${service.type == "filled" ? "bg-beige-extra-light" : "bg-highlight"}`}>
              {service.icon}
            </div>

            {/* Title */}
            <h3 className={`mt-1.5 text-[30px] font-extrabold tracking-[-0.03em] ${service.type == "filled" ? "text-beige-extra-light" : "text-highlight"}`} >
              {service.title}
            </h3>

            {/* Description */}
            <p className={`max-w-[46ch] text-lg leading-6 tracking-tight font-medium ${service.type == "filled" ? "text-beige-extra-light!" : "text-brand-black!"}`}>
              {service.description}
            </p>

            {/* List */}
            <ul className="mt-1 grid gap-2 p-0">
              {service.items.map((item) => (
                <li
                  key={item}
                  className={`relative pl-5 text-base font-medium ${service.type == "filled" ? "text-beige-extra-light!" : "text-brand-black!"}`}
                >
                  <span className={` absolute left-0 top-[0.5em] h-2 w-2 rounded-full ${service.type == "filled" ? "bg-beige-extra-light!" : "bg-highlight!"}`} />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      {/* Full Package */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-6 rounded-lg bg-highlight px-6 py-7 text-white md:px-9 md:py-10">
        <div>
          <h3 className="max-w-[22ch] text-[clamp(26px,3.6vw,40px)] font-extrabold leading-[1.08] tracking-tighter text-beige-extra-light">
            Want it all? Get the{" "}
            <em className="highlighted-text text-beige-extra-light! font-bold">full package</em> design,
            develop, deploy.
          </h3>

          <p className="mt-2 max-w-[44ch] text-xl font-medium leading-[1.45] tracking-tight text-beige-extra-light opacity-90">
            One person from the first sketch to the live launch, so nothing gets
            lost in a handoff.
          </p>
        </div>

        <a
          href="#contact"
          className="inline-block rounded-lg  bg-beige-extra-light px-8 py-3.5 text-2xl font-bold highlighted-text text-highlight transition hover:bg-transparent hover:text-white"
        >
          Start a project
        </a>
      </div>
      </div>
    </section>
  );
};

export default Services;
