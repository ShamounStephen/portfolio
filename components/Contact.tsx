import React from 'react'

const contactInfo = [
  {
    label: 'Email',
    value: 'shamounstephen023@gmail.com',
    href: 'mailto:shamounstephen023@gmail.com',
    aos: 'fade-up',
    aosDelay: '200',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/shamounstephen',
    href: 'https://linkedin.com/in/shamounstephen',
    target: '_blank',
    rel: 'noopener noreferrer',
    aos: 'fade-up',
    aosDelay: '300',
  },
]
const Contact = () => {

  return (
    <section
      id="contact"
      className="relative py-20 px-4 text-center bg-gradient-to-b from-[hsl(var(--gradient-start))/0.8] to-[hsl(var(--gradient-end))/0.8]"
    >
      <h2
        className="inline-block font-Poppins font-bold text-4xl mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-gradient-shift relative
                   after:content-[''] after:absolute after:bottom-[-0.5rem] after:left-0 after:w-full after:h-[4px] after:bg-gradient-to-r after:from-primary after:to-secondary after:rounded"
        data-aos="fade-up"
      >
        Contact Me
      </h2>
      {contactInfo.map((info) => (
        <p
          key={info.label}
          className="max-w-xl mx-auto mb-4 text-lg text-custom-gray"
          data-aos={info.aos}
          data-aos-delay={info.aosDelay}
        >
          {info.label}: <a href={info.href} className="text-primary hover:text-secondary transition-colors" target={info.target} rel={info.rel}>{info.value}</a>
        </p>
      ))}
      <div className="max-w-xl mx-auto flex flex-col gap-4" data-aos="fade-up" data-aos-delay="400">
        <input
          type="text"
          placeholder="Your Name"
          required
          className="p-3 text-base border border-border/20 rounded-lg bg-card/10 backdrop-blur-lg text-custom-gray focus:border-primary focus:outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          className="p-3 text-base border border-border/20 rounded-lg bg-card/10 backdrop-blur-lg text-custom-gray focus:border-primary focus:outline-none"
        />
        <textarea
          placeholder="Your Message"
          required
          className="p-3 text-base border border-border/20 rounded-lg bg-card/10 backdrop-blur-lg text-custom-gray focus:border-primary focus:outline-none min-h-[150px] resize-y"
        ></textarea>
        <button
          type="submit"
          className="px-6 py-3 text-base font-medium text-primary-foreground bg-gradient-to-r from-primary to-secondary rounded-lg hover:-translate-y-1 hover:shadow-md transition-transform transition-shadow duration-300"
        >
          Send Message
        </button>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary opacity-30"></div>
    </section>
  )
}

export default Contact