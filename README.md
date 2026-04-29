# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Note for Coursera Reviewers, or any other reviewers outside of that site
* Project may or may not come with node_modules packed together, do make sure to run `npm install`

* Project was built with the latest React, node, and npm versions as of April 2026; this being different than what Coursera used, so few adjustments had to be made, such as importing React Routes differently and handling unit testing imports

* The Script Coursera provides for pulling from an API simply did not work desite all troubleshooting done for it, and others have commented on this issue in Discussions for the course as well, so looks like to get the project finished, we had to add the script directly into the project as our own file; here it is fetchAPI.js. Since this is a direct file and not an API call, most of the code involving importing this may or may not use sync/await keywords to simulate it as if it were still an API.

* The images being used for the Avatars for the Testmonies are what they are; the name inputted is what gives the image, even if it seems like they should look different. "John Doe" will result in the same image each time, unless you remove the part of the URL that adds the argument for a name, then it becomes random each time.

* The breakpoints for responsive design used are 768px, as that is the lowest width for tablets (iPad mini) that can be previewed in the browser as any width smaller is for mobile phones like Samsung Gaalxy S20, Designs were adjusted to look accessible to iPhone SE users, as that is the smallest phone size the browser can preview in.