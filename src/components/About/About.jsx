const About = () => {
  return (
    <div>
      <div className=" max-w-screen-xl mx-auto my-10 py-20 px-7 rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-xl items-center mx-auto gap-7">
          <div>
            <div className="text-center  px-5 lg:px-0 lg:text-start">
              <h2 className="text-xl lg:text-2xl font-semibold text-[#FF6A25]">About us</h2>
              <h1 className="text-3xl lg:text-6xl  font-semibold text-[#2d373c] mt-3">
                Driven by Your Automotive <span className="text-[#FF6A25]"> Dreams</span>
              </h1>
              <p className="text-base text-gray-600 font-medium mt-3 text-justify">
                At <span className="font-bold text-[#2d373c]">AutoWheelsToday</span>, our love for cars is more than a passion; its a way of life. We
                are a dedicated team of automotive enthusiasts, experts, and storytellers. With our fingers on the pulse of the automotive world, we
                are here to bring you the latest trends, reviews, and insights. From classic cars to cutting-edge technology, we cover it all. Our
                mission is to be your trusted guide in the vast realm of automobiles, helping you make informed decisions and discover the joy of
                driving. Join us in our journey through the world of wheels. Welcome to{" "}
                <span className="font-bold text-[#2d373c]">AutoWheelsToday</span>, where the road to automotive excellence begins.
              </p>
            </div>

            {/* <div className="flex justify-start gap-10 mt-5">
            <div className="flex items-center gap-3">
              <MdEventAvailable className="text-7xl"></MdEventAvailable>
              <div>
                <h2 className="text-5xl font-bold">980</h2>
                <p className="text-xl">Events</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaUserFriends className="text-7xl"></FaUserFriends>
              <div>
                <h2 className="text-5xl font-bold">896</h2>
                <p className="text-xl">Clients</p>
              </div>
            </div>
          </div> */}
          </div>
          <div>
            <img className="h-full rounded-lg" src="https://i.ibb.co/f0zNW70/handsome-elegant-man-car-salon.jpg " alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
