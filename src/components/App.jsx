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

	let educationInfo = [{}];

	let experienceInfo = [{}];

	const [isFormMode, setIsFormMode] = useState(true);
	const [userData, setUserData] = useState({
		personalInfo: personalInfo,
		educationInfo: educationInfo,
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
			setUserData((prevState) => {
				let updatedUserData = { ...prevState };
				updatedUserData[sectionName][positionId] = {
					...updatedUserData[sectionName][positionId],
					[propertyName]: e.target.value,
				};
				return updatedUserData;
			});
		}
	}

	function addExperience() {
		setUserData((prevState) => {
			let updatedUserData = { ...prevState };
			updatedUserData.experienceInfo.push({});
			return updatedUserData;
		});
	}

	function addEducation() {
		setUserData((prevState) => {
			let updatedUserData = { ...prevState };
			updatedUserData.educationInfo.push({});
			return updatedUserData;
		});
	}

	function deleteFunc(e) {
		let element = e.target.getAttribute("element");
		let id = e.target.getAttribute("id");
		let updatedCategory = [];

		setUserData((prevState) => {
			let updatedUserData = {...prevState };

			updatedUserData[element].map((value, index) => {
				if (index != id) {
					updatedCategory.push(value);
				}
			})

			updatedUserData[element] = updatedCategory;
			return updatedUserData;
		})
	}

	return (
		<>
			<p>Work in progress...</p>

			{isFormMode ? (
				<Form
					userData={userData}
					onChange={userDataManipulation}
					addExperience={addExperience}
					deleteFunc={deleteFunc}
				/>
			) : (
				<Result userData={userData} />
			)}

			<button onClick={() => setIsFormMode(!isFormMode)}>App Mode</button>
		</>
	);
}

export default App;
