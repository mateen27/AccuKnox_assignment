# Dashboard Widget Manager

## Description

The Dashboard Widget Manager is a modern web application built with React.js, Tailwind CSS, and Zustand for state management. It allows users to add, remove and search widgets from a selected dashboard. The application utilizes Material UI (MUI) for components like Drawer and Modal, and integrates several chart libraries including React Circular Progressbar, React Minimal Pie Chart, and Recharts for dynamic data visualization.

> ***Note***: Screenshots and screen recordings of the application have been added below.

## Installation Instructions

### Getting Started

> **Note**: Make sure you have completed the [React.js - Environment Setup](https://reactjs.org/docs/getting-started.html) instructions till the "Getting Started" step, before proceeding. Additionally, ensure that **Node.js** is installed on your system. You can download it from [nodejs.org](https://nodejs.org/).


## Step 1: Clone the repository

To set up the project locally, follow these steps:
```bash
git clone https://github.com/mateen27/Accuknox.git
```

## Step 2: Navigate to the project folder

Opening the project folder locally inside our system.
```bash
cd Accuknox
```

Once we are inside our project directory locally in our system we need to install some node dependencies which are required in our project:

## Step 3: Install the dependencies
```bash
npm i
```
or 
```bash
npm install
```
> ***Note***: Use the npm commands in the command line interface (CMD) or terminal according to your operating system:

***Windows:*** Use the Command Prompt (CMD) or PowerShell.

***macOS/Linux:*** Use the Terminal.

## Step 4: Start the development server:
```bash
npm run dev
```

>***Important***: Make sure you are in the same project folder where you ran the npm install command. The application will start running at [http://localhost:3000](http://localhost:5173/). 


If everything is set up _correctly_, you should see your app running in your browser.

## Tech Stack

- **React.js**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for creating responsive designs.
- **Zustand**: A state management library for React.
- **MUI**: A React component library for Material Design.
- **React Circular Progressbar**: A circular progress indicator for React.
- **React Minimal Pie Chart**: A minimal pie chart component for React.
- **Recharts**: A chart library built with React components.

## Project Structure

| Directory/File         | Description                                                     |
|------------------------|-----------------------------------------------------------------|
| `src/`                 | Contains all the source code                                    |
| `src/components/`      | Reusable components like `Drawer`, `Modal`, and widgets         |
| `src/data/`            | Holds the JSON raw data for dashboard categories and its widgets|
| `src/store/`           | Zustand store for state management                              |
| `public/`              | Public assets like images and icons                             |
| `package.json`         | Project metadata and dependencies                               |
| `README.md`            | This file                                                       |


## Usage

- **Adding Widgets**: Select a dashboard and use the interface to add widgets.
- **Removing Widgets**: Select a dashboard and remove widgets as needed.
- **Widgets Management**: Widgets can be managed through checkboxes, and the layout will adjust accordingly.
- **Searching Widgets**: Use the search feature to quickly find and add specific widgets to the dashboard.


## Screenshots
![Screenshot (281)](https://github.com/user-attachments/assets/ce6eaf90-d16e-4392-98a5-0b537f90fbc6)


![Screenshot (283)](https://github.com/user-attachments/assets/2d3891f6-53f7-4288-a141-ecf15a4fbddc)


![Screenshot (284)](https://github.com/user-attachments/assets/8ef08792-31f4-4961-bdc8-0c0cef0e8b9f)


![Screenshot (286)](https://github.com/user-attachments/assets/b7e4bb7a-4584-4689-b2b7-0529405790d4)


![Screenshot (287)](https://github.com/user-attachments/assets/23eb2f71-8224-4b90-8602-5b7754fe01d6)


## Screen Recording

https://github.com/user-attachments/assets/7259cda1-402e-4402-8210-f803a632d7b3

## Acknowledgments
Thanks to the creators of React, Tailwind CSS, Zustand, MUI, and the chart libraries for their excellent work.