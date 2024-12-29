
// import { ProductGrid } from "./components/features/ProductGrid";
// import Navbar from "./components/Navbar/Navbar";
import Footer from './components/common/Footer';
import Banner from "./components/home/Banner";
import VideoComponent from './components/home/VideoComponent';
// import PopUp from "./components/Navbar/PopUp";

function App() {
  return (
    // <ProductGrid itemsPerPage={10} totalItems={100} />
    <>
    
      {" "}
          <Banner/>
            <VideoComponent
            videoSrc="/home/video.mp4"
            heading="VISIT ALPHALAND"
            subHeading="An oasis where individuals come to Learn More Dream More Be More."
            buttonText="Learn More"
            buttonUrl="https://officialalphaland.com/"
          />
      {/* <Navbar></Navbar> */}
      <Footer/>
    </>
  );
}

export default App;



