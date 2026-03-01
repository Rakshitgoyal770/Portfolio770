import {skills} from "../Constants/index"

export default function About() {
    return (
    <>
        <section className="max-w-6xl mx-auto sm:p-16 pb-12 !pt-[126px] px-8 font-sans overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                
                {/* LEFT SIDE: Text Content */}
                <div className="flex-1 flex flex-col gap-3">
                    <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight tracking-tight">
                        Hello, I'm <span className="bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent drop-shadow-sm">Rakshit</span> 👋
                    </h1>

                    <div className="mt-5 flex flex-col gap-3 text-slate-500 font-normal text-lg leading-relaxed max-w-xl">
                        <p>
                            A Software Engineer based in India, passionate about crafting z
                            highly interactive, 3D-integrated web applications that push 
                            the boundaries of modern user experience.
                        </p>
                    </div>

                    <div className="mt-8 flex items-center gap-5">
                        <button className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-semibold hover:bg-slate-800 transition-all active:scale-95 shadow-lg shadow-slate-200">
                            View Resume
                        </button>
                        <button className="text-slate-600 font-semibold hover:text-blue-600 transition-colors">
                            My Work →
                        </button>
                    </div>
                </div>

                {/* RIGHT SIDE: Your Photo */}
                <div className="flex-1 flex justify-center lg:justify-end w-full">
                    <div className="relative group">
                        {/* Soft Glow effect behind photo */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-700"></div>
                        
                        {/* Image Container with Glassmorphism Border */}
                        <div className="relative w-full max-w-[350px] aspect-[3/4] bg-white p-3 rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100">
                            <img 
                                src="/My.jpg" // Put your uploaded photo in the public folder and link it here
                                alt="Rakshit Goyal"
                                className="w-full h-full object-cover rounded-[2.2rem] grayscale-[20%] hover:grayscale-0 transition-all duration-700 ease-in-out"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Bio Card */}
            <div className="mt-28">
                <div className="flex items-center gap-4 mb-8">
                    <h3 className="text-xl font-bold uppercase tracking-widest text-slate-400">My Background</h3>
                    <div className="h-[1px] flex-1 bg-slate-100"></div>
                </div>
                
                <div className="bg-white/40 backdrop-blur-xl border border-slate-100/80 rounded-[3rem] p-10 md:p-14 shadow-sm">
                    <p className="text-slate-500 font-normal text-xl leading-relaxed">
                        I specialize in bridging the gap between design and complex logic. 
                        Whether it's bringing 3D models like the <span className="text-blue-500 font-semibold">Running Fox</span> 
                        to life using Three.js or architecting scalable React components, 
                        my goal is to build digital products that are both functional 
                        and visually captivating.
                    </p>
                </div>
            </div>

            <div className="mt-28">
        <div className="flex items-center gap-4 mb-14">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">
            Core Technical Stack
            </h3>
            <div className="h-[1px] flex-1 bg-slate-200"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-14 justify-items-center">

            {skills.map((skill) => (
            <div key={skill.name} className="group relative w-32 h-32">

                {/* Glow Background */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500"></div>

                {/* Glass Card */}
                <div className="relative w-full h-full rounded-3xl 
                                bg-white/40 
                                backdrop-blur-xl 
                                border border-white/40 
                                shadow-xl 
                                flex items-center justify-center
                                transition-all duration-500
                                group-hover:-translate-y-3
                                group-hover:shadow-2xl">

                {/* Gloss Reflection */}
                <div className="absolute top-0 left-0 w-full h-1/2 rounded-t-3xl bg-gradient-to-b from-white/60 to-transparent opacity-60 pointer-events-none"></div>

                {/* Icon */}
                <div className="relative w-14 h-14 flex items-center justify-center">
                    <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-full h-full object-contain drop-shadow-md transition-all duration-500 group-hover:scale-110"
                    />
                </div>
                </div>

                {/* Label */}
                <p className="mt-5 text-sm font-semibold text-center text-slate-600 group-hover:text-slate-900 transition-colors duration-300">
                {skill.name}
                </p>

            </div>
            ))}

        </div>
        </div>

        <section className="mt-36 py-28 px-8 max-w-5xl mx-auto text-center relative">

  {/* Soft Background Glow */}
  <div className="absolute inset-0 flex justify-center -z-10">
    <div className="w-[600px] h-[300px] bg-blue-400/10 blur-3xl rounded-full"></div>
  </div>

  {/* Availability Badge */}
  <div className="inline-block mb-8 px-6 py-2 bg-slate-100 border border-slate-200 rounded-full text-xs font-bold tracking-[0.25em] text-slate-500 uppercase">
    Available for Internships
  </div>

  {/* Heading */}
  <h2 className="text-5xl md:text-7xl font-black mb-10 leading-tight text-slate-900">
    Let’s build <br />
    <span className="bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent italic">
      together.
    </span>
  </h2>

  {/* Description */}
  <p className="text-slate-500 mb-14 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
    Currently seeking Software Engineering opportunities for the 2026–27
    placement season. Based in India and open to impactful collaborations.
  </p>

  {/* Buttons */}
  <div className="flex flex-col md:flex-row items-center justify-center gap-6">
    <a
      href="mailto:rakshitgoyal770@gmail.com"
      className="bg-slate-900 text-white px-10 py-5 rounded-full font-bold hover:bg-slate-800 transition-all text-xs w-full md:w-auto text-center"
    >
      EMAIL ME
    </a>

    <a
      href="https://www.linkedin.com/in/rakshit-goyal-483798301"
      target="_blank"
      className="px-10 py-5 rounded-full font-bold border border-slate-300 hover:bg-slate-100 transition-all text-xs w-full md:w-auto text-center"
    >
      LINKEDIN
    </a>

    <a
      href="https://github.com/Rakshitgoyal770"
      target="_blank"
      className="px-10 py-5 rounded-full font-bold border border-slate-300 hover:bg-slate-100 transition-all text-xs w-full md:w-auto text-center"
    >
      GITHUB
    </a>
  </div>

</section>

        </section>
        </>
    );
}