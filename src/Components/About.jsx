import React from 'react'
import javascript_logo from '../Assets/Logos/javascript_logo.svg'
import git_logo from '../Assets/Logos/git_logo.svg'
import nodejs_logo from '../Assets/Logos/nodejs_logo.svg'
import reactjs_logo from '../Assets/Logos/reactjs_logo.svg'
import tailwindcss_logo from '../Assets/Logos/tailwindcss_logo.svg'
import vuejs_logo from '../Assets/Logos/vuejs_logo.svg'



const About = () => {
    return (
        <div id="about" className='flex flex-col items-center'>
            <span className="text-6xl font-bold text-[#EAB308] px-10 py-4">
                ABOUT
            </span>
            <span className="text-xl text-[#F3F4F6] px-[150px] py-4">
                Passionate software developer with 3 years experience in developing softwares with varying technologies. My experience is not only limited to software development, but also managing teams, JIRA boards and professional communication amongst clients. Passionate software developer with 3 years experience in developing softwares with varying technologies. My experience is not only limited to software development, but also managing teams, JIRA boards and professional communication amongst clients
            </span>
            <div className="flex flex-col flex-wrap h-screen items-center text-[#F3F4F6]">
                <div className="about-skills-div">
                    <img className="about-skills-div-img" src={javascript_logo} alt='' />
                    <span>Javascript</span>
                </div>
                <div className="about-skills-div">
                    <img className="about-skills-div-img" src={git_logo} alt='' />
                    <span>Git</span>
                </div>
                <div className="about-skills-div">
                    <img className="about-skills-div-img" src={nodejs_logo} alt='' />
                    <span>Nodejs</span>
                </div>
                <div className="about-skills-div">
                    <img className="about-skills-div-img" src={reactjs_logo} alt='' />
                    <span>Reactjs</span>
                </div>
                <div className="about-skills-div">
                    <img className="about-skills-div-img" src={tailwindcss_logo} alt='' />
                    <span>TailwindCSS</span>
                </div>
                <div className="about-skills-div">
                    <img className="about-skills-div-img" src={vuejs_logo} alt='' />
                    <span>Vuejs</span>
                </div>
            </div>
        </div>
    )
}

export default About