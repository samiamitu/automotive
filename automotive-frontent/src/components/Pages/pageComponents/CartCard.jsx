import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";

const CartCard = ({ card, handleDelete }) => {
  const id = card?.cart;
  const userProductId = card?._id;

  const [product, setProduct] = useState({});

  useEffect(() => {
    const dataFetch = () => {
      fetch(
        `https://assignment-10-server-gamma-six.vercel.app/brands/product/${id}`
      )
        .then((res) => res.json())
        .then((data) => {
          setProduct(data);
        });
    };
    dataFetch();
  }, [id]);

  return (
    <div>
      <div className="border p-4 m-4 md:m-0 rounded-lg text-center">
        <img
          src={product.image}
          alt=""
          className="w-80 h-48 mx-auto rounded-lg"
        />
        <div className="p-3">
          <p className="mt-2 text-lg font-semibold">{product.name}</p>
          <p className="text-sm text-gray-500">Brand: {product.brand}</p>
          <p className="text-sm text-gray-500">Type: {product.type}</p>
          <p className="text-gray-600 text-lg font-semibold">
            Price: ${product.price}
          </p>
          <p className="text-sm text-yellow-500">Rating: {product.rating}</p>
          <div className="mt-4">
            <button
              onClick={() => handleDelete(userProductId)}
              className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

CartCard.propTypes = {
  card: PropTypes.object,
  handleDelete: PropTypes.func,
};

export default CartCard;
