import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState } from 'react';

//css
import './style.scss';

//components
import Landing from './component/Landing';
import About from './component/About';
import NotFound from './component/NotFound';
import Project from './component/Project';

function App() {

  const [toggleOpen, setToggleOpen] = useState(true);
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={() => (<Project toggleOpen={toggleOpen} setToggleOpen={setToggleOpen} />)} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
