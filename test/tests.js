const test = require('tape')
const generateComponent = require('../index')
const tmpl = require('../tmpl/index')

test('testing generateFn() output to match generated file', function(t) {
  const testFn = generateComponent(type, name, tmpl.REACT.functionalComponent(name))
})
