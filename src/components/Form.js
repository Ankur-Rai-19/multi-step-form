import React, { useEffect, useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import FormNavigation from "./FormNavigation";
import { validateStep } from "../utils/validation";
import "./Form.css";

const Form = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [submissionError, setSubmissionError] = useState("");

    useEffect(() => {
        const savedData = localStorage.getItem("formData");
        if (savedData) {
            setFormData(JSON.parse(savedData));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("formData", JSON.stringify(formData));
    }, [formData]);

    // Handle Next Button
    const handleNext = () => {
        const validationErrors = validateStep(formData, step);
        if (Object.keys(validationErrors).length === 0) {
            setStep(step + 1);
            setErrors({});
        } else {
            setErrors(validationErrors);
        }
    };

    // Handle Submit Button
    const handleSubmit = () => {
        const validationErrors = validateStep(formData, step);
        if (Object.keys(validationErrors).length === 0) {
            setLoading(true);
            setSubmissionError("");
            setTimeout(() => {
                const success = Math.random() > 0.5;
                setLoading(false);
                if (success) {
                    alert("Form submitted successfully!");
                    localStorage.removeItem("formData");
                    resetForm();
                } else {
                    setSubmissionError(
                        "Failed to submit form. Please try again."
                    );
                }
            }, 2000);
        } else {
            setErrors(validationErrors);
        }
    };

    const resetForm = () => {
        setFormData({
            name: "",
            email: "",
            phone: "",
            address1: "",
            address2: "",
            city: "",
            state: "",
            zip: "",
        });
        setStep(1);
    };

    const steps = [
        <Step1 formData={formData} setFormData={setFormData} errors={errors} />,
        <Step2 formData={formData} setFormData={setFormData} errors={errors} />,
        <Step3 formData={formData} />,
    ];

    return (
        <div>
            {loading && <p>Loading...</p>}
            {submissionError && (
                <p style={{ color: "red" }}>{submissionError}</p>
            )}
            {!loading && steps[step - 1]}
            {!loading && (
                <FormNavigation
                    step={step}
                    setStep={setStep}
                    isLastStep={step === steps.length}
                    isFirstStep={step === 1}
                    handleSubmit={handleSubmit}
                    handleNext={handleNext}
                />
            )}
        </div>
    );
};

export default Form;
