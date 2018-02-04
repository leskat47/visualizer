let React = require("react");


class TreeInputs extends React.Component {
  render() {
    return(
      <article>
      <div>
          Search for: <input type="text" id="search-term"></input>
          Speed:
          <select onChange={ props.onSelected }  id="speed">
            <option value="500">500 seconds</option>
            <option value="1000">1000 seconds</option>
            <option value="1500">1500 seconds</option>
          </select>
          <button type="button" class="start-search-button" onChanged={ props.onSelectStart } value="breadth">Breadth First Search</button>
          <button type="button" class="start-search-button" onChanged={ props.onSelectStart } value="depth">Depth First Search</button>
          <button type="button" onChanged={ props.onResetAll } id="reset">Reset Tree</button>
        </div>
        <div>
          <svg width="100%" height="100px">
            <circle r="10" cx="40" cy="30" class="selected"></circle>
            <text class="legend" x="120" y="35" >Currently checking</text>
            <circle r="10" cx="200" cy="30" class="to-check"></circle>
            <text class="legend" x="240" y="35" >To visit</text>
            <circle r="10" cx="300" cy="30" class="done"></circle>
            <text class="legend" x="345" y="35">Checked</text>
            <circle r="10" cx="400" cy="30" class="to-find"></circle>
            <text class="legend" x="445" y="35">Find Me</text>
          </svg>
        </div>
        <div id="graph">
        </div>
        <div>
          <h3>Nodes to check:</h3>
          <div id="list">
          </div>
          <h3>Currently checking:</h3>
          <div id="current-check">
          </div>
        </div>
        </article>
    )
  }
}

module.exports = TreeInputs;
