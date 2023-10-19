import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <h2 className="text-xs font-Merriweather">This is Root</h2>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
