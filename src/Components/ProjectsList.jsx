import React from 'react'
import vise_project from '../Assets/vise_project.png'
import simp_project from '../Assets/simp_project.png'
import reddit_clone_project from '../Assets/reddit_clone_project.png'

const ProjectsList = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-fit">
            <div className="projects-div">
                <img className='projects-div-img' src={vise_project} alt=' ' />
                <div className='p-2'>
                    <span className='projects-div-div-header-text'>VISE - Visually Impaired Shopping Experience</span>
                    <br></br>
                    <span className='projects-div-div-description'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                </div>
            </div>
            <div className="projects-div">
                <img className='projects-div-img' src={simp_project} alt=' ' />
                <div className='p-2'>
                    <span className='projects-div-div-header-text'>SIMP - Student Internship Management Program</span>
                    <br></br>
                    <span className='projects-div-div-description'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                </div>
            </div>
            <div className="projects-div">
                <img className='projects-div-img' src={reddit_clone_project} alt=' ' />
                <div className='p-2'>
                    <span className='projects-div-div-header-text'>Reddit Clone</span>
                    <br></br>
                    <span className='projects-div-div-description'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                </div>
            </div>
        </div>
    )
}

export default ProjectsList