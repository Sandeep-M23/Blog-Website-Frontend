import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Layout from "./hoc/Layout/Layout";

import Home from "./Home/Pages/Home";
import NewBlog from "./Blogs/Pages/NewBlog";
import MyBlogs from "./Blogs/Pages/MyBlogs";
import UpdateBlog from "./Blogs/Pages/UpdateBlog";
import Info from "./Info/Pages/Info";
import Login from "./Auth/Pages/Login";

import { AuthContext } from "./Shared/Context/authContext";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(false);

  const login = useCallback((uid) => {
    setIsLoggedIn(true);
    setUserId(uid);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserId(null);
  }, []);

  let routes;
  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/Info" exact>
          <Info />
        </Route>
        <Route path="/NewBlog" exact>
          <NewBlog />
        </Route>
        <Route path="/MyBlogs" exact>
          <MyBlogs />
        </Route>
        <Route path="/UpdateBlog" exact>
          <UpdateBlog />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/Info" exact>
          <Info />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Redirect to="/Login" />
      </Switch>
    );
  }

  return (
    <div className="App">
      <AuthContext.Provider
        value={{
          isLoggedIn: isLoggedIn,
          userId: userId,
          login: login,
          logout: logout,
        }}
      >
        <Router>
          <Layout>{routes}</Layout>
        </Router>
      </AuthContext.Provider>
    </div>
  );
};

export default App;
