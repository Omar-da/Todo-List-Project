# To-Do List App

A simple and clean React to-do application built with Create React App, Material UI, and localStorage persistence.

## Features

- Add new tasks
- Mark tasks as completed or not completed
- Edit existing tasks
- Delete tasks
- Filter tasks by:
  - All
  - Completed
  - Not completed
- Persistent task storage using browser localStorage
- Toast notifications for user actions
- RTL layout for Arabic-language usability

## Tech Stack

- React
- JavaScript
- Material UI (MUI)
- React Context
- useReducer for task state management

## Project Structure

```bash
src/
├── App.js
├── App.css
├── components/
│   ├── InputSection.js
│   ├── MainContainer.js
│   ├── Toast.js
│   ├── ToDo.js
│   ├── ToDoBox.js
│   └── ToDoList.js
├── contexts/
│   ├── ToastContext.js
│   └── TodoActionsContext.js
├── reducers/
│   └── TodosReducer.js
├── index.css
├── index.js
├── reportWebVitals.js
├── setupTests.js
└── logo.svg
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Run the app

```bash
npm start
```

The application will run in development mode at:

```text
http://localhost:3000
```

## Available Scripts

### `npm start`
Runs the app in development mode.

### `npm run build`
Creates an optimized production build in the `build` folder.

### `npm test`
Starts the test runner in interactive mode.

## App Behavior

Tasks are stored in the browser's localStorage so they remain available after refreshes. The app supports filtering and updating each task's completion status without losing the user's list state.

## Notes

This project is a lightweight task management app intended for learning and small personal use. It can be extended with features such as due dates, categories, drag-and-drop ordering, or backend persistence.
