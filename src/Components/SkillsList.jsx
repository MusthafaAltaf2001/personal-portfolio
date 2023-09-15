import React from 'react'
import javascript_logo from '../Assets/Logos/javascript_logo.svg'
import git_logo from '../Assets/Logos/git_logo.svg'
import nodejs_logo from '../Assets/Logos/nodejs_logo.svg'
import reactjs_logo from '../Assets/Logos/reactjs_logo.svg'
import tailwindcss_logo from '../Assets/Logos/tailwindcss_logo.svg'
import vuejs_logo from '../Assets/Logos/vuejs_logo.svg'
import java_logo from '../Assets/Logos/java_logo.svg'
import material_ui_logo from '../Assets/Logos/material_ui_logo.svg'
import microsoft_azure_logo from '../Assets/Logos/microsoft_azure_logo.svg'
import mongodb_logo from '../Assets/Logos/mongodb_logo.svg'
import python_logo from '../Assets/Logos/python_logo.svg'
import redux_logo from '../Assets/Logos/redux_logo.svg'
import C_program_logo from '../Assets/Logos/C_program_logo.svg'
import jira_logo from '../Assets/Logos/jira_logo.svg'
import trello_logo from '../Assets/Logos/trello_logo.svg'
import aws_logo from '../Assets/Logos/aws_logo.svg'



const SkillsList = () => {
    return (
        <div className="flex flex-col flex-wrap items-center text-[#F3F4F6] my-5">
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                <div className="about-skills-div">
                    <img className="about-skills-div-img" src={javascript_logo} alt='' />
                    <span>Javascript</span>
                </div>
                <div className="about-skills-div">
                    <img className="about-skills-div-img" src={python_logo} alt='' />
                    <span>Python</span>
                </div>
                <div className="about-skills-div">
                    <img className="about-skills-div-img" src={java_logo} alt='' />
                    <span>Java</span>
                </div>
                <div className="about-skills-div">
                    <img className="about-skills-div-img" src={C_program_logo} alt='' />
                    <span>C Program</span>
                </div>
                <div className="about-skills-div">
                    <img className="about-skills-div-img" src={git_logo} alt='' />
                    <span>Git</span>
                </div>
                <div className="about-skills-div">
                    <img className="about-skills-div-img" src={vuejs_logo} alt='' />
                    <span>Vuejs</span>
                </div>
                <div className="about-skills-div">
                    <img className="about-skills-div-img" src={reactjs_logo} alt='' />
                    <span>React</span>
                </div>
                <div className="about-skills-div">
                    <img className="about-skills-div-img" src={redux_logo} alt='' />
                    <span>Redux</span>
                </div>
                <div className="about-skills-div">
                    <img className="about-skills-div-img" src={tailwindcss_logo} alt='' />
                    <span>TailwindCSS</span>
                </div>
                <div className="about-skills-div">
                    <img className="about-skills-div-img" src={material_ui_logo} alt='' />
                    <span>Material UI</span>
                </div>
                <div className="about-skills-div">
                    <img className="about-skills-div-img" src={microsoft_azure_logo} alt='' />
                    <span>Microsoft Azure</span>
                </div>
                <div className="about-skills-div">
                    <img className="about-skills-div-img" src={aws_logo} alt='' />
                    <span>AWS</span>
                </div>
                <div className="about-skills-div">
                    <img className="about-skills-div-img" src={nodejs_logo} alt='' />
                    <span>Nodejs</span>
                </div>
                <div className="about-skills-div">
                    <img className="about-skills-div-img" src={mongodb_logo} alt='' />
                    <span>MongoDB</span>
                </div>
                <div className="about-skills-div">
                    <img className="about-skills-div-img" src={trello_logo} alt='' />
                    <span>Trello</span>
                </div>
                <div className="about-skills-div">
                    <img className="about-skills-div-img" src={jira_logo} alt='' />
                    <span>Jira</span>
                </div>
            </div>
        </div>
    )
}

export default SkillsList