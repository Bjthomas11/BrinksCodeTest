import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import ContentWithFeaturedImage from "./components/ContentWithFeaturedImage/ContentWithFeaturedImage";

import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ContentWithFeaturedImage />
      {/* CTA */}
      {/* slick slider */}
      {/* Box Cta w/slick slider on mobile */}
      {/* testimonals w/slick slider on mobile */}
      {/* CTA w/form */}
      {/* Content with featured image */}
      <Footer />
    </>
  );
}

export default App;
