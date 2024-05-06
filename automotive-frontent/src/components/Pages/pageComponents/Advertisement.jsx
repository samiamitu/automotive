const Advertisement = () => {
  // const images = [
  //     { id: 1, image: "https://i.ibb.co/4Fz1C0f/carousel6.jpg" },
  //     { id: 2, image: "https://i.ibb.co/cbqTkWq/carousel4.jpg" },
  //     { id: 3, image: "https://i.ibb.co/NjdL79Q/carousel5.jpg" },
  //   ];

  //daisyUI slider URL change kore dei click korle
  return (
    <div className="carousel w-full h-60 md:h-80">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/HCHfbjW/0-ford-focus.webp"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/9nt27Jt/hq720.jpg" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/dkLV9DY/7d7a725271eb430f9c81ffc4a8472d82.jpg"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/rm0Z9mb/lexus-banner.png"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
