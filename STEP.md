# Installation
  * Required Node.js
  * Latest webpack v4.14.0
  * Install via NPM

# Getting Started

## Basic Setup
  - npm init -> pakage.json
  - npm install webpack & webpack-cli
    *liC stand for command Line Interface*
    *CLI to configure and tnteract with our build.*
  - run webpack-cli init
  - edit webpack.config.js
  - setting up HtmlWebpackPlugin
    *Create Html file and inject bundle js file*
  - install babel to transpiling javascript ES2015+ to ES5
  - create .babelrc

## Setup React
  - install react react-dom babel-preset-react
    *babel-preset-react to compile react code -> js*
  - edit .babelrc for react

## Setup Redux
  - install redux react-redux
  - install webpack dev server
  - add <Provider> and wrap <App/> component in index
  - create component flag with reducer and view files
  - create compine reducer file, and add flag reducer to combine
  - install babel-preset-stage-0 vì không hiểu sao ko chạy được toán tử "..." trong flag reducer
  - edit .babelrc, add "stage-0"
  - create store with combine reducer
  - add redux devtools extension
  - create constant, actions in flag component
  - create flag container and map state, dispatch to props
  *trong folder components/flag a de export default kha nhieu, lam sao ma no' biet ma lay cai file index.js nhi*
## Setup react router v4
  - install react router v4
  - wrap Route in BrowserRouter
  - create public layout
  - add header to pulic layout
  - create private layout
  - copy fake authen code