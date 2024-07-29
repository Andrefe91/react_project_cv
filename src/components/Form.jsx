import { Fragment } from "react";
import Section from "../components/Section.jsx";
import JobExperience from "./JobExperience.jsx";
import EducationExperience from "./educationExperience.jsx";

import "../styles/Form.css";
import PersonalInfo from "./PersonalInfo.jsx";

export default function Form({
	userData,
	onChange,
	addBlock,
	deleteFunc,
}) {
	return (
		<>
			<div className="card-header">
				<h2>Personal Information</h2>
			</div>

			<Section>
				<PersonalInfo userData={userData} onChange={onChange} />
			</Section>

			<div className="card-header">
				<h2>Education Information</h2>
			</div>

			<Section>
				{userData.educationInfo.length == 0 && <p>[ Add an Education block to edit ] </p>}

				{userData.educationInfo.map((_, index) => {
					return (
						<Fragment key={index}>
							<EducationExperience
								userData={userData}
								onChange={onChange}
								positionId={index}
								deleteFunc={deleteFunc}
							/>

							{userData.educationInfo[index + 1] != undefined && <hr />}
						</Fragment>
					);
				})}
                <br />

			</Section>
			<button className="addBlock" onClick={addBlock} element="educationInfo">Add Education</button>

			<div className="card-header">
				<h2>Work Experience Information</h2>
			</div>

			<Section>
				{userData.experienceInfo.length == 0 && <p>[ Add a Work Experience block to edit ] </p>}

				{userData.experienceInfo.map((_, index) => {
					return (
						<Fragment key={index}>
							<JobExperience
								userData={userData}
								onChange={onChange}
								positionId={index}
								deleteFunc={deleteFunc}
							/>

							{userData.experienceInfo[index + 1] != undefined && <hr />}
						</Fragment>
					);
				})}
				<br />

			</Section>

			<button className="addBlock" onClick={addBlock} element="experienceInfo">Add Work Experience</button>
		</>
	);
}
