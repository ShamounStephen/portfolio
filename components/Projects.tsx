import Image from "next/image"

const projects = [
    {
        title: ['E-commerce', 'Website'],
        icon: '/ecommerce-icon.svg',
        screenshot: '/ecommerce-screenshot.png',
        alt: 'E-commerce Website',
        url: 'https://ecomwebsite-woad.vercel.app/',
        description: 'A dynamic e-commerce platform crafted with Next.js and TypeScript, offering seamless product browsing, cart management, and secure payments for an enhanced shopping experience.',
        tech: ['Next.js', 'TypeScript'],
        aos: 'zoom-in',
    },
    {
        title: ['Panaverse', 'DAO Clone'],
        icon: '/panaverse-icon.svg',
        screenshot: '/panaverse-screenshot.png',
        alt: 'Panaverse DAO Clone',
        url: 'https://panaverse-dao-clone-seven.vercel.app/',
        description: 'A modern clone of the Panaverse DAO website, built using Next.js and TypeScript, featuring intuitive course listings and community engagement tools for a next-gen educational experience.',
        tech: ['Next.js', 'TypeScript'],
        aos: 'zoom-in',
    },
    {
        title: ['Todo', 'App'],
        icon: '/todoapp-icon.svg',
        screenshot: '/todoapp-screenshot.png',
        alt: 'Todo App',
        url: 'https://todoapp-eta-lake.vercel.app/',
        description: 'An intuitive Todo app developed with Next.js and TypeScript, empowering users to effortlessly create, edit, and manage tasks for streamlined productivity.',
        tech: ['Next.js', 'TypeScript'],
        aos: 'zoom-in',
    },
    {
        title: ['Figma', 'Clone'],
        icon: '/figma-icon.svg',
        screenshot: '/figma-clone-screenshot.png',
        alt: 'Figma Clone',
        url: 'https://figma-clone-tau-five.vercel.app/',
        description: 'A sleek Figma clone built with Next.js and TypeScript, delivering real-time collaborative design tools and a user-friendly interface for creative workflows.',
        tech: ['Next.js', 'TypeScript'],
        aos: 'zoom-in',
    },
    {
        title: ['E-commerce', 'Website 2'],
        icon: '/ecommerce-icon.svg',
        screenshot: '/ecommerce2-screenshot.png',
        alt: 'E-commerce Website 2',
        url: 'https://ecom-three-roan.vercel.app/',
        description: 'A second e-commerce platform powered by Next.js and TypeScript, designed with advanced product filtering and a user-centric experience for effortless shopping.',
        tech: ['Next.js', 'TypeScript'],
        aos: 'zoom-in',
    },
    {
        title: ['Cloudinary', 'Photos'],
        icon: '/cloudinary-icon.svg',
        screenshot: '/cloudinary-photos-screenshot.png',
        alt: 'Cloudinary Photos',
        url: 'https://cloudinary-photos-ecru.vercel.app/',
        description: 'A photo gallery app built with Next.js, TypeScript, and Cloudinary, enabling seamless image uploads, management, and sharing for a smooth user experience.',
        tech: ['Next.js', 'TypeScript', 'Cloudinary'],
        aos: 'zoom-in',
    },
]
const Projects = () => {

    return (
        <section
            id="projects"
            className="relative py-20 px-4 text-center bg-gradient-to-b from-[hsl(var(--gradient-start))/0.8] to-[hsl(var(--gradient-end))/0.8]"
        >
            <h2
                className="inline-block font-Poppins font-bold text-4xl mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-gradient-shift relative
                           after:content-[''] after:absolute after:bottom-[-0.5rem] after:left-0 after:w-full after:h-[4px] after:bg-gradient-to-r after:from-primary after:to-secondary after:rounded"
                data-aos="fade-up"
            >
                My Projects
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 p-4">
                {projects.map((project) => (
                    <div
                        key={project.url}
                        className="bg-card/10 p-6 rounded-lg shadow-lg backdrop-blur-lg border border-border/20 hover:-translate-y-[10px] transition-transform duration-300"
                        data-aos={project.aos}
                    >
                        <div className="mb-4 flex justify-center">
                            <Image src={project.icon} alt={`${project.alt} Icon`} width={50} height={50} />
                        </div>
                        <div className="relative rounded-lg overflow-hidden group">
                            <Image
                                src={project.screenshot}
                                alt={project.alt}
                                width={300}
                                height={200}
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-primary/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <a
                                    href={project.url}
                                    className="text-primary-foreground font-medium px-4 py-2 bg-secondary/50 rounded-[5px] hover:bg-secondary/80 transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                        <h3 className="font-Poppins font-semibold text-xl text-custom-gray mt-4 flex flex-col items-center">
                            {project.title.map((part, index) => (
                                <span key={index} className="leading-[1.2]">
                                    {part}
                                </span>
                            ))}
                        </h3>
                        <p className="text-base text-custom-gray mt-2" data-aos="fade-up" data-aos-delay="200">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {project.tech.map((tech, index) => (
                                <span
                                    key={index}
                                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors transition-transform duration-300 ${tech === 'Next.js'
                                            ? 'bg-primary/20 text-primary'
                                            : tech === 'TypeScript'
                                                ? 'bg-secondary/20 text-secondary'
                                                : tech === 'Cloudinary'
                                                    ? 'bg-accent/20 text-accent animate-pulse'
                                                    : 'bg-muted/20 text-muted-foreground'
                                        }`}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary opacity-30"></div>
        </section>
    )
}

export default Projects