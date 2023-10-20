import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const product = useLoaderData();
  console.log(product);
  return (
    <div>
      <h2>Details</h2>
    </div>
  );
};

export default ProductDetails;
