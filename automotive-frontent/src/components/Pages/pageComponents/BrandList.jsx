import { Link } from "react-router-dom";

const BrandList = () => {
  const brands = [
    { id: 1, name: "Toyota", imageUrl: "/assets/toyota.png" },
    { id: 2, name: "Ford", imageUrl: "assets/ford.png" },
    { id: 3, name: "BMW", imageUrl: "assets/bmw.png" },
    {
      id: 4,
      name: "Mercedes-Benz",
      imageUrl: "assets/mercedes.png",
    },
    { id: 5, name: "Tesla", imageUrl: "assets/tesla.png" },
    { id: 6, name: "Honda", imageUrl: "assets/honda.png" },
  ];

  return (
    <div className="w-full md:my-20 my-10">
      <h2 className="text-4xl text-center md:my-10 my-5">Our Top Brands</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 ">
        {brands.map((brand) => (
          <Link to={`/brands/${brand.name}`} key={brand.id}>
            <div className="text-center border p-3 rounded-lg shadow-lg">
              <img
                src={brand.imageUrl}
                alt={brand.name}
                className="h-24 mx-auto"
              />
              <p className="mt-2 text-lg font-semibold">{brand.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BrandList;
