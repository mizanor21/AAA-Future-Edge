import About from "./About/About";
import TabsMain from "./GlobalPartners/TabsMain";
// import Goal from "./Goal/Goal";
import Hero from "./Hero/Hero";
// import Plan from "./Plan/Plan";
// import Reviews from "./Reviews/Reviews";
import HRConsultancy from "../HR/HRConsultancy";
import WhyChooseUs from "../Home/Our Clients/WhyChooseUs";
const Root = () => {
  return (
    <div>
      <Hero />
      <About />
      {/* <Plan></Plan> */}

      <TabsMain></TabsMain>
      <HRConsultancy></HRConsultancy>
      <WhyChooseUs></WhyChooseUs>
      {/* <Reviews></Reviews> */}
    </div>
  );
};

export default Root;
