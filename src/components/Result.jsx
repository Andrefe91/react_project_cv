import { Fragment } from "react";
import { useState } from "react";
import { format } from "date-fns";

import Result_section from "./resultSection.jsx";
import Section from "../components/Section.jsx";
import "../styles/Result.css";

export default function Result({ userData }) {
	const personalInfo = userData.personalInfo;
	const educationInfo = userData.educationInfo;
	const experienceInfo = userData.experienceInfo;

	//Checking if the PersonalInfo has information
	const hasPersonalDetails = Object.keys(personalInfo).length > 0;

	//Listing the personal information
	const personalDetails = (() => {
		if (hasPersonalDetails) {
			return (
				<Result_section>
					<div className="cardInformation">
						<h3>{[personalInfo.firstName, personalInfo.lastName].join(" ")}</h3>
						<p>{personalInfo.title}</p>
						<p>{personalInfo.email}</p>
						<p>{personalInfo.phone}</p>
						<p>{personalInfo.nationality}</p>
					</div>
				</Result_section>
			);
		} else {
			return (
				<Result_section>
					<p>No Personal Information available</p>
				</Result_section>
			);
		}
	})();

	// Checking if the Education array has information
	const hasEducation = educationInfo.some(
		(education) => Object.keys(education).length > 0,
	);

	// Listing the education information
	const educationList = (() => {
		if (hasEducation) {
			//Return the list as a single array
			return educationInfo.map((education, index) => {
				//Return each and every entry
				return (
					<Result_section key={index}>
						<div className="cardInformation">
							<h3>
								{education.gradeOfStudies} in {education.areaOfStudies}
							</h3>
							<p>{education.institution} - {education.city}</p>
							<p>{education.country}</p>
							<p>
								{format(
									education.dateFrom == undefined ? Date() : education.dateFrom,
									"MMMM y",
								) +
									" to " +
									format(
										education.dateTo == undefined ? Date() : education.dateTo,
										"MMMM y",
									)}
							</p>
						</div>
					</Result_section>
				);
			});
		} else {
			return (
				<Result_section>
					<p>No Education Information available</p>
				</Result_section>
			);
		}
	})();

	// Checking if the Experience array has information
	const hasExperience = experienceInfo.some(
		(experience) => Object.keys(experience).length > 0,
	);

	// Listing the education information
	const experienceList = (() => {
		if (hasExperience) {
			return experienceInfo.map((work, index) => {
				return (
					<Result_section key={index}>
						<div className="cardInformation">
							<h3>{work.jobTitle}</h3>
							<p>{work.company} -  {work.city}</p>
							<p>{work.country}</p>
							<p>
								{format(
									work.dateFrom == undefined ? Date() : work.dateFrom,
									"MMMM y",
								) +
									" to " +
									format(
										work.dateTo == undefined ? Date() : work.dateTo,
										"MMMM y",
									)}
							</p>
							<p>{work.description}</p>
						</div>
					</Result_section>
				);
			});
		} else {
			return (
				<Result_section>
					<p>No Work Information available</p>
				</Result_section>
			);
		}
	})();

	return (
		<>
			<div className="card-header">
				<h2 className="resultTitle">Personal Information</h2>
			</div>
			{personalDetails}

			<div className="card-header">
				<h2 className="resultTitle">Education Information</h2>
			</div>
			{educationList}

			<div className="card-header">
				<h2 className="resultTitle">Work Experience Information</h2>
			</div>
			{experienceList}
		</>
	);
}
