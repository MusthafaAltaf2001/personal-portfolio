import React from 'react'
import viseProject from '../Assets/vise_project.png'
import simpProject from '../Assets/simp_project.png'
import redditCloneProject from '../Assets/reddit_clone_project.png'
import reportcareClinicianProject from '../Assets/reportcare_clinician_project.png'
import trackitProject from '../Assets/trackit_project.png'
import tutorStudentBiddingProject from '../Assets/tutor_student_bidding_project.png'


const ProjectsList = () => {
    const viseProjectText = "Specialized E-Commerce platform and personalized tool for visually impaired users where Jo Malone products can be purchased. Consists of an AI computer vision from Microsoft Azure where products can be scanned through the device camera for visually impaired users."
    const simpProjectText = "A platform that allows students to upload their details like Resume and skills, and employers can post internship job postings which students can apply for."
    const redditCloneProjectText = "A cloned version of the website reddit.com which is built using MERN stack (Mongodb, Express.js, React.js and Node.js). This was just a fun project to work on my React skills."
    const reportcareClinicianProjectText = "A healthcare app that can be used by doctors or clinicians which allows them to monitor the health of their patients. It has a builtin alert system that is triggered when a patient is in bad health and reports to the relevant authorities."
    const trackitProjectText = "A tracking system for teams that allows project managers to track progress of work done by each team member. This is done by diaplying the number of man hours put in by each member and also keeps track of how each member is contributing to the team. "
    const tutorStudentBiddingProjectText = "A Bidding system where tutors can post tution classes with a starting bid and students using this system can place bids on a tution post. Once the bidding period is over, the highest bidder is contacted via the platform and an agreement is made beteern the two parties."


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <a href="https://github.com/MusthafaAltaf2001/vise">
                <div className="projects-div">
                    <span className='projects-div-heading'>VISE - Visually Impaired Shopping Experience</span>
                    <img className='projects-div-img' src={viseProject} alt=' ' />
                    <span className='projects-div-description'>{viseProjectText}</span>
                </div>
            </a>
            <a href="https://github.com/MusthafaAltaf2001/student_internship_management_program">
                <div className="projects-div">
                    <span className='projects-div-heading'>SIMP - Student Internship Management Program</span>
                    <img className='projects-div-img' src={simpProject} alt=' ' />
                    <span className='projects-div-description'>{simpProjectText}</span>
                </div>
            </a>
            <a href="https://github.com/MusthafaAltaf2001/reddit-clone-1">
                <div className="projects-div">
                    <span className='projects-div-heading'>Reddit Web Clone - MERN Stack</span>
                    <img className='projects-div-img' src={redditCloneProject} alt=' ' />
                    <span className='projects-div-description'>{redditCloneProjectText}</span>
                </div>
            </a>
            <a href='https://github.com/MusthafaAltaf2001/student_tutor_bidding_system'>
                <div className="projects-div">
                    <span className='projects-div-heading'>Student Tutor Bidding System</span>
                    <img className='projects-div-img' src={tutorStudentBiddingProject} alt=' ' />
                    <span className='projects-div-description'>{tutorStudentBiddingProjectText}</span>
                </div>
            </a>
            <a href='https://github.com/MusthafaAltaf2001/TrackIt.com'>
                <div className="projects-div">
                    <span className='projects-div-heading'>TrackIt - Track and Monitor Teams</span>
                    <img className='projects-div-img' src={trackitProject} alt=' ' />
                    <span className='projects-div-description'>{trackitProjectText}</span>
                </div>
            </a>
            <a href="https://github.com/MusthafaAltaf2001/reportcare-clinician">
                <div className="projects-div">
                    <span className='projects-div-heading'>ReportCare - Patient Health Monitor</span>
                    <img className='projects-div-img' src={reportcareClinicianProject} alt=' ' />
                    <span className='projects-div-description'>{reportcareClinicianProjectText}</span>
                </div>
            </a>
        </div >
    )
}

export default ProjectsList