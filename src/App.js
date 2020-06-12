import React from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Navbar from './components/layouts/navbar';
import Dashboard from './components/dashboard/dashboard';
import ProjectDetail from './components/projects/projectDetail';
import SignIn from './components/auth/signIn';
import SignUp from './components/auth/signup';
import CreateProject from './components/projects/createProject';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route path="/project/:id" component={ProjectDetail}/>
          <Route path="/signin" component={SignIn}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/createproject" component={CreateProject} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;