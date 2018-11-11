const path = require('path')
const fs = require('fs-extra')
const chalk = require('chalk')

const dir = 'components'
const hrStart = process.hrtime()
let hrEnd
const root = path.resolve(dir)

module.exports = function (type, name, tpl) {
  hrEnd = process.hrtime(hrStart)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }
  try {
    fs.writeFileSync(
      path.join(root, `${name}.js`),
      tpl
    )
  } catch (err) {
    console.log(err)
  }
  console.log(`${chalk.green(`✔`)} Success. Your '${type}' component '${name}' was created`)
  console.info(`  ${chalk.gray.dim('Execution time (hr): %ds %dms')}`, hrEnd[0], hrEnd[1] / 1000000)
}
