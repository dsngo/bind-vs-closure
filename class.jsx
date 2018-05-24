// USE OF CLOSURE
class Bar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAddress: 'All',
    };
  }
  updateBar(bar) {
    this.setState(() => ({ selectedBar: bar }));
  }
  render() {
    const bars = ['All', 'Dota 2', 'CSGO', 'Warcraft 3', 'Javascript', 'Functional Programing'];
    return (
      <ul className="bars">
        <p>{this.state.selectedBar}</p>
        {bars.map(bar =>
          <li onClick={() => this.updateBar(bar)} key={bar}>
            {bar}
          </li>
        )}
      </ul>
    );
  }
}
// USE OF CLASS INITIALIZER & CLOSURE

class Bar1 extends Component {
  state = {
    selectedAddress: 'All'
  }
  updateBar = (bar) => () => {
    this.setState({ selectedAddress: bar })
  }
  render() {
    const bars = ['All', 'Dota 2', 'CSGO', 'Warcraft 3', 'Javascript', 'Functional Programing'];
    return (
      <ul className="bars">
        <p>{this.state.selectedAddress}</p>
        {bars.map(bar =>
          <li onClick={this.updateAddress(bar)} key={bar}>
            {bar}
          </li>
        )}
      </ul>
    );
  }
}

// USE OF BIND
class Bar1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAddress: 'All',
    };
    this.updateBar = this.updateBar.bind(this);
  }
  updateBar(bar) {
    this.setState(() => ({ selectedBar: bar }));
  }
  render() {
    const bars = ['All', 'Dota 2', 'CSGO', 'Warcraft 3', 'Javascript', 'Functional Programing'];
    return (
      <ul className="bars">
        <p>{this.state.selectedBar}</p>
        {bars.map(bar =>
          <li onClick={this.updateBar.bind(null, bar)} key={bar}>
            {bar}
          </li>
        )}
      </ul>
    );
  }
}
