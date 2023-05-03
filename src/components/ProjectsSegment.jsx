import React from "react"
import icon1 from "./../assets/icon1.png"
import icon2 from "./../assets/icon2.png"
import icon3 from "./../assets/icon3.png"

const ProjectsSegment = () => {
    return (
        <div id="projects" className="w-full bg-slate-50 py-28 shadow-sm">
            <div className="max-w-7xl w-full mx-auto px-4 lg:px-8 lg:flex">
                <div className="bg-white shadow-md rounded-md xl:w-[20rem] xl:h-[40rem] lg:w-[18rem] lg:h-[36rem] mx-auto">
                    <div className="lg:w-full lg:h-1/2">
                        <img src={icon1} className="rounded-lg w-full h-full" />
                    </div>
                    <div className="lg:w-full lg:h-1/2 p-4 lg:p-8 text-justify relative">
                        <div className="font-bold text-xl lg:text-2xl block text-center mb-4 lg:mb-8">Netflix Instant</div>
                        <div className="text-base lg:text-xl block">Safari extension which instantly skips intros and recaps but also auto plays next episodes without any waiting.</div>
                        <div className="text-right absolute right-4 bottom-4">
                            <a href="https://github.com/szymoonwronski/Netflix-Instant" target="_blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <i class="devicon-github-original text-xl"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className=" bg-white shadow-md rounded-md xl:w-[20rem] xl:h-[40rem] lg:w-[18rem] lg:h-[36rem] mx-auto">
                    <div className="lg:w-full lg:h-1/2">
                        <img src={icon2} className="rounded-lg w-full h-full bg-[#ED1C24]" />
                    </div>
                    <div className="lg:w-full lg:h-1/2 p-4 lg:p-8 text-justify relative">
                        <div className="font-bold text-xl lg:text-2xl block text-center mb-4 lg:mb-8">UNO Game</div>
                        <div className="text-base lg:text-xl block">Fully functional prototype of web based multiplayer card game.</div>
                        <div className="text-right absolute right-4 bottom-4">
                            <a href="https://github.com/szymoonwronski/Uno-Web-Game" target="_blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <i class="devicon-github-original text-xl"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className=" bg-white shadow-md rounded-md xl:w-[20rem] xl:h-[40rem] lg:w-[18rem] lg:h-[36rem] mx-auto">
                    <div className="lg:w-full lg:h-1/2">
                        <img src={icon3} className="rounded-lg w-full h-full" />
                    </div>
                    <div className="lg:w-full lg:h-1/2 p-4 lg:p-8 text-justify relative">
                        <div className="font-bold text-xl lg:text-2xl block text-center mb-4 lg:mb-8"><span className="hidden xl:inline-block">Discord</span><span className="xl:hidden">DC</span> Status Lyrics</div>
                        <div className="text-base lg:text-xl block">Fully functional prototype of application which shows synchronized lyrics from currently playing track on spotify in discord status.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsSegment
