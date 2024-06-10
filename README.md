# ToDo App

This is a simple ToDo application built using HTML, CSS, and JavaScript. It allows users to add tasks, categorize them, and save the tasks in local storage. The tasks can be filtered by category for easier management. The project is hosted from the `dist` folder, and a subtree branch has been created in the main repo for deployment purposes.

## Features

- Add new tasks with descriptions and due dates
- Categorize tasks into Work, Personal, Shopping, and Other
- Save tasks to local storage for persistence across page refreshes
- Filter tasks by category
- Delete tasks

## Table of Contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Setup](#setup)
  - [Installation](#installation)
  - [Usage](#usage)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### Screenshot

![ToDo App Screenshot](./screenshot.jpg)

### Links

- [Live Site URL](https://your-live-site-url.com)

## Setup

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/bhuwan214/todo.git
    ```
2. Navigate to the project directory:
    ```sh
    cd todo
    ```
3. Install dependencies (webpack):
    ```sh
npm install webpack webpack-cli webpack-dev-server html-webpack-plugin --save-dev
                &&&&&
npm install style-loader css-loader --save-dev
    ```

### Usage

1. Start the local server:
    ```sh
    npm start
    ```
2. Open your browser and navigate to `http://localhost:3000` to see the app in action.

## My Process

### Built With

- Semantic HTML5 markup
- CSS custom properties
- JavaScript for functionality
- Local Storage API
- Flexbox for layout
- [Webpack](https://webpack.js.org/) for bundling

### What I Learned

While building this project, I learned how to:
- Implement local storage for data persistence
- Use event delegation to manage dynamic elements
- Filter tasks based on categories
- Create a deployment subtree branch for GitHub Pages
   ```sh git subtree split --prefix dist -b gh-pages git push -f origin gh-pages:gh-pages```
    



## Author

- GitHub - [bhuwan214](https://github.com/bhuwan214)
- LinkedIn - [bhuwan214](https://linkedin.com/in/bhuwan214)

## Acknowledgments

Special thanks to [MDN Web Docs](https://developer.mozilla.org/) and [Medium] (https://medium.com/)  for the helpful tutorials and documentation.
