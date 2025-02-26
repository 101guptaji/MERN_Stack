# "Job Application Portal"
### Objective: Build a Job Application Portal that simulates an interactive, multi-step job application process. The app will use custom hooks for form handling, Redux for managing applications, dynamic routing for viewing job details, Context API for user information, and form validation.

# App Requirements:
    Home Page:
        Display a list of available job positions with titles, company names, and brief descriptions.
        Each job should have a "View Details" button that navigates to a job detail page.
    
    Job Details Page:
        Display detailed information about the job, including title, company, full description, requirements, and salary.
        Show an "Apply Now" button that navigates to a multi-step application form.
    
    Application Form:
        The application process should be divided into three steps:
        Step 1: Personal Information – Name, email, phone number.
        Step 2: Experience – Years of experience, skills (allow users to add multiple skills dynamically).
        Step 3: Additional Information – Cover letter, preferred start date.
        Each step should have a "Next" button (except the final step, which should have "Submit").
        Include form validation to check for required fields and validate inputs.
        On submission, add the application to the global application state.

    Application Summary Page:
        Display a summary of the submitted application information.
        Show an "Edit Application" button, allowing the user to go back and edit any of the three steps.

    Application List Page:
        Display all submitted applications with job title, applicant name, and a short summary.
        Each application should have a "View Details" button to navigate to a detailed view of the application.

    User Profile and Settings:
        Create a UserContext to store and provide user profile data (username, email).
        Allow users to update their profile on a Profile Page.
        Display the logged-in user’s name and email in the header.

# Technical Requirements
    Routing (React Router):
        /: Home page listing all job positions.
        /job/:id: Job Details page for the selected job.
        /apply/:id: Multi-step application form for a job.
        /applications: Application List page displaying all applications.
        /applications/:id: Application Summary page for a specific application.
        /profile: Profile page to update user information.

    State Management (Redux):
        Use Redux to manage the state of all submitted applications.
        The application state should store:
            jobId, applicantName, experience, skills, coverLetter, and startDate.
        Define actions to add, edit, and delete applications.
    
    Custom Hooks:
        Create custom hooks for form handling and validation (useForm).
        Use useForm to handle input values, validation, and submission in each step of the application form.

    Global User Context (Context API):
        Set up a UserContext to store and manage user profile data (name, email).
        Use UserContext to display the user’s profile data in the header and allow edits on the Profile page.

    Form Validation:
        Validate required fields (e.g., name, email) and specific formats (e.g., email, phone number).
        Display validation errors on invalid input.

    Conditional Rendering:
        Show appropriate buttons for each step of the form (e.g., "Next" on steps 1 and 2, "Submit" on step 3).
        Display "Edit Application" on the Application Summary page.


## UI Screenshots:
Home Page <img src="./src/Screenshots/HandyJobs HomePage.png" /> <br/>
Job Details <img src="./src/Screenshots/HandyJobs JobDetailsPage.png" /><br/>
Job Apply <img src="./src/Screenshots/HandyJobs JobApplyPage.png" /><br/>
Application Step1 <img src="./src/Screenshots/HandyJobs ApplicationPage1.png" /><br/>
Application Form Validations <img src="./src/Screenshots/HandyJobs ApplicationPage2.png" /><br/>
Application Step2 <img src="./src/Screenshots/HandyJobs ApplicationPage3.png" /><br/>
Application Step3 <img src="./src/Screenshots/HandyJobs ApplicationPage4.png" /><br/>
Application Summary <img src="./src/Screenshots/HandyJobs ApplicationSummary.png" /><br/>
Job Applied <img src="./src/Screenshots/HandyJobs Applied.png" /><br/>


