import { ProductGrid } from "./components/features/ProductGrid";
import WomenFitness from "./components/home/WomenFitness";
import Navbar from "./components/Navbar/Navbar";
import PopUp from "./components/Navbar/PopUp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    // <ProductGrid itemsPerPage={10} totalItems={100} />
    <>
      {" "}
      <WomenFitness></WomenFitness>
    </>
  );
}

export default App;
