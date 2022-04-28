// : Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));

// : Create an array of questions for user input
const questions = [
    "Enter a Project Title.",
    "Provide a description for this project.",
    "Add an installation step?",
    "Add a usage instruction?",
    "Add a contribution guideline?",
    "Add a collaborator?",
    "Which license pertains to this project?",
    "What is your github username?",
    "What is your email address?",
    "Add a test instruction?"
];


// : Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log('Successfully created README.md')
    )
}

// : Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: questions[0]
        },
        {
            type: "input",
            name: "desc",
            message: questions[1]
        },
        {
            type: "list",
            name: "license",
            message: questions[6],
            choices: [
                "Apache 2.0 License",
                "Boost Software license 1.0",
                "BSD 3-Clause license",
                "BSD 2-Clause license",
                "CC0",
                "Attribution 4.0 International",
                "Attribution-ShareAlike 4.0 International",
                "Attribution-NonCommercial 4.0 International",
                "Attribution-NoDerivates 4.0 International",
                "Attribution-NonCommmercial-ShareAlike 4.0 International",
                "Attribution-NonCommercial-NoDerivatives 4.0 International",
                "Eclipse Public License 1.0",
                "GNU GPL v3",
                "GNU LGPL v3",
                "GNU FDL v1.3",
                "The Hippocratic License 2.1",
                "The Hippocratic License 3.0",
                "IBM Public License Version 1.0",
                "ISC License (ISC)",
                "The MIT License",
                "Mozilla Public License 2.0",
                "Attribution License (BY)",
                "Open Database License (ODbL)",
                "Public Domain Dedication and License (PDDL)",
                "The Perl License",
                "The Artistic License 2.0",
                "SIL Open Font License 1.1",
                "The Unlicense",
                "The Do What the Fuck You Want to Public License",
                "The zlib/libpng License",
            ],
            default: "Apache 2.0"
        },
        {
            type: "input",
            name: "userGit",
            message: questions[7]
        },
        {
            type: "input",
            name: "userEmail",
            message: questions[8]
        },
        {
            type: "loop",
            name: "iStep",
            message: questions[2],
            questions: [
                {
                    type: "input",
                    name: "listItem",
                    message: "Input an installation instruction."
                }
            ]
        },
        {
            type: "loop",
            name: "uStep",
            message: questions[3],
            questions: [
                {
                    type: "input",
                    name: "listItem",
                    message: "Input a usage instruction."
                }
            ]
        },
        {
            type: "loop",
            name: "conGuide",
            message: questions[4],
            questions: [
                {
                    type: "input",
                    name: "listItem",
                    message: "Input a contribution guideline."
                }
            ]
        },
        {
            type: "loop",
            name: "collaborators",
            message: questions[5],
            questions: [
                {
                    type: "input",
                    name: "name",
                    message: "Input their name."
                },
                {
                    type: "input",
                    name: "github",
                    message: "Input their github username."
                },
            ]
        },
        {
            type: "loop",
            name: "test",
            message: questions[9],
            questions: [
                {
                    type: "input",
                    name: "listItem",
                    message: "Input a test instruction."
                }
            ]
        },
    ]).then((answers) => {
        writeToFile("README.md", answers)
    })
}

// Function call to initialize app
init();
