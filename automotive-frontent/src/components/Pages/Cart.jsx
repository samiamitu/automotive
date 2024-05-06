import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import CartCard from "./pageComponents/CartCard";
import Swal from "sweetalert2";

const Cart = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://assignment-10-server-gamma-six.vercel.app/cart/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("there was an error: ", error);
        setLoading(false);
      });
  }, [user]);

  const handleDelete = (userProductId) => {
    fetch(
      `https://assignment-10-server-gamma-six.vercel.app/cart/${userProductId}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            if (data.deletedCount > 0) {
              const remaining = products.filter(
                (product) => product._id !== userProductId
              );
              setProducts(remaining);
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          }
        });
      });
  };

  return (
    <>
      {loading ? (
        <div className="w-screen h-screen flex justify-center items-center">
          <span className="loading loading-spinner loading-lg text-success text-5xl "></span>
        </div>
      ) : (
        <div className="rounded-lg max-w-max mx-auto">
          <h2 className="text-2xl font-bold text-center mt-5 mb-5 md:mb-10">
            Cart Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {products?.length ? (
              products.map((card) => (
                <CartCard
                  key={card._id}
                  card={card}
                  handleDelete={handleDelete}
                ></CartCard>
              ))
            ) : (
              <p className="text-5xl">
                No data found.{" "}
                <span className="text-red-500">Add product to show!</span>
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
