import React from 'react'

const Certifications = () => {
  const certifications = [
    { name: 'Next.js Certification — Udemy, 2024', aos: 'fade-right' },
    { name: 'AI for Developers — Coursera, 2025', aos: 'fade-left' },
  ]

  return (
    <section
      id="certifications"
      className="relative py-20 px-4 text-center bg-gradient-to-b from-[hsl(var(--gradient-start))/0.8] to-[hsl(var(--gradient-end))/0.8]"
    >
      <h2
        className="inline-block font-Poppins font-bold text-4xl mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-gradient-shift relative
                   after:content-[''] after:absolute after:bottom-[-0.5rem] after:left-0 after:w-full after:h-[4px] after:bg-gradient-to-r after:from-primary after:to-secondary after:rounded"
        data-aos="fade-up"
      >
        Certifications
      </h2>
      <ul className="list-none p-0 max-w-xl mx-auto">
        {certifications.map((cert, index) => (
          <li
            key={cert.name}
            className="text-lg text-custom-gray p-4 mb-4 bg-card/10 rounded-lg shadow-md backdrop-blur-lg border border-border/20 hover:-translate-y-1 hover:shadow-lg transition-transform transition-shadow duration-300"
            data-aos={cert.aos}
          >
            {cert.name}
          </li>
        ))}
      </ul>
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary opacity-30"></div>
    </section>
  )
}

export default Certifications