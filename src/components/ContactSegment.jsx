import React from "react"

const ContactSegment = () => {
    return (
        <div id="contact" className="w-full bg-white pt-20 md:pb-10 lg:pb-20 shadow-sm">
            <div className="max-w-7xl w-full px-4 mx-auto md:px-8 flex flex-col justify-between">
                <div className="text-center md:text-left">
                    <span className="text-blue-500 block font-bold text-2xl py-4">CONTACT</span>
                    <span className="text-3xl font-bold">You can hit me up here! 👇🏼</span>
                </div>
                <div className="block py-20 gap-20 flex-wrap mx-auto md:mx-0 md:flex">
                    <div className="flex items-center mb-14 md:mb-0">
                        <div className="bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-full w-24  h-24 text-center">
                            <i className="fa-solid fa-location-dot text-5xl text-blue-500 relative top-6"></i>
                        </div>
                        <div className="ml-10 text-xl">
                            <span className="block font-bold">Location</span>
                            <span>Lublin, Polska</span>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-full w-24  h-24 text-center">
                            <i className="fa-solid fa-envelope text-5xl text-blue-500 relative top-6"></i>
                        </div>
                        <div className="ml-10 text-xl">
                            <span className="block font-bold">Mail</span>
                            <span>szymoon.wronski@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSegment
