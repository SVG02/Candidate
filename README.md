This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

Candidate Management Web Application This project is a web application built using React for managing candidate information. It allows users to perform CRUD operations (Create, Read, Update, Delete) on candidate data, including personal details, education, skills, and work experience.

Features Social login integration (Firebase) Display list of candidates and their details Add new candidates with multi-step form Edit and delete candidates Dynamic addition of education, skills, and experience entries RESTful API integration for backend operations
Technologies Used 
1)React
2)Axios for HTTP requests
3)React Router for routing
4)Bootstrap or React Bootstrap for styling
5)Unit testing framework (e.g., Jest, React Testing Library)

Getting Started Prerequisites Node.js and npm installed on your machine Access to the RESTful API endpoints for candidate data (provided URLs) Installation Clone the repository:

bash git clone cd candidate-management-app Install dependencies:

bash npm install Set up environment variables:

Create a .env file in the root directory and add the following:

plaintext REACT_APP_API_BASE_URL=https://60d5a2c2943aa60017768b01.mockapi.io Replace https://60d5a2c2943aa60017768b01.mockapi.io with the base URL of your mock API or backend server.

Start the development server:

bash npm start Open your browser and navigate to http://localhost:3000 to view the app.

Usage Login: Use the social login button on the login page to authenticate. Dashboard: After login, the dashboard displays a list of candidates on the left and details of the selected candidate on the right. Adding a Candidate: Click on the "Add" button to display a new candidate form on the right section. The route changes to /candidate/new. Viewing Candidate Details: Click on a candidate card to view their details. The route changes dynamically to /candidate/<candidate_id>. Editing a Candidate: Within the candidate details view, click on the "Edit" button to edit the candidate's information using a multi-step form.

API Endpoints Get all candidates: GET https://60d5a2c2943aa60017768b01.mockapi.io/candidate b. Create a candidate: POST https://60d5a2c2943aa60017768b01.mockapi.io/candidate c. Update a candidate: PUT https://60d5a2c2943aa60017768b01.mockapi.io/candidate/<candidate_id> d. Delete a candidate: DELETE https://60d5a2c2943aa60017768b01.mockapi.io/candidate/<candidate_id>
