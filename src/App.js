import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect, useCallback } from 'react';
import { useProjectUpdate } from './context/projectContext';

//css
import './style.scss';

//components
import Landing from './component/Landing';
import About from './component/About';
import NotFound from './component/NotFound';
import Project from './component/Project';
import TargetProject from './component/TargetProject';
import Contact from './component/Contact';

function App() {
  //fecth data
  const setProject = useProjectUpdate();

  const fecthProjects = useCallback(async () => {
    try {
      let res = await fetch('https://zackpersonalapi.herokuapp.com/api/portfolio');
      res = await res.json();
      setProject(res);
    } catch(err) {
      throw err;
    }
  }, [setProject])

  useEffect(() => {
    fecthProjects();
  }, [fecthProjects])

  const [toggleOpen, setToggleOpen] = useState(true);
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={() => (<Project toggleOpen={toggleOpen} setToggleOpen={setToggleOpen} />)} />
        <Route path="/id/:params" component={TargetProject} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
