import React from "react"
import icon1 from "./../assets/icon1.png"
import icon2 from "./../assets/icon2.png"
import icon3 from "./../assets/icon3.png"

const ProjectsSegment = () => {
    return (
        <div id="projects" className="w-full bg-slate-50 py-28 shadow-sm">
            <div className="max-w-7xl w-full mx-auto px-4 md:px-8 md:flex gap-10">
                <div className=" bg-white shadow-md rounded-md max-w-xs h-[40rem] mx-auto">
                    <div className="h-80">
                        <img src={icon1} className="rounded-lg w-full" />
                    </div>
                    <div className="h-80 p-8 text-justify relative">
                        <span className="font-bold text-2xl block text-center mb-8">Netflix Instant</span>
                        <span className="text-xl block">Safari extension which instantly skips intros and recaps but also auto plays next episodes without any waiting.</span>
                        <div className="text-right absolute right-4 bottom-4">
                            <a href="https://github.com/szymoonwronski/Netflix-Instant" target="_blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <i class="devicon-github-original text-xl"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className=" bg-white shadow-md rounded-md max-w-xs h-[40rem] mx-auto">
                    <div className="h-80">
                        <img src={icon2} className="rounded-lg w-full bg-[#ED1C24]" />
                    </div>
                    <div className="h-80 p-8 text-justify relative">
                        <span className="font-bold text-2xl block text-center mb-8">UNO Game</span>
                        <span className="text-xl block">Fully functional prototype of web based multiplayer card game.</span>
                        <div className="text-right absolute right-4 bottom-4">
                            <a href="https://github.com/szymoonwronski/Uno-Web-Game" target="_blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <i class="devicon-github-original text-xl"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className=" bg-white shadow-md rounded-md max-w-xs h-[40rem] mx-auto">
                    <div className="h-80">
                        <img src={icon3} className="rounded-lg w-full" />
                    </div>
                    <div className="h-80 p-8 text-justify relative">
                        <span className="font-bold text-2xl block text-center mb-8">Discord Status Lyrics</span>
                        <span className="text-xl block">Fully functional prototype of application which shows synchronized lyrics from currently playing track on spotify in discord status.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsSegment
