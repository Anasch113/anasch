import React from 'react'
import { html } from '../assets'
import { technologies } from '../constants'
const NewTechs = () => {
    return (
        <>
            <div className='pt-28 pb-28 relative overflow-hidden  min-h-screen w-full p-5 '>

                {/* parent div */}
                <div className='  flex items-center  w-full  flex-col p-5 '>


                    <h2 className='text-text-yellow md:text-3xl text-2xl font-medium my-5'>Technologies I Use</h2>


                    {/* skills div */}
                    <div className='w-full flex flex-wrap md:px-10 py-5 gap-4 justify-center '>

                        {
                            technologies.map((tech, index) => (
                                <span key={index} className='flex items-center justify-center gap-3  px-5 py-1 rounded-full bg-white '>
                                    <img className='w-12 h-12' src={tech.icon} alt="html" />
                                    <p className='text-black-100 font-semibold text-lg '>{tech.name}</p>
                                </span>
                            ))
                        }

                    </div>
                </div>

                <div className='w-[400px] lg:w-[500px] xl:w-[700px] 2xl:w-[1326px] h-[300px] lg:h-[200px] xl:h-[176px] mapShadow absolute md:left-64 xl:left-72 bottom-96 md:bottom-72 lg:bottom-0'>

                </div>
            </div>



        </>
    )
}

export default NewTechs
