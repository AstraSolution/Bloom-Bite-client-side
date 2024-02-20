import Swal from "sweetalert2";
const AddFood = () => {
  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const image = form.get("image");
    const brand_name = form.get("brand_name");
    const category = form.get("category");
    const price = form.get("price");
    const description = form.get("description");
    const imageData = new FormData();
    imageData.append("image", image);
    fetch(
      "https://api.imgbb.com/1/upload?key=a7c623941e0f93c1a6b379243e2ca35f",
      {
        method: "POST",
        body: imageData,
      }
    )
      .then((response) => response.json())
      .then((data) => {
        const newProduct = {
          photo: data.data.display_url,
          description,
          price,
          brand_name,
          category,
        };
        fetch("http://localhost:5000/product", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newProduct),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener("mouseenter", Swal.stopTimer);
                  toast.addEventListener("mouseleave", Swal.resumeTimer);
                },
              });
              Toast.fire({
                icon: "success",
                title: "Product Added Successfully",
              });
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
  };

  return (
    <div
    className="flex justify-center items-center min-h-screen bg-cover"
    style={{
      backgroundImage: `url('https://e1.pxfuel.com/desktop-wallpaper/152/32/desktop-wallpaper-best-4-restaurant-backgrounds-on-hip-italian-food.jpg')`,
    }}
  >
    <div className="bg-opacity-70 backdrop-blur-sm p-8 rounded-xl shadow-lg w-96">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">
        Add a Product
      </h2>
        <form onSubmit={handleAddProduct}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-yellow-400 mb-1">
              Food Name:
            </label>
            <input
              type="text"
              name="brand_name"
              placeholder="Food Name"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-yellow-400 mb-1">
              Image:
            </label>
            <input
              type="file"
              name="image"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-yellow-400">
              Category:
            </label>
            <select
              className="w-full px-4 py-2 rounded border focus:outline-none focus:ring focus:border-blue-300"
              name="category"
              required
            >
              <option value="Web Development">Web Development</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Graphics Design">Graphics Design</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-yellow-400 mb-1">
              Price:
            </label>
            <input
              type="text"
              name="price"
              placeholder="Price"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-yellow-400 mb-1">
              Description:
            </label>
            <textarea
              type="text"
              name="description"
              placeholder="Short Description"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Add Food
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddFood;
