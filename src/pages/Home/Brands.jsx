import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Brands = ({ brand }) => {
  return (
    <div>
      <Link to={`/brands/${brand.title}`}>
        <div className="card border hover:shadow-md hover:transition-all hover:duration-1000 hover:shadow-[#FF6A25] hover:cursor-pointer hover:bg-[#FBF3E2]">
          <figure className="px-10 py-5">
            <img className="w-60 h-52  border-t-0 shadow-xl shadow-[#FBF3E2]" src={brand.logo} alt="Shoes" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{brand.title}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};
Brands.propTypes = {
  brand: PropTypes.object,
};
export default Brands;
