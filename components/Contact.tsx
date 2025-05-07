'use client'
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";
import MagicButton from "./MagicButton";
import React, { useState } from 'react';
import animationData from "@/data/confetti.json";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "shamounstephen023@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-4 text-center bg-gradient-to-b from-[hsl(var(--gradient-start))/0.8] to-[hsl(var(--gradient-end))/0.8]"
    >
       <h1 className="heading">
        GET IN{" "}
        <span className="text-purple">TOUCH</span>
      </h1>
      <p
        className="max-w-2xl mx-auto text-lg leading-8 text-custom-gray mb-12"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Ready to collaborate or have a question? Reach out by copying my email address below and let’s start the conversation!
      </p>
      <div
        className="max-w-md mx-auto grid grid-cols-1 place-items-center"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <div className="relative">
          <div
            className={`absolute -bottom-5 right-0 ${copied ? "block" : "hidden"}`}
          >
            <Lottie options={defaultOptions} height={200} width={400} />
          </div>
          <MagicButton
            title={copied ? "Email is Copied!" : "Copy my email address"}
            icon={<IoCopyOutline />}
            position="left"
            handleClick={handleCopy}
            otherClasses="!bg-[#161A31]"
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary opacity-30"></div>
    </section>
  );
};

export default Contact;