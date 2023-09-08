import React from 'react'
import vise_project from '../Assets/vise_project.png'
import simp_project from '../Assets/simp_project.png'
import reddit_clone_project from '../Assets/reddit_clone_project.png'


const Projects = () => {
    return (
        <div id="projects" className='w-screen flex flex-col items-center pt-16 -z-25'>
            <span className="text-6xl font-bold text-[#EAB308] px-10 py-4">
                PROJECTS
            </span>
            <div className="flex flex-col">
                <div className="flex w-[300px] flex-col backdrop-blur basis-auto bg-[#F4DED6]/20 border-0 rounded-xl p-5 mt-5 relative">
                    <img className='border-0 rounded-xl max-h-[350px] max-w-[400px]' src={vise_project} alt=' ' />
                    <div className='p-2'>
                        <span className='text-[#F3F4F6] text-lg font-bold'>VISE - Visually Impaired Shopping Experience</span>
                        <br></br>
                        <span className='text-[#F3F4F6] text-sm'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                    </div>
                </div>
                <div className="flex w-[300px] flex-col backdrop-blur basis-auto bg-[#F4DED6]/20 border-0 rounded-xl p-5 mt-5">
                    <img className='border-0 rounded-xl max-h-[350px] max-w-[400px]' src={simp_project} alt=' ' />
                    <div className='p-2'>
                        <span className='text-[#F3F4F6] text-lg font-bold'>SIMP - Student Internship Management Program</span>
                        <br></br>
                        <span className='text-[#F3F4F6] text-sm'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                    </div>
                </div>
                <div className="flex w-[300px] flex-col backdrop-blur basis-auto bg-[#F4DED6]/20 border-0 rounded-xl p-5 mt-5">
                    <img className='border-0 rounded-xl max-h-[350px] max-w-[400px]' src={reddit_clone_project} alt=' ' />
                    <div className='p-2'>
                        <span className='text-[#F3F4F6] text-lg font-bold'>Reddit Clone</span>
                        <br></br>
                        <span className='text-[#F3F4F6] text-sm'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects