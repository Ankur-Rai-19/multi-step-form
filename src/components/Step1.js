import React from "react";

const Step1 = ({ formData, setFormData, errors }) => {
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h2>Personal Information</h2>

            <div>
                <label>Name:</label>
                <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                {errors.name && <span>{errors.name}</span>}
            </div>
            <div>
                <label>Email:</label>
                <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <span>{errors.email}</span>}
            </div>
            <div>
                <label>Phone:</label>
                <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                />
                {errors.phone && <span>{errors.phone}</span>}
            </div>
        </div>
    );
};

export default Step1;
