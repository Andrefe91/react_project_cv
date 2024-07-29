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
				<h3>Education Experience Component</h3>
			</div>

			<Section>
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

                <button onClick={addBlock} element="educationInfo">Add Education</button>
			</Section>

			<div className="card-header">
				<h3>JobExperience Component</h3>
			</div>

			<Section>
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

				<button onClick={addBlock} element="experienceInfo">Add Experience</button>
			</Section>
		</>
	);
}
