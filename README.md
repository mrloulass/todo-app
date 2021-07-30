# todo-app
To Do List Manager allows the user to make some display choices that the app will use by default.

## Author: Louis Lassegue

## Setup

In the project directory, you can run:

`npm start`
- Runs the app in the development mode.
- Open http://localhost:3000 to view it in the browser.

- The page will reload if you make edits.
- You will also see any lint errors in the console.

`npm test`
- Launches the test runner in the interactive watch mode.
- See the section about running tests for more information.

- add a `.env` file to add your SECRET for server API

## Development Process

### Phase 1: Application Setup
- Basic To Do List Management, using Hooks
  - Global State
  - Context API

- Scaffolding

### Phase 2:  Persistence
- adding an editor so that users can save their preferences for the application, allowing them to change some of the default behaviors
  - Implement a custom Form Hook
  - Connect to a live API for storing To Do Items

### Phase 3: 
- extend the functionality of the application by requiring users be logged in to view items and also restrict access based on user type. 
  - Provide an account login screen
    - Provide an account login screen
    - On successful login, store the token as a cookie

### Phase 4: 
- Integrating with a live API
  - functionality of the application by connecting to live servers for login, authorization, and data access

## Tests
- Tests all behavioral functionality
- Testing server CRUD for todos

## UML


## Links

- [Netlify](https://nervous-goodall-c217b0.netlify.app/)
- [Todo-Backend](https://github.com/mrloulass/backend-todo-app)
