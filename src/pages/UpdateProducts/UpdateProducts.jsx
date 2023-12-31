import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
const UpdateProducts = () => {
  const product = useLoaderData();
  const { _id, image, name, type, price, rating, brand_name, short_description } = product;

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const type = form.type.value;
    const brand_name = form.brand_name.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const image = form.image.value;
    const short_description = form.short_description.value;

    const updatedProduct = { image, name, type, price, rating, brand_name, short_description };
    console.log(updatedProduct);

    // Send data to the server
    fetch(`https://brand-new-website-server.vercel.app/products/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Product updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  // console.log(product);
  return (
    <div>
      <div className="bg-[#F4F3F0] min-h-screen">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-20 pt-20">
            <span className="text-[#2d373c]">Update </span>
            <span className="text-[#FF6A25]">Product</span>
          </h1>
          <form className="px-5" onSubmit={handleUpdateProduct}>
            {/* form row */}
            <div className="flex gap-5 mb-5">
              <div className="w-1/2">
                <label htmlFor="">Name</label>
                <input
                  defaultValue={name}
                  required
                  type="text"
                  name="name"
                  placeholder="Enter product name"
                  id=""
                  className="border border-[#2d373c] focus-within:outline-[#FF6A25] block w-full py-3 px-3 mt-2"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="">Type</label>
                <input
                  defaultValue={type}
                  required
                  type="text"
                  name="type"
                  placeholder="Enter product type"
                  id=""
                  className="border border-[#2d373c] focus-within:outline-[#FF6A25] block w-full py-3 px-3 mt-2"
                />
              </div>
            </div>
            {/* form row */}
            <div className="flex gap-5 mb-5">
              <div className="w-1/2">
                <label htmlFor="">Brand name</label>
                <select
                  defaultValue={brand_name}
                  required
                  name="brand_name"
                  placeholder="select brand"
                  className="border border-[#2d373c] focus-within:outline-[#FF6A25] block w-full py-3 px-3 mt-2"
                >
                  <option value="" disabled hidden>
                    Choose a brand
                  </option>
                  <option value="Toyota">Toyota</option>
                  <option value="BMW">BMW</option>
                  <option value="Tesla">Tesla</option>
                  <option value="Mercedes-Benz">Mercedes-Benz</option>
                  <option value="Honda">Honda</option>
                  <option value="Ford">Ford</option>
                </select>
              </div>
              <div className="w-1/2">
                <label htmlFor="">Price</label>
                <input
                  defaultValue={price}
                  required
                  type="text"
                  name="price"
                  placeholder="Enter price"
                  id=""
                  className="border border-[#2d373c] focus-within:outline-[#FF6A25] block w-full py-3 px-3 mt-2"
                />
              </div>
            </div>
            {/* form row */}
            <div className="flex gap-5 mb-5">
              <div className="w-1/2">
                <label htmlFor="">Rating</label>
                <input
                  defaultValue={rating}
                  required
                  type="text"
                  name="rating"
                  placeholder="Enter product rating"
                  id=""
                  className="border border-[#2d373c] focus-within:outline-[#FF6A25] block w-full py-3 px-3 mt-2"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="">Photo</label>
                <input
                  defaultValue={image}
                  required
                  type="text"
                  name="image"
                  placeholder="Enter coffee photo URL"
                  id=""
                  className="border border-[#2d373c] focus-within:outline-[#FF6A25] block w-full py-3 px-3 mt-2"
                />
              </div>
            </div>
            {/* form row */}
            <div className="">
              <div className="">
                <label htmlFor="">Short description</label>
                <input
                  defaultValue={short_description}
                  required
                  type="text"
                  name="short_description"
                  placeholder="Enter short description"
                  id=""
                  className="border border-[#2d373c] focus-within:outline-[#FF6A25] block w-full py-3 px-3 mt-2"
                />
              </div>
            </div>
            {/* button */}
            <div className=" mt-8 pb-10">
              <input
                type="submit"
                value="Update Product"
                className="w-full hover:border-2 text-white hover:border-[#FF6A25] hover:bg-white hover:text-[#FF6A25] font-semibold bg-[#FF6A25] py-3 text-xl hover:transition hover:duration-500 mt-8"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProducts;
