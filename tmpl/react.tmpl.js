const functionalComponent = (name) =>
  `import React from 'react'

const ${name} = (props) => {
  
  return (
    <div>
      <h1>Hello, {props.name} </h1>
    </div>
  )
}
  
export default ${name}    
`

const classComponent = (name) =>
  `import React from 'react'

class ${name} extends React.Component {
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

export default ${name}
`

module.exports = {
  functionalComponent,
  classComponent
}
