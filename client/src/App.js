import React, { Component } from "react";
import DaicaContract from "./contracts/Daica.json";
import getWeb3 from "./utils/getWeb3";
import truffleContract from "truffle-contract";

class App extends Component {
  state = { web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const Contract = truffleContract(DaicaContract);
      Contract.setProvider(web3.currentProvider);
      const instance = await Contract.deployed();

      const currentAccount = accounts[0];
      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState(
        { web3, accounts, contract: instance, currentAccount },
        this.runExample
      );

      // Pull for changes of current account
      this.accountChecker = setInterval(async () => {
        const accounts = await web3.eth.getAccounts();
        if (accounts[0] !== this.state.currentAccount) {
          this.setState({ accounts, currentAccount: accounts[0] });
        }
      }, 500);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.log(error);
    }
  };

  componentWillUnmount = () => {
    clearInterval(this.accountChecker);
  };

  runExample = async () => {
    const { contract } = this.state;

    const response = await contract.hello();

    // Update state with the result.
    this.setState({ message: response });
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <h1>Good to Go!</h1>
        <div>The stored value is: {this.state.message}</div>
        <div>{this.state.accounts[0]}</div>
      </div>
    );
  }
}

export default App;
