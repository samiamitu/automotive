import toast from "react-hot-toast";

const AddProduct = () => {
  const handleAdd = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const type = form.type.value;
    const image = form.image.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const brand = form.brand.value;

    const Product = {
      name,
      type,
      image,
      price,
      description,
      rating,
      brand,
    };
    // send data to the server
    fetch("https://assignment-10-server-gamma-six.vercel.app/brands", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
        toast.success("Product Added Successfully!");
      });
  };

  return (
    <div className="w-[90%] mx-auto dark:text-gray-800">
      <h2 className="text-3xl font-extrabold text-center mb-7">
        Update Product:{" "}
      </h2>
      <form onSubmit={handleAdd}>
        {/* form name and type */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Type</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="type"
                placeholder="Type"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form imageURL and Price */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">ImageURL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="image"
                placeholder="imageURL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form description and Rating row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="description"
                placeholder="description"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="rating"
                placeholder="Rating"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form brand select row */}
        <div className="md:flex mb-8">
          <div className="form-control  max-w-xs mx-auto">
            <label className="label">
              <span className="label-text">Brand</span>
            </label>
            <label className="input-group">
              <select
                required
                className="select select-success w-full"
                name="brand"
              >
                <option>toyota</option>
                <option>ford</option>
                <option>bmw</option>
                <option>mercedes-benz</option>
                <option>tesla</option>
                <option>honda</option>
              </select>
            </label>
          </div>
        </div>
        <div className="max-w-fit mx-auto">
          <input
            type="submit"
            value="Add Product"
            className="btn border-none bg-gray-400"
          />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
