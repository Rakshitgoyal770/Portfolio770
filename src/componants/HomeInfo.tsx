import InfoBox from "./InfoBox";

const renderComponernt = {
    1: <InfoBox text="Hello, I'm Rakshit Goyal 👋!" link="/about" btnTxt="Learn More" />,
    2: <InfoBox text="I am a passionate developer." link="/projects" btnTxt="View Projects" />,
    3: <InfoBox text="Let's connect and collaborate!" link="/contact" btnTxt="Get in Touch" />,
    4: <InfoBox text="Thanks for visiting my portfolio!" link="/home" btnTxt="Back to Home" />,
}

export default function HomeInfo({currentStage}) {
    return renderComponernt[currentStage];
}

// copilet give he hellow emoji 
// hello emoji is not working in the code so i will use the text instead of emoji. I will use "Hello, I'm Rakshit Goyal !" instead of "👋 Hello, I'm Rakshit Goyal !".