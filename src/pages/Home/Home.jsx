import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Brands from "./Brands";

const Home = () => {
  const loadedBrands = useLoaderData();
  console.log(loadedBrands);
  return (
    <div>
      <Banner></Banner>
      <div className="bg-[#F6F6F6] pt-10">
        <div className="max-w-screen-xl mx-auto grid grid-cols-3 border gap-5 p-10 bg-[#FBF3E2]">
          {loadedBrands.map((brand) => (
            <Brands key={brand._id} brand={brand}></Brands>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
