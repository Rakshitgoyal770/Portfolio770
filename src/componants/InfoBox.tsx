import { useEffect, useState } from "react";

interface HomeInfoInterface {
    text: string;
    link: string;
    btnTxt: string;
}

export default function InfoBox({ text, link, btnTxt }: HomeInfoInterface) {
    const [isShowing, setIsShowing] = useState(false);

    useEffect(() => {
        // Delay the entry slightly so the 3D background can initialize
        const timer = setTimeout(() => setIsShowing(true), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div 
            className={`
                relative flex flex-col items-center gap-6 text-center p-8 
                bg-white/10 backdrop-blur-xl border border-white/20 
                rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] 
                max-w-sm transition-all duration-1000 ease-out
                ${isShowing 
                    ? "opacity-100 translate-y-0 scale-100" 
                    : "opacity-0 translate-y-12 scale-90"}
            `}
        >
            {/* Main Text */}
            <p className="text-white font-semibold text-lg leading-relaxed sm:text-xl drop-shadow-md">
                {text}
            </p>

            {/* Glowing Action Button */}
            <a 
                href={link} 
                className="group relative inline-flex items-center justify-center px-8 py-3 
                           font-black text-blue-600 transition-all duration-300 
                           bg-white rounded-xl hover:bg-blue-600 hover:text-white
                           active:scale-95 shadow-lg hover:shadow-blue-500/40"
            >
                {btnTxt}
                <span className="ml-2 transition-transform group-hover:translate-x-2">→</span>
            </a>

            {/* Bottom Pointer */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-5 h-5 bg-white/10 backdrop-blur-xl rotate-45 border-r border-b border-white/20" />
        </div>
    );
}