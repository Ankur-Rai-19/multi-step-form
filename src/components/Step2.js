import React from "react";

const Step2 = ({ formData, setFormData, errors }) => {
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h2>Address Information</h2>

            <div>
                <label>Address Line 1:</label>
                <input
                    name="address1"
                    value={formData.address1}
                    onChange={handleChange}
                />
                {errors.address1 && <span>{errors.address1}</span>}
            </div>
            <div>
                <label>Address Line 2:</label>
                <input
                    name="address2"
                    value={formData.address2}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>City:</label>
                <input
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                />
                {errors.city && <span>{errors.city}</span>}
            </div>
            <div>
                <label>State:</label>
                <input
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                />
                {errors.state && <span>{errors.state}</span>}
            </div>
            <div>
                <label>Zip Code:</label>
                <input
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                />
                {errors.zip && <span>{errors.zip}</span>}
            </div>
        </div>
    );
};

export default Step2;
