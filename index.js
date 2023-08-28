// TODO: Include packages needed for this application
const inquirer = require("inquirer")
// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        message: 'what is the title of the readme?',
        type: 'input',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(data){
console.log(data.title)
    })
}

// Function call to initialize app
init();
