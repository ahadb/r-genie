#!/usr/bin/env node

const minimist = require('minimist')
const generateComponent = require('../index')
const tmpl = require('../tmpl/index')
const bail = require('../utils/index')
const args = minimist(process.argv.slice(2))
const type = args.t || args.type
const name = args.n || args.name
const isFunctional = args.f || args.functional
const isClass = args.c || args.class
let cmd = args._[0] || 'help'

if (args.help || args.h) {
  cmd = 'help'
}

if (type === 'react' && name && isFunctional) {
  generateComponent(type, name, tmpl.REACT.functionalComponent(name))
} else if (type === 'react' && name && isClass) {
  generateComponent(type, name, tmpl.REACT.classComponent(name))
} else if (cmd) {
  require('../tmpl/help')
} else {
  bail('bailed out')
}
