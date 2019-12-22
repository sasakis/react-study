import React from 'react';
import PropTypes from 'prop-types'

const App = () => {
  const profiles = [
    { name: "Taro", age: 2 },
    { name: "Hanako", age: 10 },
    { name: "Noname", age: 3}
  ]
  return (
    <div>
      {
        profiles.map((profiles, index) => {
          return <User name={profiles.name} age={profiles.age} key={index}/>
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>I am {props.name}, I am {props.age}</div>
}

User.propTypes = {
  name: PropTypes.string.isRequired
}

export default App;
