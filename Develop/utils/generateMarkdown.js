// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let badge = "";
    if (license === 'MIT') {
      badge = '![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)'
    } else if (license === 'Apache 2.0') {
    badge = '![GitHub license](https://img.shields.io/badge/license-Apache_2.0-blue.svg)'
    } else if (license === 'Boost Software License') {
    badge = '![GitHub license](https://img.shields.io/badge/license-Boost_Software_License-blue.svg)'
    } else if (license === 'The Unlicense') {
    badge = '![GitHub license](https://img.shields.io/badge/license-The_Unlicense-blue.svg)'
    } else if (license === 'Mozilla Public License 2.0') {
    badge = '![GitHub license](https://img.shields.io/badge/license-Mozzila_Public_License_2.0-blue.svg)'
    } else if (license === '') {
      badge = ''
    }
    return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";
  if(license === 'MIT') {
    licenseLink = 'https://choosealicense.com/licenses/mit/'
  } else if(license === 'Apache 2.0') {
    licenseLink = 'https://choosealicense.com/licenses/apache-2.0/'
  } else if(license === 'Boost Software License') {
    licenseLink = 'https://choosealicense.com/licenses/bsl-1.0/'
  } else if(license === 'The Unlicense') {
    licenseLink = 'https://choosealicense.com/licenses/unlicense/'
  } else if(license === 'Mozilla Public License 2.0') {
    licenseLink = 'https://choosealicense.com/licenses/mpl-2.0/'
  } else {
    licenseLink = ''
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return ''
   } else if (license) {
    return `This application is licensed under the ${license} license.`;
}
};


// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.title}

  ## ${renderLicenseSection(answers.license)} ${renderLicenseBadge(answers.license)}
  ### ${renderLicenseLink(answers.license)}

  ## Table of Contents:
  ### 1 [License](#license)
  ### 2 [Installation](#installation)
  ### 3 [Usage](#usage)
  ### 4 [Contributors](#contributors)
  ### 5 [tests](#tests)
  ### 6 [Questions](#questions)

 ### Description:
  ###  ${answers.description}

  ## Installation:
  ### You must install the following depencencies for this application:
  ### ${answers.installation}

  ## Usage:
  ### ${answers.usage}

  ## Contributing:
  ### ${answers.contributing}

  ## Tests:
  ### ${answers.tests}

  ## Questions?
  ### If you have questions regarding the repo please contact me at:
  ### Github:
  ### ${answers.github}
  ### Or
  ### Email:
  ### ${answers.github}

 


`;
}

module.exports = generateMarkdown;
