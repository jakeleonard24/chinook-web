import {h, Component} from 'preact';
import Nav from './Nav';
import Schema from './Schema';
import Editor from './Editor';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="App__Top">
          <Schema dispatch={this.props.dispatch} state={this.props.state} />
          <Editor />
        </div>
        <div className="App__Result" />
      </div>
    );
  }
}

export default App;
