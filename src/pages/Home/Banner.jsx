const Banner = () => {
  return (
    <div>
      <div className="hero min-h-[500px] md:min-h-[620px]" style={{ backgroundImage: "url(https://i.ibb.co/JQ0mSqX/banner1.jpg)" }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-5xl flex md:mt-8">
            <div>
              <h1 className="mb-5 text-3xl font-bold md:text-5xl drop-shadow-lg md:font-extrabold text-[#FF6A25]" data-aos="zoom-in">
                A new Level of Comfort Tested for <br /> <span className="font-bold">your Safety</span>
              </h1>
              <p className="mb-5" data-aos="zoom-in">
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
