const Projects = () => {
  const projects = [
    {
      type: "Client website",
      title: "Project name",
      description:
        "One line on what the client needed and what changed after launch, for example more enquiries or faster load times.",
      stack: ["React", "Node.js", "MongoDB", "Figma"],
      href: "#",
      variant: "big",
      gradient: "from-[#1d3557] to-[#457b9d]",
    },
    {
      type: "Mobile app",
      title: "Project name",
      description: "What the app does and who uses it.",
      stack: ["React Native", "Firebase"],
      href: "#",
      variant: "red",
      gradient: "from-[#c1121f] to-[#7d0a14]",
    },
    {
      type: "AI tool",
      title: "Project name",
      description: "The problem it solves, in one sentence.",
      stack: ["OpenAI API", "React"],
      href: "#",
      variant: "red",
      gradient: "from-[#c1121f] to-[#7d0a14]",
    },
    {
      type: "Custom software",
      title: "Project name",
      description: "What you built and the result.",
      stack: ["MERN", "Dashboard"],
      href: "#",
      variant: "red",
      gradient: "from-[#c1121f] to-[#7d0a14]",
    },
    {
      type: "Bug fixes & upgrades",
      title: "Project name",
      description: "What was broken and how you fixed it.",
      stack: ["Debugging", "Performance"],
      href: "#",
      variant: "red",
      gradient: "from-[#c1121f] to-[#7d0a14]",
    },
  ];

  return (
    <section
      id="work"
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
          Things I've{" "}
          <span className="highlighted-text font-bold">
            built and shipped.
          </span>
        </h2>

        <p
          className="
           mb-11 max-w-[52ch] text-lg text-brand-black
          "
        >
          A few recent client projects, from first design to live launch.
        </p>

        {/* Projects */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-6">
          {projects.map((project) => (
            <a
              key={project.title + project.type}
              href={project.href}
              className={`
                rounded-lg
                border-3
                border-highlight
                p-4
                ${
                  project.variant === "big"
                    ? "lg:col-span-4 lg:flex lg:flex-row lg:items-stretch lg:gap-5 bg-highlight"
                    : "lg:col-span-2"
                }
              `}
            >
              {/* Project Preview */}
              <div
                className={`
                  relative
                  aspect-16/10
                  overflow-hidden
                  rounded-[10px]
                  
                  ${project.gradient}
                  p-3
                  ${
                    project.variant === "big"
                      ? "lg:flex-[1_1_55%]"
                      : "w-full bg-linear-to-br"
                  }
                `}
              >
                {/* Fake browser window */}
                <div
                  className="
                    grid
                    h-full
                    content-start
                    gap-2
                    rounded-lg
                    bg-white/94
                    p-2.5
                  "
                >
                  <i className="block h-2 w-[35%] rounded-full bg-highlight" />

                  <i className="block h-4 w-[80%] rounded-full bg-[#e9dcc6]" />

                  <i className="block h-2 w-[60%] rounded-full bg-[#e9dcc6]" />

                  <b className="mt-1 block min-h-8 h-[34%] rounded-md bg-[#f1e3cc]" />
                </div>
              </div>

              {/* Project Info */}
              <div
                className={`
                  flex
                  flex-col
                  justify-center
                  gap-2
                  px-2
                  pb-2
                  pt-4
                  ${
                    project.variant === "big"
                      ? "lg:flex-[1_1_45%] lg:pt-4"
                      : ""
                  }
                `}
              >
                <span className={`text-lg -mb-1 font-bold  ${project.variant == "big" ? 'highlighted-beige-text' : 'highlighted-text'}`}>
                  {project.type}
                </span>

                <h3
                  className={`
                    text-[26px]
                    font-extrabold
                    leading-[1.1]
                    tracking-tight
                    ${project.variant == "big" ? 'text-white' : 'text-brand-black'}
                  `}
                >
                  {project.title}
                </h3>

                <p
                  className={`
                    text-base
                    font-medium
                    leading-5
                    ${project.variant == "big" ? 'text-white' : 'text-brand-black'}
                  `}
                >
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.stack.map((technology) => (
                    <span
                      key={technology}
                      className={`
                        rounded-md
                        border-2
                        
                        px-4
                        py-1
                        text-[13px]
                        font-bold
                          ${project.variant == "big" ? 'text-highlight border-beige-extra-light bg-beige-extra-light' : 'text-beige-extra-light border-highlight bg-highlight'}
                      `}
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* More Projects */}
        <div className="mt-8">
          <a
            className="
              inline-block
              rounded-lg
              border-3
              border-highlight
              px-8
              py-4
              text-xl
              font-bold
              bg-highlight
              text-beige-extra-light
              tracking-tight
            "
          >
            See all projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;