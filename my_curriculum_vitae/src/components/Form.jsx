import { Fragment } from "react";
import uniqid from "uniqid";
import Section from "../components/Section.jsx";
import JobExperience from "./JobExperience.jsx";

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
			<h3>Form Component</h3>

			<Section>
				{" "}
				{/* Component */}
				<PersonalInfo userData={userData} onChange={onChange} />
			</Section>

			<Section>
				{userData.experienceInfo.map((value, index) => {
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
