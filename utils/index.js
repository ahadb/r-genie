const chalk = require('chalk')

function information (msg) {
  console.info(chalk.yellow(msg))
}

function error (msg) {
  console.error(chalk.red(msg))
}

function success (msg) {
  console.log(chalk.green(msg))
}

function bail () {
  process.exit(0)
}

module.exports = {
  information: information,
  error: error,
  success: success,
  bail: bail
}
