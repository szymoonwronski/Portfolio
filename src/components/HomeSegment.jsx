import React from "react"
import { useInView } from "react-intersection-observer"

const DevIcon = ({ icon }) => {
    const { ref, inView } = useInView()

    return <i ref={ref} className={`${icon} mx-2 hide-devicon ${inView ? "show-devicon" : "hide-devicon"}`}></i>
}

const HomeSegment = () => {
    return (
        <div className="bg-slate-50 dark:bg-gray-900 w-full pt-64 pb-64 shadow-sm" id="home">
            <div className="flex flex-col text-center md:text-left px-4 md:px-8 mx-auto w-full max-w-7xl">
                <span className="text-6xl font-bold">
                    Hi! I'm a software{" "}
                    <span className="whitespace-nowrap">
                        developer. <span className="waving-hand">👋🏼</span>
                    </span>
                </span>
                <span className="text-3xl py-8">And that's my portfolio. Have fun!</span>
                <div className="flex items-center pt-24">
                    <span className="text-2xl mr-7 hidden md:block">Tech Stack | </span>
                    <div className="flex text-4xl mx-auto md:mx-0 gap-3">
                        <DevIcon icon={"devicon-html5-plain colored delay-[50ms]"} />
                        <DevIcon icon={"devicon-css3-plain colored delay-[100ms]"} />
                        <DevIcon icon={"devicon-javascript-plain colored delay-[150ms]"} />
                        <DevIcon icon={"devicon-react-original colored delay-[200ms]"} />
                        <DevIcon icon={"devicon-tailwindcss-plain colored delay-[250ms]"} />
                        <DevIcon icon={"devicon-nodejs-plain colored delay-[300ms]"} />
                        <DevIcon icon={"devicon-php-plain colored delay-[350ms]"} />
                        <DevIcon icon={"devicon-mysql-plain colored delay-[400ms]"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSegment
