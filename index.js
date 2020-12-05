const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')
const generateMarkdown = require('./utils/generateMarkdown')
// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project's name?" 
    },
    {
        type: "input",
        name: "description",
        message: "Please enter your project's description."
    },
    {
        type: "input",
        name: "license",
        message: "Please state which license your project has."
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter installation instructions."
    },
    {
        type: "input",
        name: "usage",
        message: "wbat does the user need to know about using the repo?"
    },
    {
        type: "input",
        name: "contributions",
        message: "Please enter the names of the contributors for this project?"
    },
    {
        type: "input",
        name: "test",
        message: "What command is needed to run tests?"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(error){
        if (error) throw error 
        console.log('generated readme file successfully')
    }) 
}

// function to initialize program
function init() { 
    console.log('asking questions')
inquirer
  .prompt(
    questions
  )
  .then(answers => {
    console.log(answers)
    writeToFile("readme.md", generateMarkdown(answers))
  })
  .catch(error => {
   console.log(error) 
  });

}
// function call to initialize program
init();
