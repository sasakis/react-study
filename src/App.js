import React from 'react';

const App = () => {
  const profiles = [
    { name: "Taro", age: 2 },
    { name: "Hanako", age: 10 },
    { name: "Noname"}
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

User.defaultProps = {
  age: 1
}

export default App;
