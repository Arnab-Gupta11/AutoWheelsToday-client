// import { useLoaderData } from "react-router-dom";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import MyCartCard from "./MyCartCard";

const MyCart = () => {
  const { user } = useContext(AuthContext);
  const email = user.email;
  const [loadedcarts, setLoadedCartsCarts] = useState([]);

  useEffect(() => {
    fetch(`https://brand-new-website-server.vercel.app/carts/${email}`)
      .then((res) => res.json())
      .then((data) => setLoadedCartsCarts(data));
  }, [email]);
  //   console.log(loadedcarts);
  //   const data = loadedcarts;
  //   console.log(data);
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    setCarts(loadedcarts);
  }, [loadedcarts]);

  console.log(carts);
  return (
    <div>
      <div className="bg-[#F6F6F6] pt-20 min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-screen-xl mx-auto pb-10">
          {carts.map((cart) => (
            <MyCartCard key={cart._id} cart={cart} carts={carts} setCarts={setCarts}></MyCartCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCart;
