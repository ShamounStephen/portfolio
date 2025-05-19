'use client'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleHeader from "../TitleHeader";
import GlowCard from "../GlowCard";
import Image, { StaticImageData } from "next/image";
import exp1 from '@/assests/images/exp1.png'
import exp2 from '@/assests/images/exp2.png'
import exp3 from '@/assests/images/exp3.png'
import logo1 from '@/assests/images/logo1.png'
import logo2 from '@/assests/images/logo2.png'
import logo3 from '@/assests/images/logo3.png'

interface ExpCard {
  review: string;
  imgPath: StaticImageData;
  logoPath: StaticImageData;
  title: string;
  date: string;
  responsibilities: Array<String>;
}

const expCards: ExpCard[] = [
  {
    review: "Shamoun Stephen brought creativity and technical expertise to the team, significantly enhancing our frontend with React. His work delivered faster and more interactive user experiences.",
    imgPath: exp1,
    logoPath: logo1,
    title: "Frontend Developer",
    date: "January 2025 - May 2025",
    responsibilities: [
      "Built and maintained dynamic user interfaces for the Hostinger website using React.",
      "Collaborated with UI/UX designers to implement responsive and accessible React components.",
      "Optimized React applications for performance, focusing on efficient state management and rendering.",
    ],
  },
  {
    review: "Shamoun Stephen’s expertise with PostgreSQL in Docker's web applications was outstanding. His database solutions ensured robust and scalable systems.",
    imgPath: exp2,
    logoPath: logo2,
    title: "Full Stack Developer",
    date: "June 2023 - December 2024",
    responsibilities: [
      "Designed and optimized PostgreSQL databases for Docker's web applications to ensure scalability.",
      "Integrated PostgreSQL with backend APIs, enabling seamless data flow to the frontend.",
      "Contributed to open-source PostgreSQL tools used within the Docker ecosystem.",
    ],
  },
  {
    review: "Shamoun Stephen’s work on Appwrite’s infrastructure brought a high level of quality and efficiency. He delivered solutions that enhanced our deployment pipelines and met our scalability goals.",
    imgPath: exp3,
    logoPath: logo3,
    title: "DevOps Developer",
    date: "March 2023 - May 2023",
    responsibilities: [
      "Implemented CI/CD pipelines using Docker to streamline Appwrite's deployment processes.",
      "Optimized infrastructure performance through monitoring, automation, and testing.",
      "Collaborated with the development team to ensure scalable and reliable backend services.",
    ],
  },
];


gsap.registerPlugin(ScrollTrigger);

const Experience: React.FC = () => {
  useGSAP(() => {
    // Loop through each timeline card and animate them in
    // as the user scrolls to each card
    gsap.utils.toArray<HTMLElement>(".timeline-card").forEach((card) => {
      // Animate the card coming in from the left
      // and fade in
      gsap.from(card, {
        // Move the card in from the left
        xPercent: -100,
        // Make the card invisible at the start
        opacity: 0,
        // Set the origin of the animation to the left side of the card
        transformOrigin: "left left",
        // Animate over 1 second
        duration: 1,
        // Use a power2 ease-in-out curve
        ease: "power2.inOut",
        // Trigger the animation when the card is 80% of the way down the screen
        scrollTrigger: {
          // The card is the trigger element
          trigger: card,
          // Trigger the animation when the card is 80% down the screen
          start: "top 80%",
        },
      });
    });

    // Animate the timeline height as the user scrolls
    // from the top of the timeline to 70% down the screen
    // The timeline height should scale down from 1 to 0
    // as the user scrolls up the screen
    gsap.to(".timeline", {
      // Set the origin of the animation to the bottom of the timeline
      transformOrigin: "bottom bottom",
      // Animate the timeline height over 1 second
      ease: "power1.inOut",
      // Trigger the animation when the timeline is at the top of the screen
      // and end it when the timeline is at 70% down the screen
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        // Update the animation as the user scrolls
        onUpdate: (self) => {
          // Scale the timeline height as the user scrolls
          // from 1 to 0 as the user scrolls up the screen
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });

    // Loop through each expText element and animate them in
    // as the user scrolls to each text element
    gsap.utils.toArray<HTMLElement>(".expText").forEach((text) => {
      // Animate the text opacity from 0 to 1
      // and move it from the left to its final position
      // over 1 second with a power2 ease-in-out curve
      gsap.from(text, {
        // Set the opacity of the text to 0
        opacity: 0,
        // Move the text from the left to its final position
        // (xPercent: 0 means the text is at its final position)
        xPercent: 0,
        // Animate over 1 second
        duration: 1,
        // Use a power2 ease-in-out curve
        ease: "power2.inOut",
        // Trigger the animation when the text is 60% down the screen
        scrollTrigger: {
          // The text is the trigger element
          trigger: text,
          // Trigger the animation when the text is 60% down the screen
          start: "top 60%",
        },
      });
    }, "<"); // position parameter - insert at the start of the animation
  }, []);

  return (
    <section
      id="experience"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Professional Work Experience"
          sub="💼 My Career Overview"
        />
        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card) => (
              <div key={card.title} className="exp-card-wrapper">
                <div className="xl:w-2/6">
                  <GlowCard card={card} index={0}>
                    <div>
                      <Image src={card.imgPath} alt="exp-img" height={100} width={100} />
                    </div>
                  </GlowCard>
                </div>
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>
                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo">
                        <Image src={card.logoPath} alt="logo" height={75} width={75}/>
                      </div>
                      <div>
                        <h1 className="font-semibold text-3xl">{card.title}</h1>
                        <p className="my-5 text-white-50">
                          🗓️ {card.date}
                        </p>
                        <p className="text-[#839CB5] italic">
                          Responsibilities
                        </p>
                        <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                          {card.responsibilities.map(
                            (responsibility, index) => (
                              <li key={index} className="text-lg">
                                {responsibility}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;