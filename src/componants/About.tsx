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
                            A Software Engineer based in India, passionate about crafting 
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

            <div className="mt-16 flex flex-wrap gap-12 justify-center lg:justify-start">
                {skills.map((skill) => (
                    <div className="block-container w-24 h-24" key={skill.name}>
                        {/* The Depth Layer (Shadow) */}
                        <div className={`btn-back rounded-xl bg-slate-200 shadow-lg`} />
                        
                        {/* The Interactive Front Layer */}
                        <div className="btn-front rounded-xl flex items-center justify-center shadow-sm cursor-pointer group">
                            <img 
                                src={skill.imageUrl}
                                alt={skill.name}
                                className="w-1/2 h-1/2 object-contain group-hover:scale-110 transition-transform"
                            />
                        </div>
                    </div>
                ))}
            </div>

        </section>
        </>
    );
}