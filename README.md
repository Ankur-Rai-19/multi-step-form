# **Multi-Step Form with React** 🚀

This project implements a responsive multi-step form using React.js with features such as data validation, error handling, navigation controls, local storage persistence, and step-by-step navigation.

## ⭐ Project Overview
This project aims to create a multi-step form with three steps to collect user information, ensure data validation, handle errors, and navigate between form steps. The form data is saved to local storage and validated before moving to the next step. After successful submission, the form data is cleared, and the form resets for new input.

## Features

- Multi-step navigation with tabbed interface
- Client-side validation with error messages
- Data persistence using local storage
- Responsive design for desktop, tablet, and mobile screens
- Simulated API call with error handling
- Smooth transitions between form steps

- ## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Ankur-Rai-19/multi-step-form

2. Navigate into the project directory:
    ```bash
    cd multi-step-form

3. Install dependencies:
    ```bash
    npm install

4. Start the development server:
    ```bash
    npm start

5. Open the application in your browser:
    ```bash
    http://localhost:3000

## Usage
1. Step 1: Personal Information
    - Enter your Name, Email, and Phone number.
    - Click "Next" to proceed to the next step.
  
2. Step 2: Address Information
    - Enter your Address Line 1, Address Line 2, City, State, and Zip Code.
    - Click "Next" to proceed to the next step.
  
3. Step 3: Confirmation
    - Review all entered data.
    - Click "Submit" to complete the form submission.
  
4. Form Submission
    - After successful submission, an alert will confirm the submission.
    - The form will reset, allowing new data entry

## File Structure
    multi-step-form/
    │
    ├── public/
    │   ├── index.html
    │   └── ...
    │
    ├── src/
    │   ├── components/
    │   │   ├── Step1.js
    │   │   ├── Step2.js
    │   │   ├── Step3.js
    │   │   ├── Form.js
    │   │   ├── FormNavigation.js
    │   │   └── Form.css
    │   │
    │   ├── utils/
    │   │   ├── validation.js
    │   │   └── ...
    │   │
    │   ├── App.js
    │   ├── index.js
    │   ├── App.css
    │   └── ...
    │
    ├── .gitignore
    ├── package.json
    ├── README.md
    └── ...

## Site is live at:
