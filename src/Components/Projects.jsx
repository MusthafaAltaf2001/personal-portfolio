import React from 'react'
import ProjectsList from './ProjectsList'


const Projects = () => {
    return (
        <div id="projects" className='flex flex-col items-center -z-25 pt-16'>
            <span className="text-4xl font-bold text-[#EAB308] px-0 sm:px-10 py-4">
                PROJECTS
            </span>
            <ProjectsList />
        </div>
    )
}

export default Projects