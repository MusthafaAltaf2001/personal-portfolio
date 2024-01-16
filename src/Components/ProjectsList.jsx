import React from "react";
import viseProject from "../Assets/vise_project.png";
import simpProject from "../Assets/simp_project.png";
import redditCloneProject from "../Assets/reddit_clone_project.png";
import reportcareClinicianProject from "../Assets/reportcare_clinician_project.png";
import trackitProject from "../Assets/trackit_project.png";
import petvilleProject from "../Assets/petville_project.png";

const ProjectsList = () => {
	const petvilleProjectText =
		"A platform for new and existing pet owners to purchase products and services conveniently and affordably. Allows pet businesses to also promote themselves to customers who are looking for their services and products.";
	const viseProjectText =
		"Partnered with Jo Malone London to create an E-Commerce platform and personalized tool for visually impaired users. Consists of an AI computer vision from Microsoft Azure where products can be scanned through the device camera.";
	const simpProjectText =
		"A platform that conveniently allows students to find internships by simply uploading their details like Resume, skills. Employers can post internship job postings which students can apply for.";
	const redditCloneProjectText =
		"A cloned version of the website reddit.com which is built using MERN stack (Mongodb, Express.js, React.js and Node.js). This was just a fun project to work on my React skills.";
	const reportcareClinicianProjectText =
		"A healthcare app that can be used by doctors or clinicians which allows them to monitor the health of their patients. It has a builtin alert system that is triggered when a patient is in bad health and reports to the relevant authorities.";
	const trackitProjectText =
		"A tracking system for teams that allows project managers to track progress of work done by each team member. This is done by diaplying the number of man hours put in by each member and also keeps track of how each member is contributing to the team. ";

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
			<a href="https://petville.co/">
				<div className="projects-div">
					<span className="projects-div-heading">
						Petville - Petcare Affordable and Convenient
					</span>
					<img
						className="projects-div-img bg-[#EFE9E7]"
						src={petvilleProject}
						alt=" "
					/>
					<span className="projects-div-description">
						{petvilleProjectText}
					</span>
				</div>
			</a>
			<a href="https://github.com/MusthafaAltaf2001/vise">
				<div className="projects-div">
					<span className="projects-div-heading">
						VISE - Visually Impaired Shopping Experience
					</span>
					<img
						className="projects-div-img"
						src={viseProject}
						alt=" "
					/>
					<span className="projects-div-description">
						{viseProjectText}
					</span>
				</div>
			</a>
			<a href="https://github.com/MusthafaAltaf2001/student_internship_management_program">
				<div className="projects-div">
					<span className="projects-div-heading">
						Student Internship Management Program
					</span>
					<img
						className="projects-div-img"
						src={simpProject}
						alt=" "
					/>
					<span className="projects-div-description">
						{simpProjectText}
					</span>
				</div>
			</a>
			<a href="https://github.com/MusthafaAltaf2001/reportcare-clinician">
				<div className="projects-div">
					<span className="projects-div-heading">
						ReportCare - Patient Health Monitor
					</span>
					<img
						className="projects-div-img"
						src={reportcareClinicianProject}
						alt=" "
					/>
					<span className="projects-div-description">
						{reportcareClinicianProjectText}
					</span>
				</div>
			</a>
			<a href="https://github.com/MusthafaAltaf2001/reddit-clone-1">
				<div className="projects-div">
					<span className="projects-div-heading">
						Reddit Web Clone - MERN Stack
					</span>
					<img
						className="projects-div-img"
						src={redditCloneProject}
						alt=" "
					/>
					<span className="projects-div-description">
						{redditCloneProjectText}
					</span>
				</div>
			</a>
			<a href="https://github.com/MusthafaAltaf2001/TrackIt.com">
				<div className="projects-div">
					<span className="projects-div-heading">
						TrackIt - Track and Monitor Teams
					</span>
					<img
						className="projects-div-img"
						src={trackitProject}
						alt=" "
					/>
					<span className="projects-div-description">
						{trackitProjectText}
					</span>
				</div>
			</a>
		</div>
	);
};

export default ProjectsList;
