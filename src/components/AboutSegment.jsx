import React from "react"
import photo from './../assets/photo8.png'

const AboutSegment = () => {
    return (
        <div id="about" className="w-full bg-white py-40 shadow-sm">
            <div className="max-w-7xl w-full mx-auto flex px-4 md:px-8">
                <div className="w-1/2 p-8">
                    <img src={photo} className="rounded-3xl w-[30rem]" />
                </div>
                <div className="w-1/2 p-8">
                    <div className="text-blue-500 block font-bold text-2xl mt-20">ABOUT ME</div>
                    <div className="text-3xl font-bold py-4">Rookie Software Developer 👨🏼‍💻</div>
                    <div className="text-xl text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet mi quam, in eleifend libero porttitor et. Mauris auctor lacinia diam, eget pellentesque felis cursus sed. Nullam id risus vitae dui interdum auctor. Sed tempor libero quis ipsum hendrerit, id lobortis purus molestie. Nullam quis lacinia enim. Nulla sed erat et ex aliquet semper.</div>
                </div>
            </div>
        </div>
    )
}

export default AboutSegment
