import React, { Component } from "react";
import Header from "./component/header";
import "./app.scss";

// function App() {
//   return <div className="App">test</div>;
// }

// export default App;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
