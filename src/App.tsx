import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Employees from './pages/Employees';
import Projects from './pages/Projects';
import Calendar from './pages/Calendar';
import History from './pages/History';
import Statistics from './pages/Statistics';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/employees" component={Employees} />
          <Route path="/projects" component={Projects} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/history" component={History} />
          <Route path="/statistics" component={Statistics} />
          <Route path="/" exact component={Employees} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;