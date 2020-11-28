import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Home } from './Pages/Home/Home'
import { News } from "./Pages/News/News";
import { Layout } from "./Pages/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  let routes = (
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/News' component={News}/>
      <Route render={() => <h1>404: page not found</h1>} />
    </Switch>
  )

  // if (isAuthenticated) {
    // routes = (
    //   <Switch>
    //     <Route path='/quiz-creator' component={QuizCreator}/>
    //     <Route path='/quiz/:id' component={Quiz}/>
    //     <Route path='/logout' component={Logout}/>
    //     <Route path='/' exact component={QuizList}/>
    //     <Redirect to='/'/>
    //   </Switch>
    // )
  // }

  return (
    <Layout>
      {routes}
    </Layout>
  )
}

export default App;
