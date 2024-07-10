import React from "react";

const FormNavigation = ({
    step,
    setStep,
    isLastStep,
    isFirstStep,
    handleSubmit,
    handleNext,
}) => {
    return (
        <div>
            {!isFirstStep && (
                <button onClick={() => setStep(step - 1)}>Back</button>
            )}
            {!isLastStep ? (
                <button onClick={handleNext}>Next</button>
            ) : (
                <button onClick={handleSubmit}>Submit</button>
            )}
        </div>
    );
};

export default FormNavigation;
