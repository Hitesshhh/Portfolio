import { useState } from "react";

const Contact = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [message, setMessage] = useState("");

  const services :any = [
    "Design",
    "Website",
    "Mobile app",
    "AI tool",
    "Full package",
    "Bug fix",
  ];

  const toggleService = (service:any) => {
    setSelectedServices((prev:any) =>
      prev.includes(service)
        ? prev.filter((item:any) => item !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = () => {
    const picks =
      selectedServices.length > 0
        ? selectedServices.join(", ")
        : "a project";

    const body = encodeURIComponent(
      `Hi Hitesh,\n\nI need: ${picks}\n\n${message}`
    );

    const subject = encodeURIComponent(`Project enquiry: ${picks}`);

    window.location.href = `mailto:you@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="px-5 py-16 md:px-8 lg:py-24"
    >
      <div className="grid grid-cols-1 items-start gap-9 md:grid-cols-2 md:gap-14 max-w-7xl mx-auto">
        {/* ================= LEFT SIDE ================= */}
        <div>
          <h2 className="
            max-w-[16ch]
            text-6xl
            font-extrabold
            text-[clamp(34px,5vw,58px)]
            tracking-tighter
            text-brand-black">
            Have a project?{" "}
            <span className="highlighted-text">Let's talk.</span>
          </h2>

          <p className="mb-11 max-w-[52ch] text-lg text-brand-black">
            Tell me what you need and I'll get back to you with the next
            steps. No pressure, no big sales pitch.
          </p>

          {/* Contact Methods */}
          <div className="grid gap-3">
            {/* WhatsApp */}
            <a
              href="https://wa.me/910000000000"
              className="group flex items-center gap-3.5 rounded-[14px] border-3 border-highlight px-3 py-2 bg-highlight"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-[10px] bg-beige-extra-light text-highlight">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6 fill-none stroke-current stroke-2"
                >
                  <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20.500l1.700-5.400A8.400 8.400 0 1 1 21 11.500z" />
                </svg>
              </div>

              <div>
                <b className="block text-lg font-bold text-beige-extra-light">WhatsApp</b>
                <span className="text-sm text-beige-extra-light">
                  Fastest way to reach me
                </span>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:you@example.com"
              className="group flex items-center gap-3.5 rounded-[14px] border-3 border-highlight px-3 py-2 bg-highlight"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-[10px] bg-beige-extra-light text-highlight">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6 fill-none stroke-current stroke-2"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
              </div>

              <div>
                <b className="block text-lg font-bold text-beige-extra-light">Email</b>
                <span className="text-sm text-beige-extra-light">
                  you@example.com
                </span>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3.5 rounded-[14px] border-3 border-highlight px-3 py-2 bg-highlight"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-[10px] bg-beige-extra-light text-highlight">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6 fill-none stroke-current stroke-2"
                >
                  <path d="M4 9v11M4 4.500v.01M9 20V9m0 4a4 4 0 0 1 8 0v7" />
                </svg>
              </div>

              <div>
                <b className="block text-lg font-bold text-beige-extra-light">LinkedIn</b>
                <span className="text-sm text-beige-extra-light">
                  For work enquiries
                </span>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3.5 rounded-[14px] border-3 border-highlight px-3 py-2 bg-highlight"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-[10px] bg-beige-extra-light text-highlight">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6 fill-none stroke-current stroke-2"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                  />
                  <circle cx="12" cy="12" r="4" />
                  <path d="M17.500 6.500h.01" />
                </svg>
              </div>

              <div>
                <b className="block text-lg font-bold text-beige-extra-light">Instagram</b>
                <span className="text-sm text-beige-extra-light">
                  Tech tips and free AI tools
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="rounded-lg border-3 bg-highlight border-highlight  p-6">
          <h3 className="mb-1.5 text-2xl font-extrabold tracking-tighter text-beige-extra-light">
            Quick project brief
          </h3>

          <p className="mb-4 text-lg leading-6 text-beige-extra-light">
            Pick what you need, add a line or two, and your email app opens
            with it filled in.
          </p>

          {/* Service Chips */}
          <div className="mb-5 flex flex-wrap gap-1">
            {services.map((service:any) => {;

              return (
                <button
                  key={service}
                  type="button"
                  onClick={() => toggleService(service)}
                  className={`rounded-lg border-3 border-highlight px-4 py-2 text-sm font-medium! transition bg-beige-extra-light text-highlight tracking-tight`}
                >
                  {service}
                </button>
              );
            })}
          </div>

          {/* Message */}
          <textarea
            aria-label="Project details"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="What are you building, and when do you need it?"
            className="mb-6 h-42 w-full resize-y rounded-lg border-[1.5px] bg-beige-extra-light px-3.5 py-3 text-base leading-[1.4]"
          />

          {/* Submit */}
          <button
            type="button"
            onClick={handleSubmit}
            className="rounded-lg bg-beige-extra-light px-5 py-2 highlighted-text text-xl font-bold "
          >
            Send my brief
          </button>

          <p className="mt-5 text-sm text-beige-extra-light font-medium">
            I reply as soon as I can, usually within a day.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;