import "./App.css";
import Header from "./components/Header/Header";
// import NavRoute from "./components/navbar/NavRoute";
import MainnavRoute from "./components/navbar/Mainnav";
import NavRoute from "./components/navbar/NavRoute";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <MainnavRoute />
        {/* <Navbar /> */}
      </div>
      //{" "}
    </BrowserRouter>
  );
}

export default App;
