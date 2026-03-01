import { Link } from "react-router-dom";

const projects = [
  {
    title: "XooDrip",
    subtitle: "Official Website for XooDrip (Service-Based Company)",
    description:
      "Developed a production-grade static website using Next.js with strong focus on SEO optimization, performance, and structured metadata. Implemented static generation, optimized images, clean semantic markup, and advanced frontend architecture for scalable deployment.",
    tech: ["Next.js", "Static Generation", "SEO", "Performance Optimization"],
    live: "https://xoodrip.com/",
  },
  {
    title: "GrowIn Bharat",
    subtitle: "Full-Stack Social & Admin Platform",
    description:
      "Contributed to both frontend and backend development of a fully responsive social platform. Built using Next.js, MongoDB, and JWT authentication. Implemented admin dashboard, user management, messaging system, feed updates, and role-based access control.",
    tech: ["Next.js", "MongoDB", "JWT", "Admin Dashboard", "Messaging System"],
    live: "https://www.growinbharat.com/",
  },
];

export default function Project() {
  return (
    <section className="max-w-6xl mx-auto sm:p-16 pb-32 !pt-[126px] px-8 font-sans bg-white">

      {/* HEADER */}
      <div className="mb-24">
        <h1 className="text-6xl md:text-7xl font-extrabold text-slate-900 leading-tight">
          Selected <span className="bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent drop-shadow-sm">Work.</span>
        </h1>

        <p className="mt-6 text-slate-600 text-lg max-w-xl leading-relaxed">
          Real-world production projects demonstrating scalable frontend
          systems, full-stack architecture, and SEO-focused engineering.
        </p>
      </div>

      {/* PROJECTS */}
      <div className="flex flex-col gap-24">

        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-slate-200 rounded-[2.5rem] p-14 bg-white hover:shadow-xl transition-all duration-500"
          >
            <div className="flex flex-col gap-6">

              {/* Title */}
              <div>
                <h2 className="text-4xl font-black text-slate-900">
                  {project.title}
                </h2>
                <p className="text-sm uppercase tracking-widest text-slate-400 mt-2">
                  {project.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-slate-600 leading-relaxed max-w-3xl">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 pt-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-bold px-4 py-2 bg-slate-100 border border-slate-200 rounded-full text-slate-600 uppercase tracking-widest"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Link */}
              <div className="pt-6">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Visit Website →
                </a>
              </div>

            </div>
          </div>
        ))}

      </div>

      {/* BACK BUTTON */}
      <div className="mt-24 text-center">
        <Link
          to="/"
          className="text-slate-500 hover:text-slate-900 font-semibold transition-colors"
        >
          ← Back to Home
        </Link>
      </div>

    </section>
  );
}