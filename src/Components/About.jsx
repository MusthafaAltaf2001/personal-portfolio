import React from 'react'
import SkillsList from './SkillsList'



const About = () => {
    const aboutText =
        "I'm a passionate software developer with three years of experience in creating software, mainly focusing on the frontend. I love learning and always strive to expand my knowledge in the software world. I find working on software projects exciting because it involves solving problems and using logic, which happens to be one of my strengths."

    return (
        <div id="about" className='flex flex-col items-center pt-16'>
            <span className="text-4xl font-bold text-[#EAB308] px-10 py-4">
                ABOUT
            </span>
            <span className="text-xl text-[#F3F4F6] px-[50px] md:px-[200px] py-4 text-justify xl:px-[450px]">
                {aboutText}
            </span>
            <SkillsList />
        </div>
    )
}

export default About