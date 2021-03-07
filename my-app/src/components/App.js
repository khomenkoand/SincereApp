import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import News from "../routes/News";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Content>
          <Switch>
            <Route exact path="/news" component={News} />
          </Switch>
        </Content>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
