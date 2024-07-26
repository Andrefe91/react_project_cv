import { useState } from 'react'
import '../styles/Form.css'

export default function Form({userData, onChange}){


    return (
        <>
            <h3>Form Component</h3>

            <section className="card">
                <div className="card-header">
                    Personal Information
                </div>

                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" id="firstName" name="personalInfo.firstName" value={userData.personalInfo.firstName} onChange={onChange} required/>
                </div>

                <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" id="lastName" name="personalInfo.lastName" value={userData.personalInfo.lastName} onChange={onChange} required/>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="personalInfo.email" value={userData.personalInfo.email} onChange={onChange} required/>
                </div>
            </section>
        </>
    )
}
