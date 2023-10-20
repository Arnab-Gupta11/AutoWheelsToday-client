import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Brands from "./Brands";
import Review from "../../components/Review/Review";
import About from "../../components/About/About";

const Home = () => {
  const loadedBrands = useLoaderData();
  console.log(loadedBrands);
  return (
    <div>
      <Banner></Banner>
      <div className="bg-[#F6F6F6]">
        <div className="max-w-screen-xl mx-auto ">
          <h2 className="text-center text-4xl font-bold pt-10 text-[#2d373c]">Our Brands</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10 ">
            {loadedBrands.map((brand) => (
              <Brands key={brand._id} brand={brand}></Brands>
            ))}
          </div>
        </div>
      </div>
      <About></About>
      <Review></Review>
    </div>
  );
};

export default Home;
