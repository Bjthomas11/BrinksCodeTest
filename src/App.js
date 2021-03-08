import Header from "./components/Header/Header";

import Hero from "./components/Hero/Hero";
import ContentWithFeaturedPhone from "./components/ContentWithFeaturedPhone/ContentWithFeaturedPhone";
import ThreeColCta from "./components/ThreeColCta/ThreeColCta";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import CtaSlider from "./components/CtaSlider/CtaSlider";
import Testimonials from "./components/Testimonials/Testimonials";
import CtaForm from "./components/CtaForm/CtaForm";
import ContentWithFeaturedImage from "./components/ContentWithFeaturedImage/ContentWithFeaturedImage";
import Footer from "./components/Footer/Footer";

import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ContentWithFeaturedPhone />
      <ThreeColCta />
      <ImageSlider />
      <CtaSlider />
      <Testimonials />
      <CtaForm />
      <ContentWithFeaturedImage />
      <Footer />
    </>
  );
}

export default App;
