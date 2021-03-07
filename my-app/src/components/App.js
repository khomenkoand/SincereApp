import Header from "./Header";
import Content from "./Content";
import News from "../routes/News";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Content>
        <News />
      </Content>
    </div>
  );
};

export default App;
