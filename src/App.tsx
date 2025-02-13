import { Routes, Route } from "react-router-dom";
import Test from "./components/Test";
import Home from "./page/Home";
import Error from "./utils/Error";

const App = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/test" element={<Test />} />
      <Route path="*" element={<Error statusCode={404} />} />
    </Routes>
  );
};

export default App;
