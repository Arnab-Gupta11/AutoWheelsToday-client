import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";
const ProductDetails = () => {
  const product = useLoaderData();
  const { image, name, type, short_description, price, rating } = product;
  // console.log(product);
  const { user } = useContext(AuthContext);
  const email = user.email;

  const handleCart = () => {
    const newCart = { email, image, name, type, rating, price };
    console.log(newCart);
    // Send Data to the server
    fetch("https://brand-new-website-server.vercel.app/carts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCart),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: "Success!",
          text: "Product added successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
      });
  };

  return (
    <div className="bg-[#f7f1e6] min-h-screen ">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 pt-10 items-center">
        <div className="lg:col-span-3">
          <img className="w-full h-[600px]" src={image} alt="" />
        </div>
        <div className="lg:col-span-2 px-5 ">
          <h2 className="text-[#2d373c] font-semibold text-4xl">{name}</h2>
          <h4 className="text-[#2d373c] font-medium text-2xl mt-1">{type}</h4>
          <p className="text-gray-600 font-medium text-base text-justify mt-3">{short_description}</p>
          <h2 className="text-3xl font-bold text-[#FF6A25] mt-3">{price}</h2>

          <button
            className="w-full hover:border-2 text-white hover:border-[#FF6A25] hover:bg-white hover:text-[#FF6A25] font-medium bg-[#FF6A25] py-3 text-[xl] hover:transition hover:duration-500 mt-8"
            onClick={handleCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
