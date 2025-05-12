const About = () => {
    // Array of expertise items
    const expertiseItems = [
      "Proficient in Python, JavaScript, and TypeScript.",
      "Specialize in building dynamic websites using Next.js, with a focus on creating seamless user experiences.",
      "Experienced in AI development, leveraging intelligent solutions to solve complex problems.",
      "Skilled in the crypto market, applying strategic insights to navigate its volatility.",
      "Proficient in Docker, ensuring robust and scalable platforms.",
      "Passionate about technology, thriving on delivering innovative solutions that blend functionality and creativity.",
    ];
  
    return (
      <section id="about" className="relative py-20 px-4 text-center">
        <h1 className="heading mb-4">
          <span className="text-purple">About </span>
          Me
        </h1>
        <div className="relative overflow-hidden">
          {/* Floating Bubbles */}
          <div className="absolute bottom-[-50px] right-[10%] w-5 h-5 bg-[#6366f1] rounded-full animate-float-bubble delay-3000 z-0"></div>
          <div className="absolute bottom-[-50px] right-[25%] w-8 h-8 bg-[#6366f1] rounded-full animate-float-bubble delay-2000 z-0"></div>
          <div className="absolute bottom-[-50px] right-[35%] w-16 h-16 bg-[#6366f1] rounded-full animate-float-bubble delay-2000 z-0"></div>
          <div className="absolute bottom-[-50px] left-[10%] w-10 h-10 bg-[#6366f1] rounded-full animate-float-bubble z-0"></div>
          <div className="absolute bottom-[-50px] left-[50%] w-12 h-12 bg-[#6366f1] rounded-full animate-float-bubble z-0"></div>
          <div className="absolute bottom-[-50px] left-[20%] w-16 h-16 bg-[#6366f1] rounded-full animate-float-bubble delay-1000 z-0"></div>
  
          <div
            className="max-w-3xl mx-auto text-left bg-white/10 p-8 rounded-2xl shadow-lg backdrop-blur-lg border border-white/20 relative z-10"
            data-aos="fade-right"
          >
            <p className="text-lg leading-8 text-[#333] mb-6">
              I am a versatile AI code developer with a strong foundation in both backend and frontend development.
            </p>
            <h3 className="font-['Poppins'] font-bold text-xl text-[#333] mb-4">My Expertise</h3>
            <ul className="list-none p-0 mb-6">
              {expertiseItems.map((item, index) => (
                <li
                  key={index}
                  className="text-base leading-8 text-[#333] relative pl-6 mb-2 before:content-['•'] before:absolute before:left-0 before:text-[#6366f1] before:text-2xl"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base leading-8 text-[#333] italic">
              I have a proven track record in e-commerce projects and use streamlined deployment processes to deliver impactful solutions.
            </p>
          </div>
        </div>
        {/* Gradient Divider */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] opacity-30"></div>
      </section>
    );
  };
  
  export default About;