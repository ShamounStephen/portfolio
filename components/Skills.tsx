import React from 'react'

const skills = [
    { name: 'Python', emoji: '🐍', width: '90%', aos: 'fade-left' },
    { name: 'JavaScript', emoji: '📜', width: '85%', aos: 'fade-right' },
    { name: 'TypeScript', emoji: '💻', width: '80%', aos: 'fade-left' },
    { name: 'Next.js', emoji: '⚡', width: '90%', aos: 'fade-right' },
    { name: 'AI Development', emoji: '🤖', width: '75%', aos: 'fade-left' },
    { name: 'Docker', emoji: '🐳', width: '80%', aos: 'fade-right' },
]
const Skills = () => {

    return (
        <section
            id="skills"
            className="relative py-20 px-4 text-center bg-gradient-to-b from-[hsl(var(--gradient-start))/0.8] to-[hsl(var(--gradient-end))/0.8]"
        >
            <h2
                className="inline-block font-Poppins font-bold text-4xl mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-gradient-shift relative
                           after:content-[''] after:absolute after:bottom-[-0.5rem] after:left-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-primary after:to-secondary after:rounded"
                data-aos="fade-up"
            >
                My Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className="bg-card/10 p-4 rounded-lg shadow-lg backdrop-blur-lg border border-border/20 hover:-translate-y-1 transition-transform"
                        data-aos={skill.aos}
                    >
                        <h3 className="font-Poppins font-semibold text-lg text-custom-gray mb-2">
                            {skill.name} {skill.emoji}
                        </h3>
                        <div className="bg-card/20 h-2.5 rounded-full overflow-hidden">
                            <div
                                className="bg-gradient-to-r from-primary to-secondary h-full animate-fill-bar"
                                style={{ width: skill.width }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary opacity-30"></div>
        </section>
    )
}

export default Skills