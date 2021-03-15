import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import News from "../routes/News";
import Home from "../routes/Home";
import Login from "../routes/Login";
import Profile from "../components/Profile";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Content>
          <Switch>
            <Route exact path="/news" component={News} />
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </Content>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
