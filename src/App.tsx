import { Route, Routes } from "react-router-dom";
import Landing from "./components/layout/Landing";
import Home from "./pages/Home";
import Collections from "./pages/Collections";
import ProductFilter from "./components/ProductDescription/ProductFilter";
import SignInForm from "./components/Auth/SignInForm";
import SignUpForm from "./components/Auth/SignUpForm";
import ShoppingCart from "./components/common/AddToCart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />}>
          <Route index element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/slider" element={<ProductFilter />} />
          <Route path="/signin" element={<SignInForm />} />
          <Route path="/register" element={<SignUpForm />} />
        </Route>

        <Route path="/addtocart" element={<ShoppingCart />} />
      </Routes>
    </>
  );
}

export default App;
