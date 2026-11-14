import Brands from "@/templates/Brands";
import HomeAbout from "@/templates/HomeAbout";
import HomeAreas from "@/templates/HomeAreas";
import HomeAttorneys from "@/templates/HomeAttorneys";
import HomeBlog from "@/templates/HomeBlog";
import HomeClients from "@/templates/HomeClients";
import HomeContact from "@/templates/HomeContact";
import HomeCounters from "@/templates/HomeCounters";
import HomeCta from "@/templates/HomeCta";
import HomeSlider from "@/templates/HomeSlider";

function Home() {
  return (
    <>
      <h6>home page</h6>
      <HomeSlider />
      <HomeAbout />
      <HomeCounters />
      <HomeAreas />
      <HomeClients />
      <Brands />
      <HomeAttorneys />
      <HomeCta />
      <HomeBlog />
      <HomeContact />
    </>
  );
}

export default Home;
