// : Create a function that returns a license badge or link based on which license is passed in
// If there is no license, return an empty string
function renderLicense(license, output) {
  switch(license) {
    case "Apache 2.0 License":
      if (output === "badge") {
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      } else if (output === "link") {
        return "https://opensource.org/licenses/Apache-2.0"
      }
      break;
    case "Boost Software License 1.0":
      if (output === "badge") {
        return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      } else if (output === "link") {
        return "https://www.boost.org/LICENSE_1_0.txt"
      }
      break;
    case "BSD 3-Clause License":
      if (output === "badge") {
        return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      } else if (output === "link") {
        return "https://opensource.org/licenses/BSD-3-Clause"
      }
      break;
    case "BSD 2-Clause License":
      if (output === "badge") {
        return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
      } else if (output === "link") {
        return "https://opensource.org/licenses/BSD-2-Clause"
      }
      break;
    case "CC0":
      if (output === "badge") {
        return "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
      } else if (output === "link") {
        return "http://creativecommons.org/publicdomain/zero/1.0/"
      }
      break;
    case "Attribution 4.0 International":
      if (output === "badge") {
        return "[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)";
      } else if (output === "link") {
        return "https://creativecommons.org/licenses/by/4.0/"
      }
      break;
    case "Attribution-ShareAlike 4.0 International":
      if (output === "badge") {
        return "[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)";
      } else if (output === "link") {
        return "https://creativecommons.org/licenses/by-sa/4.0/"
      }
      break;
    case "Attribution-NonCommercial 4.0 International":
      if (output === "badge") {
        return "[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)";
      } else if (output === "link") {
        return "https://creativecommons.org/licenses/by-nc/4.0/"
      }
      break;
    case "Attribution-NoDerivates 4.0 International":
      if (output === "badge") {
        return "[![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC_BY--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nd/4.0/)";
      } else if (output === "link") {
        return "https://creativecommons.org/licenses/by-nd/4.0/"
      }
      break;
    case "Attribution-NonCommmercial-ShareAlike 4.0 International":
      if (output === "badge") {
        return "[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)";
      } else if (output === "link") {
        return "https://creativecommons.org/licenses/by-nc-sa/4.0/"
      }
      break;
    case "Attribution-NonCommercial-NoDerivatives 4.0 International":
      if (output === "badge") {
        return "[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC_BY--NC--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)";
      } else if (output === "link") {
        return "https://creativecommons.org/licenses/by-nc-nd/4.0/"
      }
      break;
    case "Eclipse Public License 1.0":
      if (output === "badge") {
        return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
      } else if (output === "link") {
        return "https://opensource.org/licenses/EPL-1.0"
      }
      break;
    case "GNU GPL v3":
      if (output === "badge") {
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      } else if (output === "link") {
        return "https://www.gnu.org/licenses/gpl-3.0"
      }
      break;
    case "GNU GPL v2":
      if (output === "badge") {
        return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
      } else if (output === "link") {
        return "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html"
      }
      break;
    case "GNU AGPL v3":
      if (output === "badge") {
        return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
      } else if (output === "link") {
        return "https://www.gnu.org/licenses/agpl-3.0"
      }
      break;
    case "GNU LGPL v3":
      if (output === "badge") {
        return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
      } else if (output === "link") {
        return "https://www.gnu.org/licenses/lgpl-3.0"
      }
      break;
    case "GNU FDL v1.3":
      if (output === "badge") {
        return "[![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)";
      } else if (output === "link") {
        return "https://www.gnu.org/licenses/fdl-1.3"
      }
      break;
    case "The Hippocratic License 2.1":
      if (output === "badge") {
        return "[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)";
      } else if (output === "link") {
        return "https://firstdonoharm.dev"
      }
      break;
    case "The Hippocratic License 3.0":
      if (output === "badge") {
        return "[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)";
      } else if (output === "link") {
        return "https://firstdonoharm.dev"
      }
      break;
    case "IBM Public License Version 1.0":
      if (output === "badge") {
        return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
      } else if (output === "link") {
        return "https://opensource.org/licenses/IPL-1.0"
      }
      break;
    case "ISC License (ISC)":
      if (output === "badge") {
        return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
      } else if (output === "link") {
        return "https://opensource.org/licenses/ISC"
      }
      break;
    case "The MIT License":
      if (output === "badge") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      } else if (output === "link") {
        return "https://opensource.org/licenses/MIT"
      }
      break;
    case "Mozilla Public License 2.0":
      if (output === "badge") {
        return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      } else if (output === "link") {
        return "https://opensource.org/licenses/MPL-2.0"
      }
      break;
    case "Attribution License (BY)":
      if (output === "badge") {
        return "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)";
      } else if (output === "link") {
        return "https://opendatacommons.org/licenses/by/"
      }
      break;
    case "Open Database License (ODbL)":
      if (output === "badge") {
        return "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)";
      } else if (output === "link") {
        return "https://opendatacommons.org/licenses/odbl/"
      }
      break;
    case "Public Domain Dedication and License (PDDL)":
      if (output === "badge") {
        return "[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)";
      } else if (output === "link") {
        return "https://opendatacommons.org/licenses/pddl/"
      }
      break;
    case "The Perl License":
      if (output === "badge") {
        return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
      } else if (output === "link") {
        return "https://opensource.org/licenses/Artistic-2.0"
      }
      break;
    case "The Artistic License 2.0":
      if (output === "badge") {
        return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
      } else if (output === "link") {
        return "https://opensource.org/licenses/Artistic-2.0"
      }
      break;
    case "SIL Open Font License 1.1":
      if (output === "badge") {
        return "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)";
      } else if (output === "link") {
        return "https://opensource.org/licenses/OFL-1.1"
      }
      break;
    case "The Unlicense":
      if (output === "badge") {
        return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
      } else if (output === "link") {
        return "http://unlicense.org/"
      }
      break;
    case "The Do What the Fuck You Want to Public License":
      if (output === "badge") {
        return "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)";
      } else if (output === "link") {
        return "http://www.wtfpl.net/about/"
      }
      break;
    case "The zlib/libpng License":
      if (output === "badge") {
        return "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)";
      } else if (output === "link") {
        return "https://opensource.org/licenses/Zlib"
      }
      break;
    default: 
      return ""
  }
}



// : Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  <br>
  ${renderLicense(data.licence, "badge")}

  ## Description
  
  - ${data.descMotivation}
  - ${data.descWhy}
  - ${data.descSolve}
  - ${data.descLearn}
  
  ## Table of Contents
    
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribute](#contribute)
  - [Tests](#tests)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  
  ${generateLists("installation", data.iStep)}

  ## Usage
  
  ${generateLists("usage", data.uStep)}
  
  ## Contribute
  
  ${generateLists("contributions", data.conGuide)}
  
  ## Tests

  ${generateLists("tests", data.test)}
  
  ---

  ## Questions

  To contact me: [Github](https://github.com/${data.userGit}) or [email]({mailto:${data.userEmail}})

  ## Credits
  
  ${generateLists("collaborators", data.collaborators)}

  ## License
  
  This application is covered under the ${data.licence}.
  <br>
  To find out more click [here](${renderLicense(data.licence, "link")})
`;
}

module.exports = generateMarkdown;
