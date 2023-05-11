import React from "react"
import photo from "./../assets/photo8.png"

const AboutSegment = () => {
    return (
        <div id="about" className="w-full bg-white py-20 sm:py-40 shadow-sm]">
            <div className="max-w-7xl w-full mx-auto flex px-4 md:px-8 items-center">
                <div className="w-1/2 p-8 hidden lg:block">
                    <img src={photo} className="rounded-3xl w-[30rem]" />
                </div>
                <div className="lg:w-1/2 p-8 max-w-3xl text-center xs:text-left">
                    <div className="text-blue-500 block font-bold text-xl xs:text-2xl">ABOUT ME</div>
                    <div className="text-2xl xs:text-3xl font-bold py-4">
                        Rookie Software <nobr>Developer 👨🏼‍💻</nobr>
                    </div>

                    <div className="text-base xs:text-xl text-justify mt-4">My name is Szymon and I'm currently in high school. I'm planning to become a programmer in future. I've already made some projects which you'll be able to see next. I like to play chess but I'm trying to be better at this. I also have some experience in teaching others programming and coding. Go and see my work!</div>
                </div>
            </div>
        </div>
    )
}

export default AboutSegment
