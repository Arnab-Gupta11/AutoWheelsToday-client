import PropTypes from "prop-types";
import Swal from "sweetalert2";
const MyCartCard = ({ cart, carts, setCarts }) => {
  const { name, image, type, price, email, _id } = cart;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // console.log(_id);
        fetch(`https://brand-new-website-server.vercel.app/carts/${email}/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
              const remainig = carts.filter((car) => car._id !== _id);
              setCarts(remainig);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="mx-5 relative flex max-w-[24rem] flex-col rounded-xl hover:bg-white  hover:transition-all hover:duration-1000 hover:cursor-pointer p-5 hover:shadow-[#FF6A25] hover:shadow-lg">
        <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
          <img className="h-52 py-2" src={image} alt="ui/ux review check" />
        </div>
        <div className="p-6">
          <h4 className="text-2xl text-[#2d373c] font-semibold leading-snug tracking-normal text-blue-gray-900">{name}</h4>
          <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">{type}</p>
          <p className="block mt-3 text-2xl font-bold text-[#FF6A25]">{price}</p>
        </div>
        <div>
          <button
            className="w-full hover:border-2 text-white hover:border-[#FF6A25] hover:bg-white hover:text-[#FF6A25] font-medium bg-[#FF6A25] py-3 text-[xl] hover:transition hover:duration-500 rounded-lg"
            onClick={() => handleDelete(_id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};
MyCartCard.propTypes = {
  cart: PropTypes.object,
  carts: PropTypes.array,
  setCarts: PropTypes.func,
};
export default MyCartCard;
