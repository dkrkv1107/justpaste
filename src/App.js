import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Middle from "./Middle";
import Footer from "./Footer";
import { Button } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Middle />
      <Footer />
    </div>
  );
}

export default App;
