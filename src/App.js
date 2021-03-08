import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import ContentWithFeaturedImage from "./components/ContentWithFeaturedImage/ContentWithFeaturedImage";
import ThreeColCta from "./components/ThreeColCta/ThreeColCta";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import CtaSlider from "./components/CtaSlider/CtaSlider";
import CtaForm from "./components/CtaForm/CtaForm";

import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ContentWithFeaturedImage />
      <ThreeColCta />
      <ImageSlider />
      <CtaSlider />
      {/* testimonals w/slick slider on mobile */}
      <CtaForm />
      {/* Content with featured image */}
      <Footer />
    </>
  );
}

export default App;
