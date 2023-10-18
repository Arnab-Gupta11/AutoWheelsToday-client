import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <h2 className="text-xs">This is Root</h2>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
