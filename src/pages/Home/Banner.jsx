const Banner = () => {
  return (
    <div>
      <div
        className="w-full bg-cover bg-center min-h-[500px] md:min-h-[620px]"
        style={{ backgroundImage: "url(https://i.ibb.co/w6bSGw2/bg-header.jpg)" }}
      >
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="text-center">
          <div className=" flex justify-center  md:">
            <div className="max-w-5xl mt-14">
              <h1 className="mb-5 text-3xl font-bold md:text-5xl drop-shadow-xl md:font-extrabold text-[#FF6A25]" data-aos="zoom-in">
                A new Level of Comfort Tested for <br /> <span className="font-bold">your Safety</span>
              </h1>
              <p className="mb-5 text-[#2d373c]" data-aos="zoom-in">
                Start Your Automotive Journey with a Warm Welcome.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
