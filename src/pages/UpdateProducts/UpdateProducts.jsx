import { useLoaderData } from "react-router-dom";

const UpdateProducts = () => {
  const product = useLoaderData();
  console.log(product);
  return (
    <div>
      <h2>Update</h2>
    </div>
  );
};

export default UpdateProducts;
