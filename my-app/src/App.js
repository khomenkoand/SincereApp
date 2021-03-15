import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import News from "./routes/News";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Profile from "./routes/Profile";
import { NEWS, HOME, LOGIN, PROFILE } from "./constants/Routes";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.app}>
      <Router>
        <Header />
        <Content>
          <Switch>
            <Route exact path={NEWS} component={News} />
            <Route exact path={HOME} component={Home} />
            <Route exact path={LOGIN} component={Login} />
            <Route exact path={PROFILE} component={Profile} />
          </Switch>
        </Content>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
