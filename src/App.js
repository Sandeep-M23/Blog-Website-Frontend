import React from "react";
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
import { useAuth } from "./Shared/Hooks/Auth-Hook";

const App = () => {
  const {token,loginHandler,logoutHandler,userId} = useAuth();
  let routes;
  if (token) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/Info/:blogId" exact>
          <Info />
        </Route>
        <Route path="/blogs/new" exact>
          <NewBlog />
        </Route>
        <Route path="/:userId/blogs" exact>
          <MyBlogs />
        </Route>
        <Route path="/blogs/:blogId" exact>
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
        <Route path="/Info/:blogId" exact>
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
          isLoggedIn: !!token,
          token:token,
          userId: userId,
          login: loginHandler,
          logout: logoutHandler,
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
