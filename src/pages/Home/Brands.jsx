import PropTypes from "prop-types";
const Brands = ({ brand }) => {
  return (
    <div>
      <div className="card bg-white">
        <figure className="px-10 py-5 shadow-md shadow-[#FBF3E2]">
          <img className="w-60 h-52  border-t-0" src={brand.logo} alt="Shoes" />
        </figure>
        <hr />
        <div className="card-body items-center text-center">
          <h2 className="card-title">{brand.title}</h2>
        </div>
      </div>
    </div>
  );
};
Brands.propTypes = {
  brand: PropTypes.object,
};
export default Brands;
