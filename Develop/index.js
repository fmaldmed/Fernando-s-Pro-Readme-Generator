// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Pleae provide a brief description of your project?",
    },
    {
      type: "input",
      name: "installation",
      message: "What command should be ran to install package dependecencies?",
    },
    {
      type: "input",
      name: "usage",
      message: "What does the user need to know before using the application?",
    },
    {
      type: "input",
      name: "contributing",
      message: "Guidelines for how to contribute to your project: ",
    },
    {
      type: "input",
      name: "tests",
      message: "What command should be run to perform tests?",
    },
    {
      type: "input",
      name: "github",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    },
    {
      type: "list",
      name: "license",
      message: "Please choose a lincese for your application: ",
      choices: ["MIT", "APACHE 2.0", "Boost_Software_License", "The_Unlicense", "Mozzila_Public_License_2.0", "None"],
    },
  ];
// Include Project Title, Description, Table of Contents, installation, usage, credits, license, tests

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) =>
    error ? console.error(err) : console.log(`Wrote to ${fileName} successfully!`)
  );
  }

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        readMegenerator = generateMarkdown(answers);
        writeToFile("./GeneratedReadMe/README.md", readMegenerator);
    })
};

// Function call to initialize app
init() 
