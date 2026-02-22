import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import FirstPurchaseBanner from "../components/FirstPurchaseBanner";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import SaleBanner from "../components/SaleBanner";
import Testimonials from "../components/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Home(){
    return(
  <>
  <Hero/>
  <SaleBanner/>
  <Categories/>
  <FirstPurchaseBanner/>
  <FeaturedProducts/>
  <Testimonials/>
  <WhyChooseUs/>
  <Newsletter/>
  
  

 
  </>  
    )
}