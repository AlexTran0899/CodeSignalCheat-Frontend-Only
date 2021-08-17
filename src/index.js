import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import Homepage from "./components/Homepage";


ReactDOM.render(
  <Router>
    <Homepage />
  </Router>,
  document.getElementById('root')
);


