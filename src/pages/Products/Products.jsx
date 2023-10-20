import { useLoaderData } from "react-router-dom";
import ProductsCard from "./ProductsCard";

const Products = () => {
  const loadedData = useLoaderData();
  console.log(loadedData);
  return (
    <div>
      {loadedData.length === 0 ? (
        <div className="w-3/5 mx-auto text-[#2d373c]  text-center mt-20 lg:mt-56">
          <h2>
            <q className="text-xl lg:text-3xl font-bold">
              Currently, there are no products available for this brand. Please explore our other brands and models to find the perfect vehicle for
              your needs. We are constantly updating our inventory, so check back soon for the latest additions.
            </q>
          </h2>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-screen-xl mx-auto">
          {loadedData.map((product) => (
            <ProductsCard key={product.key} product={product}></ProductsCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
