"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { PinContainer } from "../ui/Pin";
import Image from "next/image";
import ecomImage from '@/assests/ecommerce-screenshot.png'
import PanaImage from '@/assests/panaverse-screenshot.png'
import todoImage from '@/assests/todoapp-screenshot.png'
import figmaImage from '@/assests/figma-clone-screenshot.png'
import bgImage from '@/assests/bg.png'

export const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    des: "A dynamic e-commerce platform crafted with Next.js and TypeScript, offering seamless product browsing, cart management, and secure payments for an enhanced shopping experience.",
    img: ecomImage,
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://ecomwebsite-woad.vercel.app/",
  },
  {
    id: 2,
    title: "Panaverse DAO Clone",
    des: "A modern clone of the Panaverse DAO website, built using Next.js and TypeScript, featuring intuitive course listings and community engagement tools for a next-gen educational experience.",
    img: PanaImage,
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://panaverse-dao-clone-seven.vercel.app/",
  },
  {
    id: 3,
    title: "Todo App",
    des: "An intuitive Todo app developed with Next.js and TypeScript, empowering users to effortlessly create, edit, and manage tasks for streamlined productivity.",
    img: todoImage,
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://todoapp-eta-lake.vercel.app/",
  },
  {
    id: 4,
    title: "Figma Clone",
    des: "A sleek Figma clone built with Next.js and TypeScript, delivering real-time collaborative design tools and a user-friendly interface for creative workflows.",
    img: figmaImage,
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://figma-clone-tau-five.vercel.app/",
  },
];

const RecentProjects = () => {
  return (
    <div className="py-20" id='projects'>
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer title="Live" href={item.link}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <Image src={bgImage} alt="bgimg" width={100} height={100} />
                  </div>
                  <Image
                    src={item.img} alt='' className="z-10 absolute bottom-0" height={550} width={550}
                  />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#989AB1",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} className="p-2" alt="" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </a>
            </PinContainer>
          </div>
        ))}
      </div>
    </div >
  );
};

export default RecentProjects;