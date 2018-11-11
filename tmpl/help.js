const chalk = require('chalk')
const b = chalk.bold
const d = chalk.dim

const cmdMenus = {
  index: `
    ${b(`gen`)}
    url: 
    version: 1.0.0
    
    ${b(`> gen`)} <options>

    ${d(`Options:`)}
    
    -v, --version         show gen package version
    -h, --help            show gen help menu
    -t, --type            specify type of component, react or redux
    -n, --name            specify name of component
    -f, --functional      specify if component should be functional
    -c, --class           specify if component should be class`
}

console.log(cmdMenus.index)
