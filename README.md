# Worker Management App

This application is a simple worker management tool built with React. It allows users to add workers with details like name, surname, gender, and wage, and also to delete workers from the list. The app ensures data validation to maintain accurate worker information and prevent missing or incorrect details.

## Features

- **Add New Workers**: Users can add new workers to the list by filling out a form with the following details:
  - Name
  - Surname
  - Gender (Male/Female)
  - Wage (must be higher than a predefined minimum wage)

- **Form Validation**: The form ensures that all fields are properly filled before submitting:
  - Name and surname are required.
  - Gender selection is mandatory (radio buttons for Male or Female).
  - The wage must be greater than or equal to the minimum wage (5000 by default).

- **Error Handling**: If any field is missing or invalid, the user is shown an error modal with a relevant message, ensuring that they fill the form correctly.


## Technologies Used

- **React**: The core framework used for building the app.
- **CSS/ Tailwind**: Used for styling the components.
- **State Management**: Handled using React’s `useState` hook.
- **Error Modal**: A reusable modal component to display error messages and confirmations.

## Installation

1. Clone this repository:
    ```bash
    git clone https://github.com/your-username/worker-management-app.git
    ```

2. Navigate to the project directory:
    ```bash
    cd worker-management-app
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm start
    ```

The app will now be running on [http://localhost:3000](http://localhost:3000).

## How to Use

1. Open the app in your browser.
2. Fill in the "Add Worker" form with the required information (name, surname, gender, wage).
3. Click "Add" to add the worker to the list.
4. If any information is missing or incorrect, a modal will appear with an error message.
5. Clicking on the employee will delete the employee.


This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
