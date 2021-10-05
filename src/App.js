import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Layout from './hoc/Layout/Layout';

import Home from './Home/Pages/Home';
import NewBlog from './Blogs/Pages/NewBlog';
import MyBlogs from './Blogs/Pages/MyBlogs';
import UpdateBlog from './Blogs/Pages/UpdateBlog';
import Info from './Info/Pages/Info';
import Login from './Auth/Pages/Login';

const App = () => {

  const routes = (
    <Switch>
      <Route path="/" exact>
        <Home/>
      </Route>
      <Route path="/Info" exact>
        <Info/>
      </Route>
      <Route path="/NewBlog" exact>
        <NewBlog/>
      </Route>
      <Route path="/MyBlogs" exact>
        <MyBlogs/>
      </Route>
      <Route path="/UpdateBlog" exact>
        <UpdateBlog/>
      </Route>
      <Route path="/Login" exact>
        <Login/>
      </Route>
      <Redirect to="/"/>
    </Switch>
  )

  return (
    <div className="App">
      <Router>
      <Layout>
        {routes}
      </Layout>
      </Router>
    </div>
  );
}

export default App;
