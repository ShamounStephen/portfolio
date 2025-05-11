import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa6'

const socialLinks = [
  {
    platform: 'GitHub',
    href: 'https://github.com/ShamounStephen',
    icon: <FaGithub />,
    alt: 'GitHub',
  },
  {
    platform: 'LinkedIn',
    href: 'https://linkedin.com/in/shamounstephen',
    icon: <FaLinkedin />,
    alt: 'LinkedIn',
  },
  {
    platform: 'Twitter',
    href: 'https://twitter.com/shamounstephen',
    icon: <FaTwitter />,
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
          <Link
            key={link.platform}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-custom-gray hover:text-primary hover:scale-110 transition-colors transition-transform duration-300"
            aria-label={link.alt}
          >
            <span className="text-2xl">{link.icon}</span>
          </Link>
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