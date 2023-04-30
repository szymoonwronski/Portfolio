import React from "react"
import { useInView } from "react-intersection-observer"

const DevIcon = ({ icon }) => {
    const { ref, inView } = useInView()

    return <i ref={ref} className={`${icon} mx-2 hide-devicon ${inView ? "show-devicon" : ''}`}></i>
}

const HomeSegment = () => {
    return (
        <div className="bg-slate-50 dark:bg-gray-900 w-full pt-64 pb-64 shadow-sm]" id="home">
            {/* <svg className="" viewBox="0 0 1280 499" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1280 1C1182.46 16.6746 1147.37 64.2241 1132.5 197C1120.68 302.5 1092.5 329.148 1029 372.5M1029 372.5C911.412 452.779 878.862 343.107 911 296C938.631 255.5 1054.99 253.057 1029 372.5ZM1029 372.5C1012.35 449 958 498 911 498C781 498 711 403.214 568.5 415.5C453.988 425.373 400 465.773 258.5 488C145 505.828 90 446 -7.5 385.5" stroke="black"/>
</svg> */}

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
                    <div className="flex text-4xl mx-auto md:mx-0">
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
