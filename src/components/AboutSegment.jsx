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

                    <div className="text-base xs:text-xl text-justify mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet mi quam, in eleifend libero porttitor et. Mauris auctor lacinia diam, eget pellentesque felis cursus sed. Nullam id risus vitae dui interdum auctor. Sed tempor libero quis ipsum hendrerit, id lobortis purus molestie. Nullam quis lacinia enim. Nulla sed erat et ex aliquet semper.</div>
                </div>
            </div>
        </div>
    )
}

export default AboutSegment
