import { Fragment } from "react";
import { useState } from "react";
import { format } from "date-fns";

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
				<Section>
					<div>
						<h3>{[personalInfo.firstName, personalInfo.lastName].join(" ")}</h3>
						<p>{personalInfo.title}</p>
						<p>{personalInfo.email}</p>
						<p>{personalInfo.phone}</p>
						<p>{personalInfo.nationality}</p>
					</div>
				</Section>
			);
		} else {
			return (
				<Section>
					<p>No Personal Information available</p>
				</Section>
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
					<Section key={index}>
						<div>
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
					</Section>
				);
			});
		} else {
			return (
				<Section>
					<p>No Education Information available</p>
				</Section>
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
					<Section key={index}>
						<div>
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
					</Section>
				);
			});
		} else {
			return (
				<Section>
					<p>No Work Information available</p>
				</Section>
			);
		}
	})();

	return (
		<>
			<h3>Personal Details</h3>
			{personalDetails}

			<h3>Education</h3>
			{educationList}

			<h3>Work Experience</h3>
			{experienceList}
		</>
	);
}
