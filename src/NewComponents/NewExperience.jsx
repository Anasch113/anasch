import React from 'react'
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { experiences } from '../constants';
import { TiLocationArrowOutline } from "react-icons/ti";
import { MdOutlineDateRange } from "react-icons/md";
import { PiPaperPlaneRightLight } from "react-icons/pi";

const NewExperience = () => {


    return (
        <div className='min-h-screen w-full px-5 mb-5'>
            <div className='w-full flex flex-col items-center justify-center'>

                <h2 className='text-text-yellow text-3xl font-medium'>Experience</h2>

                <div className='w-full flex flex-col items-center gap-5 mt-5 '>


                    {/* 1st Box */}
                    {
                        experiences.map((experience, index) => (
                            <div key={index} className={`${index === 1 && "bg-[url('/blurrybg.svg')] bg-cover bg-center bg-gray-200"} w-full md:w-2/3 text-gray-900 justify-center  rounded-3xl bg-white min-h-[400px] gap-4 p-5 `}>


                                <div className='flex md:justify-between max-[500px]:gap-4 max-[500px]:flex-col'>

                                    <span className='bg-tertiary flex  items-center py-1 md:px-3 px-3 rounded-full md:w-64 min-w-[192px]'>
                                        <img src={experience.icon}
                                            alt={experience.company_name} className='md:w-12 md:h-12 h-8 w-8 rounded-full  '>

                                        </img>
                                        <span className='flex flex-col'>
                                            <p className='text-text-yellow font-bold ml-2 text-lg'>{experience.company_name}</p>
                                            <p className='text-white ml-2'>Remote</p>
                                        </span>

                                    </span>

                                    <span className='bg-yellow-200  h-12 px-5 font-bold rounded-full md:min-w-[250px] w-72  flex md:py-4 items-center max-[500px]:text-sm gap-2'>
                                        <MdOutlineDateRange size={20}/>
                                        <p className='text-center'> {experience.date}</p>
                                       
                                    </span>
                                </div>

                                <div className='flex py-8'>
                                    <img src='' alt='' />
                                    <h2 className='text-2xl font-bold'>{experience.title}</h2>
                                </div>

                                <div className='flex flex-col gap-4 p-4 '>
                                    {
                                        experience.points.map((point, index) => (
                                            <span key={index} className='flex flex-row items-center gap-2 '>
                                                <PiPaperPlaneRightLight size={20} />
                                                <p> {point}</p>


                                            </span>
                                        ))
                                    }

                                </div>

                            </div>
                        ))
                    }



                </div>

            </div>
        </div>
    )
}

export default NewExperience
