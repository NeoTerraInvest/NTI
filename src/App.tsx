import { Routes, Route } from "react-router-dom";
import Test from "./components/Test";
import Home from "./page/Home";

const App = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
};

export default App;
