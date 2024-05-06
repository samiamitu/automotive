import ProductCard from "./pageComponents/ProductCard";
import Advertisement from "./pageComponents/Advertisement";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NoProductFound from "./pageComponents/NoProductFound";

const BrandProducts = () => {
  const { brand } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://assignment-10-server-gamma-six.vercel.app/brands/${brand.toLowerCase()}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [brand]);

  return (
    <>
      {loading ? (
    <div className="w-screen h-screen flex justify-center items-center">
    <span className="loading loading-spinner loading-lg text-success text-5xl "></span>
  </div>
      ) : products.length ? (
        <div className="md:p-8 md:w-[95%] lg:w-[80%] mx-auto space-y-5">
          <div className="lg:w-2/3 mx-auto">
          </div>
          <h2 className="text-4xl text-center">All Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      ) : (
        <NoProductFound></NoProductFound>
      )}
    </>
  );
};

export default BrandProducts;
