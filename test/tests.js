const test = require('tape')
const generateComponent = require('../index')
const tmpl = require('../tmpl/index')
const fs = require('fs-extra')

let actualFn
let actualCl
const actualFnDir = './components/MyFunctionalComponent.js'
const actualClDir = './components/MyClassComponent.js'

generateComponent('react',
  'MyFunctionalComponent',
  tmpl.REACT.functionalComponent('MyFunctionalComponent')
)
generateComponent('react',
  'MyClassComponent',
  tmpl.REACT.classComponent('MyClassComponent')
)

const expectedFn = `import React from 'react'

const MyFunctionalComponent = (props) => {
  
  return (
    <div>
      <h1>Hello, {props.name} </h1>
    </div>
  )
}
  
export default MyFunctionalComponent`

const expectedCl = `import React from 'react'

class MyClassComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: name
    }
  }
  
  componentDidMount() {}
  
  componentDidUpdate(prevProps) {}
  
  componentWillUnmount() {}
  
  shouldComponentUpdate(nextProps, nextState) {}
  
  UNSAFE_componentWillReceiveProps(nextProps) {}
    
  render() {
    return (
      <div>
        <h1>Hello, {this.state.name} </h1>
      </div>
    )
  }
}

export default MyClassComponent`

fs.readFile(actualFnDir, 'utf8', function (err, contents) {
  actualFn = contents
  if (err) {
    throw err.message
  }
  test('Test generation of functional component', function (t) {
    t.plan(1)
    t.equals(actualFn, expectedFn)
  })
})

fs.readFile(actualClDir, 'utf8', function (err, contents) {
  actualCl = contents
  if (err) {
    throw err.message
  }
  test('Test generation of class level component', function (t) {
    t.plan(1)
    t.equals(actualCl, expectedCl)
  })
})
