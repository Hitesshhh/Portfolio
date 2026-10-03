
const Skills = () => {
  const skills = [
    {
      title: "Web development",
      description:
        "Websites and web apps that load fast and work everywhere.",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      featured: true,
      wide: true,
    },
    {
      title: "Backend",
      description:
        "The server side that keeps your data and logic running.",
      skills: ["Node.js", "Express", "MongoDB", "REST APIs"],
      wide: true,
    },
    {
      title: "Mobile apps",
      description: "One codebase for Android and iOS.",
      skills: ["React Native"],
    },
    {
      title: "UI design",
      description: "Screens designed before they're built.",
      skills: ["Figma", "Prototyping"],
    },
    {
      title: "AI",
      description: "Smart features that save you time.",
      skills: ["AI tools", "Chatbots", "Automation"],
      featured: true
    },
    {
      title: "Shipping",
      description: "Getting it live and keeping it healthy.",
      skills: [
        "Deployment",
        "Debugging",
        "Bug fixes",
        "Client communication",
      ],
      featured: true,
      wide: true,
    },
    {
      title: "Beyond code",
      description:
        "The habits that make projects go smoothly.",
      skills: [
        "Content creation",
        "Clear updates",
        "Fast learner",
        "Ownership",
      ],
      wide: true,
    },
  ];

  return (
    <section
      id="skills"
      className="px-5 py-16 md:px-8 lg:py-24"
    >

        <div className="mx-auto max-w-7xl">
      {/* Heading */}
      <h2 className="
            max-w-[16ch]
            text-6xl
            font-extrabold
            text-[clamp(34px,5vw,58px)]
            tracking-tighter
            text-brand-black">
        The tools I{" "}
        <span className="highlighted-text">work with.</span>
      </h2>

      <p className="mb-11 max-w-[52ch] text-lg text-brand-black">
        Everything you need for a product, from the first screen to the live
        launch.
      </p>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-6">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className={`
              rounded-[14px] border-3 p-6
              ${
                skill.wide
                  ? "md:col-span-3"
                  : "md:col-span-2"
              }
              ${
                skill.featured
                  ? "border-highlight bg-highlight text-beige-extra-light"
                  : "border-highlight text-highlight"
              }
            `}
          >
            <h3 className="mb-1 text-2xl font-extrabold tracking-tighter ">
              {skill.title}
            </h3>

            <p
              className={`
                mb-4 text-[15px] leading-[1.4]
                ${
                  skill.featured
                    ? "text-beige-extra-light"
                    : "text-brand-black"
                }
              `}
            >
              {skill.description}
            </p>

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-2">
              {skill.skills.map((item) => (
                <span
                  key={item}
                  className={`
                    rounded-sm px-3 py-1
                    text-sm font-medium
                    ${
                      skill.featured
                        ? " bg-beige-extra-light text-highlight"
                        : " bg-highlight text-beige-extra-light"
                    }
                  `}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Skills;