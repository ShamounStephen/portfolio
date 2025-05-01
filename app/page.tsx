"use client";
import Head from 'next/head';
import Image from 'next/image';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  const [typedText, setTypedText] = useState('');
  const fullText = "I’m a AI Developer Professional, e.g., Web Developer based in UK.";

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animation = entry.target.getAttribute('data-animate');
            if (animation) {
              entry.target.classList.add(styles[animation]);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);
    return () => clearInterval(typingInterval);
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.container}>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My personal portfolio website" />
        <meta name="keywords" content="Shamoun Stephen, AI Developer, Next.js, Portfolio, Web Development" />
        <meta name="author" content="Shamoun Stephen" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&family=Roboto:wght@400;500&display=swap" rel="stylesheet" />
      </Head>

      {/* Navbar */}
      <nav className={styles.navbar}>
        <h1>My Portfolio</h1>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className={styles.hero}>
        <div className={styles.heroAvatar}>
          <Image src="/avatar.png" alt="Shamoun Stephen" width={150} height={150} className={styles.avatarImage} />
        </div>
        <h1 data-aos="fade-up">Hi, I’m Shamoun Stephen</h1>
        <p data-aos="fade-up" data-aos-delay="200">{typedText}</p>
        <a href="#contact" className={styles.cta} data-aos="zoom-in" data-aos-delay="400">Hire Me</a>
      </section>

      {/* About Section */}
      <section id="about" className={styles.section}>
        <h2 data-aos="fade-up">About Me</h2>
        <div className={styles.aboutContentWrapper}>
          <div className={styles.aboutContent} data-aos="fade-right">
            <p className={styles.aboutIntro}>
              I am a versatile AI code developer with a strong foundation in both backend and frontend development.
            </p>
            <h3>My Expertise</h3>
            <ul className={styles.aboutList}>
              <li>Proficient in Python, JavaScript, and TypeScript.</li>
              <li>Specialize in building dynamic websites using Next.js, with a focus on creating seamless user experiences.</li>
              <li>Experienced in AI development, leveraging intelligent solutions to solve complex problems.</li>
              <li>Skilled in the crypto market, applying strategic insights to navigate its volatility.</li>
              <li>Proficient in Docker, ensuring robust and scalable platforms.</li>
              <li>Passionate about technology, thriving on delivering innovative solutions that blend functionality and creativity.</li>
            </ul>
            <p className={styles.aboutSummary}>
              I have a proven track record in e-commerce projects and use streamlined deployment processes to deliver impactful solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={styles.section}>
        <h2 data-aos="fade-up">My Skills</h2>
        <div className={styles.skillsGrid}>
          <div className={styles.skillItem} data-aos="fade-left">
            <h3>Python 🐍</h3>
            <div className={styles.skillBar}>
              <div className={styles.skillLevel} style={{ width: '90%' }}></div>
            </div>
          </div>
          <div className={styles.skillItem} data-aos="fade-right">
            <h3>JavaScript 📜</h3>
            <div className={styles.skillBar}>
              <div className={styles.skillLevel} style={{ width: '85%' }}></div>
            </div>
          </div>
          <div className={styles.skillItem} data-aos="fade-left">
            <h3>TypeScript 💻</h3>
            <div className={styles.skillBar}>
              <div className={styles.skillLevel} style={{ width: '80%' }}></div>
            </div>
          </div>
          <div className={styles.skillItem} data-aos="fade-right">
            <h3>Next.js ⚡</h3>
            <div className={styles.skillBar}>
              <div className={styles.skillLevel} style={{ width: '90%' }}></div>
            </div>
          </div>
          <div className={styles.skillItem} data-aos="fade-left">
            <h3>AI Development 🤖</h3>
            <div className={styles.skillBar}>
              <div className={styles.skillLevel} style={{ width: '75%' }}></div>
            </div>
          </div>
          <div className={styles.skillItem} data-aos="fade-right">
            <h3>Docker 🐳</h3>
            <div className={styles.skillBar}>
              <div className={styles.skillLevel} style={{ width: '80%' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={styles.section}>
        <h2 data-aos="fade-up" className={styles.sectionTitle}>My Projects</h2>
        <div className={styles.projectGrid}>
          <div className={styles.projectCard} data-aos="zoom-in">
            <div className={styles.projectIconWrapper}>
              <Image src="/ecommerce-icon.svg" alt="E-commerce Icon" width={50} height={50} />
            </div>
            <div className={styles.projectImageWrapper}>
              <Image
                src="/ecommerce-screenshot.png"
                alt="E-commerce Website"
                width={300}
                height={200}
                className={styles.projectImage}
              />
              <div className={styles.projectOverlay}>
                <a href="https://ecomwebsite-woad.vercel.app/" className={styles.projectLink}>View Project</a>
              </div>
            </div>
            <h3 className={styles.projectTitle}>
              <span className={styles.titlePart}>E-commerce</span>
              <span className={styles.titlePart}>Website</span>
            </h3>
            <p className={styles.projectDescription} data-aos="fade-up" data-aos-delay="200">
              A dynamic e-commerce platform crafted with Next.js and TypeScript, offering seamless product browsing, cart management, and secure payments for an enhanced shopping experience.
            </p>
            <div className={styles.techStack}>
              <span className={`${styles.techBadge} ${styles.nextJsBadge}`}>Next.js</span>
              <span className={`${styles.techBadge} ${styles.typeScriptBadge}`}>TypeScript</span>
            </div>
          </div>
          <div className={styles.projectCard} data-aos="zoom-in">
            <div className={styles.projectIconWrapper}>
              <Image src="/panaverse-icon.svg" alt="Panaverse Icon" width={50} height={50} />
            </div>
            <div className={styles.projectImageWrapper}>
              <Image
                src="/panaverse-screenshot.png"
                alt="Panaverse DAO Clone"
                width={300}
                height={200}
                className={styles.projectImage}
              />
              <div className={styles.projectOverlay}>
                <a href="https://panaverse-dao-clone-seven.vercel.app/" className={styles.projectLink}>View Project</a>
              </div>
            </div>
            <h3 className={styles.projectTitle}>
              <span className={styles.titlePart}>Panaverse</span>
              <span className={styles.titlePart}>DAO Clone</span>
            </h3>
            <p className={styles.projectDescription} data-aos="fade-up" data-aos-delay="200">
              A modern clone of the Panaverse DAO website, built using Next.js and TypeScript, featuring intuitive course listings and community engagement tools for a next-gen educational experience.
            </p>
            <div className={styles.techStack}>
              <span className={`${styles.techBadge} ${styles.nextJsBadge}`}>Next.js</span>
              <span className={`${styles.techBadge} ${styles.typeScriptBadge}`}>TypeScript</span>
            </div>
          </div>
          <div className={styles.projectCard} data-aos="zoom-in">
            <div className={styles.projectIconWrapper}>
              <Image src="/todoapp-icon.svg" alt="Todo App Icon" width={50} height={50} />
            </div>
            <div className={styles.projectImageWrapper}>
              <Image
                src="/todoapp-screenshot.png"
                alt="Todo App"
                width={300}
                height={200}
                className={styles.projectImage}
              />
              <div className={styles.projectOverlay}>
                <a href="https://todoapp-eta-lake.vercel.app/" className={styles.projectLink}>View Project</a>
              </div>
            </div>
            <h3 className={styles.projectTitle}>
              <span className={styles.titlePart}>Todo</span>
              <span className={styles.titlePart}>App</span>
            </h3>
            <p className={styles.projectDescription} data-aos="fade-up" data-aos-delay="200">
              An intuitive Todo app developed with Next.js and TypeScript, empowering users to effortlessly create, edit, and manage tasks for streamlined productivity.
            </p>
            <div className={styles.techStack}>
              <span className={`${styles.techBadge} ${styles.nextJsBadge}`}>Next.js</span>
              <span className={`${styles.techBadge} ${styles.typeScriptBadge}`}>TypeScript</span>
            </div>
          </div>
          <div className={styles.projectCard} data-aos="zoom-in">
            <div className={styles.projectIconWrapper}>
              <Image src="/figma-icon.svg" alt="Figma Icon" width={50} height={50} />
            </div>
            <div className={styles.projectImageWrapper}>
              <Image
                src="/figma-clone-screenshot.png"
                alt="Figma Clone"
                width={300}
                height={200}
                className={styles.projectImage}
              />
              <div className={styles.projectOverlay}>
                <a href="https://figma-clone-tau-five.vercel.app/" className={styles.projectLink}>View Project</a>
              </div>
            </div>
            <h3 className={styles.projectTitle}>
              <span className={styles.titlePart}>Figma</span>
              <span className={styles.titlePart}>Clone</span>
            </h3>
            <p className={styles.projectDescription} data-aos="fade-up" data-aos-delay="200">
              A sleek Figma clone built with Next.js and TypeScript, delivering real-time collaborative design tools and a user-friendly interface for creative workflows.
            </p>
            <div className={styles.techStack}>
              <span className={`${styles.techBadge} ${styles.nextJsBadge}`}>Next.js</span>
              <span className={`${styles.techBadge} ${styles.typeScriptBadge}`}>TypeScript</span>
            </div>
          </div>
          <div className={styles.projectCard} data-aos="zoom-in">
            <div className={styles.projectIconWrapper}>
              <Image src="/ecommerce-icon.svg" alt="E-commerce Icon" width={50} height={50} />
            </div>
            <div className={styles.projectImageWrapper}>
              <Image
                src="/ecommerce2-screenshot.png"
                alt="E-commerce Website 2"
                width={300}
                height={200}
                className={styles.projectImage}
              />
              <div className={styles.projectOverlay}>
                <a href="https://ecom-three-roan.vercel.app/" className={styles.projectLink}>View Project</a>
              </div>
            </div>
            <h3 className={styles.projectTitle}>
              <span className={styles.titlePart}>E-commerce</span>
              <span className={styles.titlePart}>Website 2</span>
            </h3>
            <p className={styles.projectDescription} data-aos="fade-up" data-aos-delay="200">
              A second e-commerce platform powered by Next.js and TypeScript, designed with advanced product filtering and a user-centric experience for effortless shopping.
            </p>
            <div className={styles.techStack}>
              <span className={`${styles.techBadge} ${styles.nextJsBadge}`}>Next.js</span>
              <span className={`${styles.techBadge} ${styles.typeScriptBadge}`}>TypeScript</span>
            </div>
          </div>
          <div className={styles.projectCard} data-aos="zoom-in">
            <div className={styles.projectIconWrapper}>
              <Image src="/cloudinary-icon.svg" alt="Cloudinary Icon" width={50} height={50} />
            </div>
            <div className={styles.projectImageWrapper}>
              <Image
                src="/cloudinary-photos-screenshot.png"
                alt="Cloudinary Photos"
                width={300}
                height={200}
                className={styles.projectImage}
              />
              <div className={styles.projectOverlay}>
                <a href="https://cloudinary-photos-ecru.vercel.app/" className={styles.projectLink}>View Project</a>
              </div>
            </div>
            <h3 className={styles.projectTitle}>
              <span className={styles.titlePart}>Cloudinary</span>
              <span className={styles.titlePart}>Photos</span>
            </h3>
            <p className={styles.projectDescription} data-aos="fade-up" data-aos-delay="200">
              A photo gallery app built with Next.js, TypeScript, and Cloudinary, enabling seamless image uploads, management, and sharing for a smooth user experience.
            </p>
            <div className={styles.techStack}>
              <span className={`${styles.techBadge} ${styles.nextJsBadge}`}>Next.js</span>
              <span className={`${styles.techBadge} ${styles.typeScriptBadge}`}>TypeScript</span>
              <span className={`${styles.techBadge} ${styles.cloudinaryBadge}`} data-animate="pulse">Cloudinary</span>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className={styles.section}>
        <h2 data-aos="fade-up">Certifications</h2>
        <ul className={styles.certificationList}>
          <li data-aos="fade-right">Next.js Certification — Udemy, 2024</li>
          <li data-aos="fade-left">AI for Developers — Coursera, 2025</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.section}>
        <h2 data-aos="fade-up">Contact Me</h2>
        <p data-aos="fade-up" data-aos-delay="200">
          Email: <a href="mailto:shamounstephen023@gmail.com">shamounstephen023@gmail.com</a>
        </p>
        <p data-aos="fade-up" data-aos-delay="300">
          LinkedIn: <a href="https://linkedin.com/in/shamounstephen" target="_blank" rel="noopener noreferrer">linkedin.com/in/shamounstephen</a>
        </p>
        <form className={styles.contactForm} data-aos="fade-up" data-aos-delay="400">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© {currentYear} Shamoun Stephen. All rights reserved.</p>
        <div className={styles.socialLinks}>
          <a href="https://github.com/ShamounStephen" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg" alt="GitHub" width={24} height={24} />
          </a>
          <a href="https://linkedin.com/in/shamounstephen" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} />
          </a>
          <a href="https://twitter.com/shamounstephen" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/x.svg" alt="Twitter" width={24} height={24} />
          </a>
        </div>
        <a href="#home" className={styles.backToTop}>
          Back to Top ↑
        </a>
      </footer>
    </div>
  );
}