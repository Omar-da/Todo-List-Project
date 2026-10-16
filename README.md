# To-Do List App

A simple and clean React to-do application built with Create React App, Material UI, and localStorage persistence.

## Project Link

[View the project](https://www.linkedin.com/safety/go/?url=https%3A%2F%2Flnkd.in%2FeisJkxdH&urlhash=lyiL&mt=whB8BJ2e88M8_n5DGu63NUp-q8VGc2Blp6L2nEF-yP1Hda2uOZcSVIQzHoxpqQJJAuqMPVZgHnpdZqIZbdHkEwjEmz1SjDFtZelxhWXLXm7-IU9KJMBZa0r5j1I&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BiIBS3Y3gSV2q%2FXAlgwwywA%3D%3D)

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
