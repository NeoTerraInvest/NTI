import { Routes, Route } from "react-router-dom";
import Debug from "./components/Debug";
import Test from "./components/Test";

const App = () => {
  return (
    <Routes>
      <Route index path="/" element={<Debug />} />
      <Route index path="/test" element={<Test />} />
    </Routes>
  );
};

export default App;
