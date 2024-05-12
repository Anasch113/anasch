import React from 'react'
import { div } from 'three/examples/jsm/nodes/Nodes.js'
import { socialLinks } from "../constants/index"


const ConnectsCards = ({
    index,
    icon,
    link,
    name
}) => {
    return (


        <a href={link} target='_blank' key={index} className='flex items-center justify-center gap-3  px-5 py-2 rounded-full bg-white '>
            <img className='w-12 h-12 ' src={icon} alt="html" />
            <p className='text-black-100 font-semibold text-xl '>{name}</p>
        </a>

    )
}
const ConnectWithMe = () => {
    return (
        <div className='min-h-screen flex items-center justify-center flex-col gap-2 w-full'>

            <h2 className='text-text-yellow md:text-4xl text-3xl font-medium text-center my-10'>Connect With Me</h2>

            <div className='w-full flex flex-wrap px-2 md:px-10 py-4 gap-4 justify-center '>

                {
                    socialLinks.map((links, index) => (
                        <ConnectsCards key={`project-${index}`} index={index} {...links} />
                    ))
                }
            </div>

            <img src="/connectImage.svg" className='md:w-2/4 md:h-2/4 ' alt="" />
        </div>
    )
}

export default ConnectWithMe
