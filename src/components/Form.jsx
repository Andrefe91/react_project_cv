import Section from '../components/Section.jsx'
import JobExperience from './JobExperience.jsx'

import '../styles/Form.css'
import PersonalInfo from './PersonalInfo.jsx'

export default function Form({userData, onChange}){


    return (
        <>
            <h3>Form Component</h3>

            <Section> {/* Component */}
                <PersonalInfo userData={userData} onChange={onChange}/>
            </Section>

            <Section>
                <JobExperience userData={userData} onChange={onChange} positionId={0}/>
                <JobExperience userData={userData} onChange={onChange} positionId={1}/>
            </Section>
        </>
    )
}
