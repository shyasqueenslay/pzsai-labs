import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Products from './Products'

function App() {
  return (
    <div>
      <Router>
          <Routes>
            <Route exact path="/products" element={< Products />}>
            </Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
