import { Route, Routes } from "react-router-dom";
import Landing from "./components/layout/Landing";
import Home from "./pages/Home";
import Collections from "./pages/Collections";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />}>
          <Route index element={<Home />} />
          <Route path="/collections" element={<Collections />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
