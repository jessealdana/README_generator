function generateMarkdown(data) {
    return `
  # ${data.title}
  
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