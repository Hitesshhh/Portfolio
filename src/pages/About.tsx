import profile from '@/assets/images/profile_image.jpeg'

const About = () => {
  const skills = [
    "React & MERN",
    "React Native",
    "Figma",
    "AI tools",
  ];

  const process = [
    {
      title: "Design",
      description:
        "Clean Figma screens you approve before a single line of code is written.",
    },
    {
      title: "Build",
      description:
        "Fast, working software on the MERN stack or React Native, with AI where it helps.",
    },
    {
      title: "Deploy",
      description:
        "Live, tested and handed over with the bugs already fixed.",
    },
  ];

  return (
    <section
      id="about"
      className=" px-5 py-16 md:px-8 lg:py-24 relative"
    >
      <div className="mx-auto max-w-7xl">
        {/* Main About */}
        <div className="grid items-center gap-14 lg:grid-cols-[5fr_6fr] lg:gap-16">
          
          {/* Image */}
          <div className="relative mx-auto w-full max-w-105 lg:max-w-none">
            <div
              className="
                relative aspect-[1/1.3]
                overflow-visible
                rounded-lg
              "
            >
              {/* Replace with your image */}
              
              <img
                src={profile}
                alt="Hitesh Mujwani"
                className="absolute inset-0 h-full w-full rounded-[14px] object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2
              className="
                mb-4
                font-extrabold
                leading-[1.02]
                tracking-tighter
                text-brand-black
                text-6xl
              "
            >
              From a B.Com degree to shipping products for{" "}
              <span className="highlighted-text text-6xl">
                10+ clients.
              </span>
            </h2>

            <p
              className="
                mb-4
                text-xl
                leading-[1.55]
                text-brand-black
                tracking-tight
                font-medium
              "
            >
              I studied commerce, then saw the CA route wasn't mine. So I{" "}
              <strong className="highlighted-text text-2xl">
                taught myself to build
              </strong>
              : web apps with the MERN stack, mobile apps with React Native,
              interfaces in Figma, and AI features on top.
            </p>

            <p
              className="
                mb-4
                text-xl
                leading-[1.55]
                text-brand-black
                tracking-tight
                font-medium
              "
            >
              Today I work as a software developer and take on client projects
              alongside it: websites, custom software and bug fixes. You talk
              to{" "}
              <strong className="highlighted-text text-2xl">
                one person
              </strong>{" "}
              from the first sketch to the live launch, so nothing gets lost
              in a handoff.
            </p>

            {/* Stats */}
            <div
              className="
                my-5
                flex flex-wrap
                border-2 border-highlight
              "
            >
              <div className='flex-1 border-r-2 border-highlight p-4'>
                <strong className="block text-[36px] font-extrabold leading-none tracking-[-0.04em] md:text-[44px]">
                  3+
                </strong>
                <span className="text-xl font-bold highlighted-text">
                  years in tech
                </span>
              </div>

              <div className='flex-1 p-4 border-r-2 border-highlight'>
                <strong className="block text-[36px] font-extrabold leading-none tracking-[-0.04em] md:text-[44px]">
                  10+
                </strong>
                <span className="text-xl font-bold highlighted-text">
                  clients served
                </span>
              </div>

              <div className='flex-1 p-4 border-r-2 border-highlight'>
                <strong className="block text-[36px] font-extrabold leading-none tracking-[-0.04em] md:text-[44px]">
                  1
                </strong>
                <span className="text-xl font-bold highlighted-text">
                  person to talk to
                </span>
              </div>

              <div className='flex-1 p-4'>
                <strong className="block text-[36px] font-extrabold leading-none tracking-[-0.04em] md:text-[44px]">
                  20+
                </strong>
                <span className="text-xl font-bold highlighted-text">
                  Projects Shipped
                </span>
              </div>
            </div>

            {/* Skills */}
            <ul className="mb-6 flex flex-wrap gap-2 p-0">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="
                    list-none
                    rounded-lg
                    bg-highlight
                    px-4
                    py-2
                    text-[15px]
                    font-bold
                    text-beige-extra-light
                  "
                >
                  {skill}
                </li>
              ))}
            </ul>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="
                  rounded-lg
                  bg-highlight
                  px-8 py-3
                  text-xl
                  font-bold
                  highlighted-beige-text
                  flex justify-center items-center
                "
              >
                Let's Talk
              </a>

              <a
                href="#work"
                className="
                  rounded-lg
                  bg-beige-extra-light
                  border-2 border-highlight
                  px-8 py-3
                  text-xl
                  font-bold
                  highlighted-text
                  flex justify-center items-center
                "
              >
                See my work
              </a>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="mt-20 grid gap-5 lg:mt-21 lg:grid-cols-3">
          {process.map((item) => (
            <div
              key={item.title}
              className="
                relative
                rounded-[14px]
                border-[1.5px]
                bg-highlight
                p-6
              "
            >
              <h3 className="mb-2 text-[26px] font-bold tracking-[-0.02em] text-beige-extra-light">
                {item.title}
              </h3>

              <p className="text-xl font-bold highlighted-beige-text">
                {item.description}
              </p>

              {/* Arrow between cards */}
              {/* {index < process.length - 1 && (
                <span
                  className="
                    absolute
                    -right-[14px]
                    top-1/2
                    hidden
                    h-[10px]
                    w-[10px]
                    -translate-y-1/2
                    rotate-45
                    border-r-[3px]
                    border-t-[3px]
                    border-[var(--red)]
                    lg:block
                  "
                />
              )} */}
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <p
          className="
            mt-5
            text-center
            text-2xl
            md:text-4xl
            highlighted-text
            font-bold
          "
        >
          No team needed. Just someone who gets it done.
        </p>
      </div>
    </section>
  );
};

export default About;