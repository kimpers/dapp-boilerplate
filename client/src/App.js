import React, { Component } from "react";
import idx from "idx";
import { DrizzleContext } from "drizzle-react";

class App extends Component {
  constructor(props) {
    super(props);
    const { drizzle } = props;
    const { Daica } = drizzle.contracts;
    const helloKey = Daica.methods.hello.cacheCall();

    this.state = {
      helloKey
    };
  }

  render() {
    const { drizzleState } = this.props;
    const { Daica } = drizzleState.contracts;
    const { helloKey } = this.state;
    const helloValue = idx(Daica, _ => _.hello[helloKey].value);

    return (
      <div>
        <h1>{helloValue}</h1>
      </div>
    );
  }
}

export default () => (
  <DrizzleContext.Consumer>
    {drizzleContext => {
      const { drizzle, drizzleState, initialized } = drizzleContext;

      if (!initialized) {
        return "Loading...";
      }

      return <App drizzle={drizzle} drizzleState={drizzleState} />;
    }}
  </DrizzleContext.Consumer>
);
