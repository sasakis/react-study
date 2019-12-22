import React, { Component } from 'react';

// function App() {
//   return <div>hello!!!!</div>;
// }

class App extends Component {
  render() {
    return(
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={() => {console.log("I am clicked.")}} />;
      </React.Fragment>
    )

  }
}

export default App;
