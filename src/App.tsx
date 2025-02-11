import { Routes, Route } from "react-router-dom";
import Debug from "./components/Debug";
import Test from "./components/Test";
import Home from "./page/Home";

const App = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route index path="/debug" element={<Debug />} />
      <Route index path="/test" element={<Test />} />
    </Routes>
  );
};

export default App;
