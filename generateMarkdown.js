function generateMarkdown(data) {
    return `
  # ${data.title}
  ![Mozilla Add-on](https://img.shields.io/amo/v/blue?color=blue&label=readme%20generator&logoColor=white)
  
 ## Description
 
 ${data.description}

 ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#license)
  * [Credits](#credits)
  * [Tests](#tests)
  * [Questions](#questions)
 ## Installation

 ${data.installation}

 ## Usage
 
 ${data.usage}

 ## License
 
 This App is licensed under the ${data.license} license.

 ## Credits
 
 ${data.credits}

 ## Tests
 
 ${data.tests}

 ## Questions
 
 ${data.questions}

    
  
  `;
  }
  
  module.exports = generateMarkdown;