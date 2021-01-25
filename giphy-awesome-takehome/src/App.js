import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import PublicNavbar from "./components/PublicNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchForm from "./components/SearchForm";
import "./components/IconFontAwesome";
import ProtectedRouter from "./pages/ProtectdRouter";
import Login from "./pages/Login";
import DetailGif from "./pages/DetailGif";

function App() {
  return (
    <Router>
      <PublicNavbar />
      <SearchForm />
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => <Home {...props} endpoint="trending" />}
        />
        <Route
          path="/reactions"
          render={(props) => <Home {...props} endpoint="search?q=reaction" />}
        />
        <Route
          path="/sports"
          render={(props) => <Home {...props} endpoint="search?q=sport" />}
        />
        <Route
          path="/stickers"
          render={(props) => <Home {...props} endpoint="search?q=sticker" />}
        />
        <Route
          path="/weird"
          render={(props) => <Home {...props} endpoint="search?q=weird" />}
        />
        <Route
          path="/celebrities"
          render={(props) => (
            <Home {...props} endpoint="search?q=celebrities" />
          )}
        />
        <Route path="/login" exact component={Login} />
        <ProtectedRouter
          path="/gif/:id"
          render={(props) => <DetailGif {...props} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
