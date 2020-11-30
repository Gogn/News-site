import React from 'react';
import './App.css';
import { Home } from './Pages/Home/Home'
import { News } from "./Pages/News/News";
import { Layout } from "./Pages/Layout";
import { Switch, Route } from "react-router-dom";

function App() {

  let routes = (
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/News' component={News}/>
      <Route render={() => <h1>404: page not found</h1>} />
    </Switch>
  )

  return (
    <Layout>
      {routes}
    </Layout>
  )
}

export default App;
