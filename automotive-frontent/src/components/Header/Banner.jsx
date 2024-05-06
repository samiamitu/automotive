const Banner = () => {
  return (
    <div
      className="hero min-h-[80vh]"
      style={{
        backgroundImage:
          "url(assets/porsche-4795517-1280.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-xl">
          <h1 className="mb-5 text-5xl font-bold">
            Discover Your Dream <span className="text-red-600">Car</span>
          </h1>
          <p className="mb-5">
            Explore a wide range of top-quality vehicles and find the perfect
            match for your needs. Let us guide you on your journey to the
            perfect car.
          </p>{" "}
        </div>
      </div>
    </div>
  );
};

export default Banner;
