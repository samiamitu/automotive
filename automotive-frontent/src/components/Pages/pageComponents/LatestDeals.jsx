const LatestDeals = () => {
  return (
    <div>
      <div className="text-center mt-10 md:mt-20">
        <h2 className="text-3xl font-semibold mb-2">Our Latest Deals</h2>
        <p className="text-gray-500 mb-4  md:w-2/3 mx-auto">
          Discover Unbeatable Offers! Get ready for a shopping experience like
          never before. Our latest deals will leave you thrilled and your wallet
          happy. Dont miss out on these extraordinary savings.
        </p>
      </div>
      <div className="py-6 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-4">
          <img
            src="https://i.ibb.co/RQDvYYH/rsz-1new-arrival-banner.jpg"
            alt="New Arrival Banner"
            className="w-full rounded-lg shadow-lg"
          />
          <p className="mt-4">
            Explore our latest arrivals and stay ahead in style. Dont miss out
            on the hottest trends!
          </p>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <img
            src="https://i.ibb.co/4sm5C88/rsz-1summer-sale-banner3.jpg"
            alt="Summer Sale Banner"
            className="w-full rounded-lg shadow-lg"
          />
          <p className="mt-4">
            Get ready for the summer with our amazing sale! Enjoy massive
            discounts on brands.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LatestDeals;
