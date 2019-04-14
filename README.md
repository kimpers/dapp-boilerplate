# Ethereum DApp boilerplate
**Opinionated** Ethereum DApp boilerplate with my favorite tools for rapid and enjoyable development as well as convenient IPFS deployment. Based on [react-box](https://truffleframework.com/boxes/react).

## Tools included:
* [Truffle React box](https://truffleframework.com/boxes/react)
* [Drizzle](https://truffleframework.com/drizzle)
* [Drizzle-React](https://github.com/trufflesuite/drizzle-react)
* [Styled-Components](https://www.styled-components.com)
* [Rimble](https://rimble.consensys.design)
* [Ramda](https://ramdajs.com)
* [idx](https://github.com/facebookincubator/idx)
* [truffle-assertions](https://github.com/rkalis/truffle-assertions)
* [react-toastify](https://github.com/fkhadra/react-toastify)


## Usage
1. Clone repo
2. `yarn install` in project root
3. `truffle develop` then `migrate`
4. `yarn install` inside client fold
5. `yarn start`
6. Set your Metamask to use network `http://localhost:9545`
6. Verify that everything works by going to `http://localhost:3000`
7. Delete `.git` folder and create your own repository
8. Start hacking 🎉

## Deploy to Cloudflare IPFS gateway
1. start IPFS daemon locally `ipfs daemon`
2. `cd` into `client` folder
3.  Run deploy command `./deploy-ipfs.sh`
