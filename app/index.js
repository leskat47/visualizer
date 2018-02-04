let React = require('react');
let ReactDOM = require('react-dom');
// let Tree = require('Tree');
let TreeInputs = require('./TreeInputs')
require('./index.css');

class App extends React.Component{
  render() {
    return(
      <TreeInputs />
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#app')
);
