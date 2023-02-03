import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
      </div>
    </Router>
  );
}

export default App;
