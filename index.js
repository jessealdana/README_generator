var fs = require("fs");
var path = require("path");
var inquirer = require('inquirer');
var generateMarkdown = require('./generateMarkdown')
const questions = [

    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Add a brief description."
    },
    {
        type: "input",
        name: "installation",
        message: "How does the user install this?"
    },
    {
        type: "input",
        name: "usage",
        message: "How is this used?"
    },
    {
        type: "input",
        name: "license",
        message: "Which license will you use?"
    },
    {
        type: "input",
        name: "credits",
        message: "Who contributed to this project?"       
    },
    {
        type: "input",
        name: "tests",
        message: "How would you like to test this?"
    },
    {
        type: "input",
        name: "questions",
        message: "Do you have any questions about this project?"
    }


]

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName), data)

}

    function init() {
        inquirer.prompt(questions).then((answers) => {
            writeToFile("test.md", generateMarkdown({...answers}))
        
            })
    }  
    

init();

// const makeAsync = (pass)=> new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         if(pass === "Jesse"){
//             resolve({message: "Yay you are the admin!"})
//         }else{
//             reject({message: "error query params are bad?"})
//         }
//     }, 2000)
// })

// //makeAsync('Jesse').then(data=> console.log(data)).catch(err=> console.log(err))
// console.log('aint nobody got time for that')
