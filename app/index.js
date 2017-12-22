let React = require('react');
let ReactDOM = require('react-dom');
require('./index.css');

class App extends React.Component{
  render() {
    return(
      <div>
        Hello
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#app')
);
