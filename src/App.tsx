import { Route, Routes } from "react-router-dom";
import Landing from "./components/layout/Landing";
import Home from "./pages/Home";
import Collections from "./pages/Collections";
import ProductFilter from "./components/ProductDescription/ProductFilter";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />}>
          <Route index element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/slider" element ={<ProductFilter/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
