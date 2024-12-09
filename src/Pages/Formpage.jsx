import React, { useState } from 'react';
import '../Style/Formpage.css'; // CSS for styling the form

const FormPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        institute: '',
        education: '',
        internship: '',
        startDate: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted', formData);
        localStorage.setItem('formData', JSON.stringify(formData));
        alert('Application Submitted Successfully!');
    };

    return (
        <div className="form-container">
            <h2>Internship Application Form</h2>
            <form onSubmit={handleSubmit}>
                {/* Full Name */}
                <label>
                    Full Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                    />
                </label>

                {/* Email */}
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                    />
                </label>

                {/* Phone Number */}
                <label>
                    Phone Number:
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        required
                    />
                </label>

                {/* Address */}
                <label>
                    Institute:
                    <input
                        type="text"
                        name="institute"
                        value={formData.institute}
                        onChange={handleChange}
                        placeholder="Enter your Institute name"
                        required
                    />
                </label>

                {/* Education Level */}
                <label>
                    Education :
                    <select
                        name="education"
                        value={formData.education}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select your education level</option>
                        <option value="High School">High School</option>
                        <option value="Undergraduate">Undergraduate</option>
                        <option value="Graduate">Graduate</option>
                        <option value="Postgraduate">Postgraduate</option>
                    </select>
                </label>

                {/* Internship Program */}
                <label>
                    Internship Program:
                    <select
                        name="internship"
                        value={formData.internship}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select an Internship</option>
                        <option value="Data Science">Data Science</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Cyber Security">Cyber Security</option>
                        <option value="Data Analytics">Data Analytics</option>
                        <option value="AI & Machine Learning">AI & Machine Learning</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Business Analysis">Business Analysis</option>
                    </select>
                </label>

                {/* Start Date */}
                {/* <label>
                    Preferred Start Date:
                    <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        required
                    />
                </label> */}

                {/* Additional Message */}
                <label>
                    Additional Message (Optional):
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Enter any additional details or preferences"
                        rows="4"
                    ></textarea>
                </label>

                

                {/* Submit Button */}
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
};

export default FormPage;
