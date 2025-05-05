import React from 'react'

const socialLinks = [
  {
    platform: 'GitHub',
    href: 'https://github.com/ShamounStephen',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg',
    alt: 'GitHub',
  },
  {
    platform: 'LinkedIn',
    href: 'https://linkedin.com/in/shamounstephen',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg',
    alt: 'LinkedIn',
  },
  {
    platform: 'Twitter',
    href: 'https://twitter.com/shamounstephen',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/x.svg',
    alt: 'Twitter',
  },
]
const Footer = () => {

  return (
    <footer
      className="py-8 px-4 text-center bg-gradient-to-b from-[hsl(var(--gradient-start))/0.8] to-[hsl(var(--gradient-end))/0.8] border-t border-border/20"
      data-aos="fade-up"
    >
      <p className="font-sans text-base text-custom-gray mb-4">
        © Shamoun Stephen. All rights reserved.
      </p>
      <div className="flex justify-center gap-6 mb-4">
        {socialLinks.map((link) => (
          <a
            key={link.platform}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-custom-gray hover:text-primary hover:scale-110 transition-colors transition-transform duration-300"
          >
            <img src={link.icon} alt={link.alt} width={24} height={24} className="fill-current" />
          </a>
        ))}
      </div>
      <a
        href="#home"
        className="inline-block font-sans text-base text-primary hover:text-secondary transition-colors duration-300"
      >
        Back to Top ↑
      </a>
    </footer>
  )
}

export default Footer