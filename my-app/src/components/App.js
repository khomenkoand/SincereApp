import Header from "./Header";
import Footer from "./Footer";
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
      <Footer />
    </div>
  );
};

export default App;
