import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const ProductsCard = ({ product }) => {
  const { _id, price, image, brand_name, type, rating, name } = product;

  return (
    <div>
      <div className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 ">
        <div className="relative mx-4 mt-4 overflow-hidden text-white  rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
          <img className="h-80 w-11/12 mx-auto " src={image} alt="ui/ux review check" />
          <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h5 className="text-4xl text-[#2d373c]  font-bold ">{name}</h5>
            <p className="flex items-center gap-1.5  text-base font-bold text-[#FF6A25]">{price}</p>
          </div>
          <p className="text-3xl font-medium text-gray-700">{brand_name}</p>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">{type}</p>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">{rating}</p>
          <div className="my-5 flex gap-5">
            <div className="w-1/2">
              <Link to={`/brands/${brand_name}/${_id}`}>
                <button className="w-full hover:border-2 text-white hover:border-[#FF6A25] hover:bg-white hover:text-[#FF6A25] font-medium bg-[#FF6A25] py-3 text-[xl] hover:transition hover:duration-500">
                  Details
                </button>
              </Link>
            </div>
            <div className="w-1/2">
              <Link to={`/brands/update/${brand_name}/${_id}`}>
                <button className="w-full hover:border-2 text-white hover:border-[#FF6A25] hover:bg-white hover:text-[#FF6A25] font-medium bg-[#FF6A25] py-3 text-[xl] hover:transition hover:duration-500">
                  Update
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
ProductsCard.propTypes = {
  product: PropTypes.object,
};
export default ProductsCard;
