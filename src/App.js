import React , {Suspense}from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Spinner from "./Shared/Components/UI-Elements/Spinner";
import { AuthContext } from "./Shared/Context/authContext";
import { useAuth } from "./Shared/Hooks/Auth-Hook";

const Home = React.lazy(() => import("./Home/Pages/Home"));
const NewBlog = React.lazy(() => import("./Blogs/Pages/NewBlog"));
const MyBlogs = React.lazy(() => import("./Blogs/Pages/MyBlogs"));
const UpdateBlog = React.lazy(() => import("./Blogs/Pages/UpdateBlog"));
const Info = React.lazy(() => import("./Info/Pages/Info"));
const Login = React.lazy(() => import("./Auth/Pages/Login"));

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
          token: token,
          userId: userId,
          login: loginHandler,
          logout: logoutHandler,
        }}
      >
        <Router>
          <Layout>
            <Suspense
              fallback={
                <div className="center">
                  <Spinner />
                </div>
              }
            >
              {routes}
            </Suspense>
          </Layout>
        </Router>
      </AuthContext.Provider>
    </div>
  );
};

export default App;
