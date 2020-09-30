import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SingUpPage";
import PostsPage from "./pages/PostsPage";
import UsersPage from "./pages/UsersPage";
import MyProfilePage from "./pages/MyProfilePage";
import AddImagePage from "./pages/AddImagePage";
import AddVideoPage from "./pages/AddVideoPage";
import AddTextPage from "./pages/AddTextPage";
import SinglePostPage from "./pages/SinglePostPage";
import UserProfilePage from "./pages/UserProfilePage";
import EditProfilePage from "./pages/EditProfilePage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { UsersProvider } from "./context/UsersContext";
import { LoggedUserProvider } from "./context/LoggedUserContext";
import { MyPostsProvider } from "./context/MyPostsContext";
import MessagePage from "./pages/MessagePage";
import SingleUserMessagePage from "./pages/SingleUserMessagePage";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#2196F3" },
    secondary: { main: "#ff4081" },
  },
});

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <UsersProvider>
        <LoggedUserProvider>
          <MyPostsProvider>
            <MuiThemeProvider theme={theme}>
              <Switch>
                <Route exact path="/" component={SignInPage} />
                <Route exact path="/register" component={SignUpPage} />
                <PrivateRoute exact path="/posts" component={PostsPage} />
                <PrivateRoute exact path="/users" component={UsersPage} />
                <PrivateRoute exact path="/profile" component={MyProfilePage} />
                <PrivateRoute exact path="/addimage" component={AddImagePage} />
                <PrivateRoute exact path="/addvideo" component={AddVideoPage} />
                <PrivateRoute exact path="/addtext" component={AddTextPage} />
                <PrivateRoute exact path="/message" component={MessagePage} />
                <PrivateRoute
                  exact
                  path="/message/:id"
                  component={SingleUserMessagePage}
                />
                <PrivateRoute
                  exact
                  path="/posts/:id"
                  component={SinglePostPage}
                />
                <PrivateRoute
                  exact
                  path="/users/:id"
                  component={UserProfilePage}
                />
                <PrivateRoute
                  exact
                  path="/profile/edit"
                  component={EditProfilePage}
                />
              </Switch>
            </MuiThemeProvider>
          </MyPostsProvider>
        </LoggedUserProvider>
      </UsersProvider>
    </BrowserRouter>
  );
};

export default App;
