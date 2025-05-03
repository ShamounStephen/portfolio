'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const HeroSection = () => {
  const [typedText, setTypedText] = useState('')
  const fullText = "I’m a AI Developer Professional, e.g., Web Developer based in UK."

  useEffect(() => {
    let index = 0
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(typingInterval)
      }
    }, 50)
    return () => clearInterval(typingInterval)
  }, [])

  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[hsl(var(--gradient-start))/0.8] to-[hsl(var(--gradient-end))/0.8] py-8 text-center"
    >
      <div className="mb-8">
        <Image
          src="/avatar.png"
          alt="Shamoun Stephen"
          width={150}
          height={150}
          className="rounded-full border-2 border-border/30 shadow-md"
        />
      </div>
      <h1 className="font-Poppins font-bold text-5xl text-custom-gray mb-4" data-aos="fade-up">
        Hi, I’m Shamoun Stephen
      </h1>
      <p className="font-sans text-xl text-custom-gray mb-8 max-w-xl" data-aos="fade-up" data-aos-delay="200">
        {typedText}
      </p>
      <a
        href="#contact"
        className="inline-block px-6 py-3 font-sans text-base font-medium text-primary-foreground bg-gradient-to-r from-primary to-secondary rounded-lg hover:-translate-y-1 hover:shadow-md transition-transform transition-shadow duration-300"
        data-aos="zoom-in"
        data-aos-delay="400"
      >
        Hire Me
      </a>
    </section>
  )
}

export default HeroSection