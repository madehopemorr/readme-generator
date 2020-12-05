function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license]{https://img.shields.io/badge/license-${license}-blue.svg}`
   }
   return ''
}

function renderLicenseLink(license) {
  if (license !== "None") {
    return (
      `\n* [License](#license)\n`
    )
  }
  return ''
}
function renderLicenseSection(license) {
  if (license !== "None") {
    return (
      `## License
This project is licensed under the ${license} license.`
    )
  }
  return ''
}
// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

  ${data.description}
  ----------------------------------------
  ${data.tableOfContents}
  ##### Table of Contents  
    [Installation](#installation)  
    [Usage](#usage)
    [License] (#license)
    [Contributing] (#contributing)
    [Tests] (#tests)
    [Questions] (#questions)
    
    

  ## Installation 
  
  These are the steps for installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributing

  ${data.contributors}

  ## Tests

  To run tests, run this command:

  \`\`\`
  ${data.test}
  \`\`\`

  ## Questions

  If you have questions about the repo, you can contact me at ${data.email}. 
  My work is listed at [${data.github}](https://github.com/${data.github}/).

  `;
  }
  
  module.exports = generateMarkdown;
  