import React, { Component } from "react";
import Header from "./component/header/header";
import Headline from "./component/headline/headline";
import "./app.scss";

// function App() {
//   return <div className="App">test</div>;
// }

// export default App;

const tempArr = [
  {
    firstName: "Joe",
    lastName: "Shmo",
    email: "joes@gmail.com",
    age: 26,
    onlineStatus: true
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="main">
          <Headline
            header="Posts"
            desc="Click the button to render posts"
            tempArr={tempArr}
          />
        </section>
      </div>
    );
  }
}

export default App;
