import { Routes, Route } from "react-router-dom";
import Test from "./components/dev/Test";
import Home from "./page/Home";
import Error from "./utils/Error";

const testQeury = import.meta.env.VITE_TEST_QUERY;

const App = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path={`/test?${testQeury}`} element={<Test />} />
      <Route path="*" element={<Error statusCode={404} />} />
    </Routes>
  );
};

export default App;
