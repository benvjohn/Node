// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        message: 'what is the title of the readme?',
        type: 'input',
    }
];

// TODO: Create a function to write README file
function writeToFile(data) {
fs.writeFile("README2.md", data, function(err){
    if(err){
        throw err
    }else{
        console.log('file written')
    }
})
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(data){
const string = generateMarkdown(data)
console.log(string)
writeToFile(string)
    })
}

// Function call to initialize app
init();
