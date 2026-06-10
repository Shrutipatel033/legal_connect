import HeroSection from "../../components/home/HeroSection";
// import PopularCategories from "./PopularCategories";
import PrivacyPromise from "../../components/home/PrivacyPromise";
import Review from "../../components/home/Review"
import CTA from "../../components/home/CTA";
const Home = () => {
  return (
    <>
      <HeroSection />
      {/* <PopularCategories /> */}
      <PrivacyPromise />
      <Review />
      <CTA />
    </>

  );
};

export default Home;