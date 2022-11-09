import React, { Component } from "react";
import "./App.css";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Sales from './pages/Sales';
import Employee from './pages/Employee';
import Inventory from './pages/Inventory';
import Accessibility from './pages/Accessability';
import ErrorPage from './pages/ErrorPage';

/*
        // something so i can push again
        <header className="App-header">
          Panda Express Manager Page
          <p className="App-intro">{this.state.apiResponse}</p>
          <button onClick={this.callAPI}>Make Call</button>
        </header>
*/

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI = () => {
      fetch("http://localhost:3000/roster?id=2")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }, () => console.log(res)));
  }

  render() {  
    return (  
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/sales" element={<Sales/>}/>
          <Route path="/inventory" element={<Inventory/>}/>
          <Route path="/employee" element={<Employee/>}/>
          <Route path="/accessibility" element={<Accessibility/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      <div className="Footer">
      Footer
      </div>
      </Router>
    );
  }
}

export default App;
