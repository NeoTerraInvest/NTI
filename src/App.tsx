import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import Main from "./page/main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Home" element={<Home />} />
    </Routes>
  );
}

export default App;
