# Interactive Rating Component

This project is an interactive rating component built using modern web technologies. The goal is to create a responsive, user-friendly UI for selecting and submitting a rating, and to provide users with feedback after submitting their rating.

![Rating App](app/public/RatingApp.png)

## Overview

### Built With

- **Semantic HTML5 markup**
- **Mobile-first workflow**
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [Next.js](https://nextjs.org/) - React framework with server-side rendering and static site generation
- [Material UI](https://mui.com/) - React UI framework for fast and customizable components

### Demo
Live view by clicking the link: 
## Features

Your users should be able to:

- View the optimal layout for the app depending on their device's screen size (Responsive Design)
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See a "Thank you" message or card after submitting their rating

## Getting Started

Follow these instructions to get a local copy of the project up and running on your machine for development and testing purposes.

### Prerequisites

To run this project locally, you need to have the following installed:

- [Node.js](https://nodejs.org/) (v12.x or later)
- npm or yarn (Node package managers)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/interactive-rating-component.git

2. Navigate into the project directory:

    ```bash
    cd interactive-rating-component

3. Install the dependencies:

    ```bash
    npm install

4. Install Material UI and its dependencies:

    ```bash
    npm install @mui/material @emotion/react @emotion/styled

5. Start the development server:

    ```bash
    npm run dev

6. Open http://localhost:3000 in your browser to see the app.


## Usage

The interactive rating component allows users to:

- Select a rating from the available options (1–5 stars).
- Submit the rating by clicking the submit button.
- After submission, users will see a "Thank you" card displaying their selected rating.

The project uses **Material UI** to create beautiful, responsive components with a modern design. The **Card** component from Material UI is used to wrap the rating form, and the app's styling is managed through Material UI's **theme** and **Styled Components**.

To modify the design, styles, or logic, you can explore the respective components and modify the code as needed.
