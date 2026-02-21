import { useRef, useState, ChangeEvent, FormEvent, Suspense } from 'react';
import emailjs from '@emailjs/browser';
import { Canvas } from "@react-three/fiber";
import { Fox } from '../Models/Fox';

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [loading, setLoading] = useState(false);
    
    // Track animation state to pass to the Fox component
    const [currentAnimation, setCurrentAnimation] = useState('idle');

    // Triggered when user interacts with input fields
    const handelFocus = () => setCurrentAnimation('walk');
    const handelBlur = () => setCurrentAnimation('idle');

    const handelChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handelSubmit = (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setCurrentAnimation('hit'); // Fox runs while email is sending

        emailjs.send(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            {
                from_name: form.name,
                to_name: "Rakshit",
                from_email: form.email,
                to_email: "rakshitgoyal770@gmail.com",
                message: form.message,
            },
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        ).then(() => {
            setLoading(false);
            setCurrentAnimation('idle');
            alert('Thank you! I will get back to you soon. 🙌');
            setForm({ name: '', email: '', message: '' });
        }).catch((error) => {
            setLoading(false);
            setCurrentAnimation('idle');
            console.error(error);
        });
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center py-20 px-6 font-sans">
            <div className="flex flex-col md:flex-row items-center justify-center 
                            bg-slate-900/90 backdrop-blur-2xl border border-white/10 
                            rounded-[3rem] p-10 md:p-16 max-w-6xl w-full gap-16 
                            shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
                
                <div className="flex-1 w-full max-w-md text-left">
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-2 tracking-tighter">
                        Get in <span className="text-blue-400">Touch</span>
                    </h1>
                    <p className="text-slate-400 mb-10 text-lg">Have a project in mind? Let's talk.</p>
                    
                    <form ref={formRef} className="flex flex-col gap-6" onSubmit={handelSubmit}>
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400/80">Name</label>
                            <input 
                                type="text" name="name" required value={form.name}
                                onChange={handelChange} onFocus={handelFocus} onBlur={handelBlur}
                                className="bg-white/5 border border-white/10 p-4 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-slate-600" 
                                placeholder="Your Name" 
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400/80">Email</label>
                            <input 
                                type="email" name="email" required value={form.email}
                                onChange={handelChange} onFocus={handelFocus} onBlur={handelBlur}
                                className="bg-white/5 border border-white/10 p-4 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-slate-600" 
                                placeholder="email@example.com" 
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400/80">Message</label>
                            <textarea 
                                name="message" required rows={4} value={form.message}
                                onChange={handelChange} onFocus={handelFocus} onBlur={handelBlur}
                                className="bg-white/5 border border-white/10 p-4 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-slate-600 resize-none" 
                                placeholder="How Can I Help You?"
                            ></textarea>
                        </div>

                        <button 
                            type="submit" disabled={loading}
                            className="group flex items-center justify-center gap-3 bg-blue-600 text-white font-black py-5 rounded-2xl mt-4 
                                       hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300 active:scale-95 disabled:opacity-50"
                        >
                            {loading ? 'SENDING...' : 'SEND MESSAGE'}
                            <span className="text-xl transition-transform group-hover:translate-x-2">→</span>
                        </button>
                    </form>
                </div>

                {/* Right Side: The 3D Environment */}
                <div className="flex-1 w-full h-[350px] md:h-[550px]">
                    <Canvas
                      camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}
                    >
                        <directionalLight intensity={2.5} position={[0, 0, 1]} />
                        <ambientLight intensity={0.5} />
                        <Suspense fallback={null}>
                            <Fox 
                                currentAnimation={currentAnimation}
                                position={[0.5, 0.35, 0]}
                                rotation={[12.6, -0.6, 0]}
                                scale={[0.5, 0.5, 0.5]}
                            />
                        </Suspense>
                    </Canvas>
                </div>
            </div>
        </section>
    );
}