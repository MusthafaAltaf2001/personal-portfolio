import React from 'react'
import SkillsList from './SkillsList'



const About = () => {
    return (
        <div id="about" className='flex flex-col items-center'>
            <span className="text-6xl font-bold text-[#EAB308] px-10 py-4">
                ABOUT
            </span>
            <span className="text-xl text-[#F3F4F6] px-[50px] md:px-[200px] py-4 text-justify xl:px-[450px]">
                Passionate software developer with 3 years experience in developing softwares with varying technologies. My experience is not only limited to software development, but also managing teams, JIRA boards and professional communication amongst clients. Passionate software developer with 3 years experience in developing softwares with varying technologies. My experience is not only limited to software development, but also managing teams, JIRA boards and professional communication amongst clients
            </span>
            <SkillsList />
        </div>
    )
}

export default About