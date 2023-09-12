import React from 'react'
import viseProject from '../Assets/vise_project.png'
import simpProject from '../Assets/simp_project.png'
import redditCloneProject from '../Assets/reddit_clone_project.png'
import reportcareClinicianProject from '../Assets/reportcare_clinician_project.png'
import trackitProject from '../Assets/trackit_project.png'
import tutorStudentBiddingProject from '../Assets/tutor_student_bidding_project.png'


const ProjectsList = () => {
    // const vise_project_text = ""
    // const simp_project_text = ""
    // const vise_project_text = ""
    // const vise_project_text = ""
    // const vise_project_text = ""
    // const vise_project_text = ""


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <a href="https://github.com/MusthafaAltaf2001/vise">
                <div className="projects-div">
                    <span className='projects-div-heading'>VISE - Visually Impaired Shopping Experience</span>
                    <img className='projects-div-img' src={viseProject} alt=' ' />
                    <span className='projects-div-description'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                </div>
            </a>
            <a href="https://github.com/MusthafaAltaf2001/student_internship_management_program">
                <div className="projects-div">
                    <span className='projects-div-heading'>SIMP - Student Internship Management Program</span>
                    <img className='projects-div-img' src={simpProject} alt=' ' />
                    <span className='projects-div-description'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                </div>
            </a>
            <a href="https://github.com/MusthafaAltaf2001/reddit-clone-1">
                <div className="projects-div">
                    <span className='projects-div-heading'>Reddit Web Clone - MERN Stack</span>
                    <img className='projects-div-img' src={redditCloneProject} alt=' ' />
                    <span className='projects-div-description'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                </div>
            </a>
            <a href='https://github.com/MusthafaAltaf2001/student_tutor_bidding_system'>
                <div className="projects-div">
                    <span className='projects-div-heading'>Student Tutor Bidding System</span>
                    <img className='projects-div-img' src={tutorStudentBiddingProject} alt=' ' />
                    <span className='projects-div-description'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                </div>
            </a>
            <a href='https://github.com/MusthafaAltaf2001/TrackIt.com'>
                <div className="projects-div">
                    <span className='projects-div-heading'>TrackIt - Track and Monitor Teams</span>
                    <img className='projects-div-img' src={trackitProject} alt=' ' />
                    <span className='projects-div-description'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                </div>
            </a>
            <a href="https://github.com/MusthafaAltaf2001/reportcare-clinician">
                <div className="projects-div">
                    <span className='projects-div-heading'>ReportCare - Patient Health Monitor</span>
                    <img className='projects-div-img' src={reportcareClinicianProject} alt=' ' />
                    <span className='projects-div-description'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                </div>
            </a>
        </div >
    )
}

export default ProjectsList