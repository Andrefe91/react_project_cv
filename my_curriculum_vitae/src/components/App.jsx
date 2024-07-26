import { useState } from "react";

import "../styles/App.css";
import Form from "./Form.jsx";
import Result from "./Result.jsx";

function App() {
	let personalInfo = {
		firstName: "",
		lastName: "",
		title: "",
		email: "",
		phone: "",
		gender: "Male",
		nationality: "United States",
	};

	let educationalInfo = [{}];

	let experienceInfo = [{}, {}];

	const [isFormMode, setIsFormMode] = useState(true);
	const [userData, setUserData] = useState({
		personalInfo: personalInfo,
		educationalInfo: educationalInfo,
		experienceInfo: experienceInfo,
	});

	function userDataManipulation(e) {
		const [sectionName, propertyName, positionId] = e.target.name.split(".");

		if (sectionName == "personalInfo") {
			setUserData({
				...userData,
				[sectionName]: {
					...userData[sectionName],
					[propertyName]: e.target.value,
				},
			});
		} else {
			setUserData({
				...userData,
				[sectionName]: {
					...userData[sectionName],
					[positionId]: {
						//Returns the array in the positionId
						...userData[sectionName][positionId],
						[propertyName]: e.target.value,
					},
				},
			});
		}
	}

	function addExperience() {
		// [Todo]
	}

	function addEducation() {
		// [Todo]
	}

	return (
		<>
			<p>Work in progress...</p>

			{isFormMode ? (
				<Form userData={userData} onChange={userDataManipulation} />
			) : (
				<Result userData={userData} />
			)}

			<button onClick={() => setIsFormMode(!isFormMode)}>App Mode</button>
		</>
	);
}

export default App;
