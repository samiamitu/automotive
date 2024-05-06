import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://assignment-10-server-gamma-six.vercel.app/brands/product/${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(error=>{
        console.error("there was an error: ", error);
        setLoading(false);
      })
  }, [id]);

  const handleAddToCart = () => {
    const updatedUer = {
      email: user?.email,
      cart: id,
    };
    // send data to the server
    fetch("https://assignment-10-server-gamma-six.vercel.app/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUer),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Added to cart!");
      });
  };

  return (
<>
{
  loading? (
    <div className="w-screen h-screen flex justify-center items-center">
    <span className="loading loading-spinner loading-lg text-success text-5xl "></span>
  </div>
  )
  :
  (
    <div className="container mx-auto mt-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
      <div>
        <img
          src={product?.image}
          alt=""
          className="w-full"
        />
      </div>
      <div className="w-[90%] mx-auto md:mx-0 text-center space-y-4">
        <h2 className="text-2xl font-semibold">{product?.name}</h2>
        <p className="text-lg text-gray-500">{product?.brand}</p>
        <p className="text-lg text-gray-500">{product?.type}</p>
        <p className="text-2xl text-gray-600">$ {product?.price}</p>
        <div className="flex items-center w-max mx-auto">
          <span className="text-yellow-400 text-lg mr-2">
            Rating: {product?.rating}
          </span>
        </div>
        <p className="mt-4 w-[80%] mx-auto">{product?.description}</p>
        <button
          onClick={handleAddToCart}
          className="bg-gray-400 text-gray-800 font-semibold px-4 py-2 rounded-md mt-4"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
  )
}
</>
  );
};

export default ProductDetails;
