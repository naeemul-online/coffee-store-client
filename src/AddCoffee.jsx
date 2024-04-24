import Swal from 'sweetalert2'


const AddCoffee = () => {
  const handleAddCoffee = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.name.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    console.log(newCoffee);

    // send data to the server
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.insertedId){
          // alert('Coffee added successfully')
          Swal.fire({
            title: 'Success!',
            text: 'User added successfully',
            icon: 'success',
            confirmButtonText: 'OK'
          })
          form.reset();
        }
    })
  };
  return (
    <div className="w-2/4 mx-auto  my-12">
      <h2 className="text-3xl font-bold text-center">Add Coffee</h2>
      <form onSubmit={handleAddCoffee}>
        {/* Row: Name and Chef */}
        <div className="flex md:flex-row  gap-4 flex-col">
          <div className="form-control w-full">
            <div className="label">
              <span className="label-text font-bold">Name</span>
            </div>
            <input
              type="text"
              name="name"
              placeholder="Enter coffee name"
              className="input input-bordered w-full"
            />
            <div className="label"></div>
          </div>
          <div className="form-control w-full">
            <div className="label">
              <span className="label-text font-bold">Available Quantity</span>
            </div>
            <input
              type="text"
              name="quantity"
              placeholder="Enter coffee chef"
              className="input input-bordered w-full"
            />
            <div className="label"></div>
          </div>
        </div>
        {/* Row: Supplier and Test */}
        <div className="flex md:flex-row  gap-4 flex-col">
          <div className="form-control w-full">
            <div className="label">
              <span className="label-text font-bold">Supplier</span>
            </div>
            <input
              type="text"
              name="supplier"
              placeholder="Enter coffee supplier"
              className="input input-bordered w-full"
            />
            <div className="label"></div>
          </div>
          <div className="form-control w-full">
            <div className="label">
              <span className="label-text font-bold">Taste</span>
            </div>
            <input
              type="text"
              name="taste"
              placeholder="Enter coffee taste"
              className="input input-bordered w-full"
            />
            <div className="label"></div>
          </div>
        </div>
        {/* Row: Categories and Details */}
        <div className="flex md:flex-row  gap-4 flex-col">
          <div className="form-control w-full">
            <div className="label">
              <span className="label-text font-bold">Category</span>
            </div>
            <input
              type="text"
              name="category"
              placeholder="Enter coffee category"
              className="input input-bordered w-full"
            />
            <div className="label"></div>
          </div>
          <div className="form-control w-full">
            <div className="label">
              <span className="label-text font-bold">Details</span>
            </div>
            <input
              type="text"
              name="details"
              placeholder="Enter coffee details"
              className="input input-bordered w-full"
            />
            <div className="label"></div>
          </div>
        </div>
        {/* Row: Photo */}
        <div className="form-control w-full">
          <div className="label">
            <span className="label-text font-bold">Photo</span>
          </div>
          <input
            type="text"
            name="photo"
            placeholder="Enter Photo URL"
            className="input input-bordered w-full"
          />
          <div className="label"></div>
        </div>
        {/* Row: Categories and Details */}
        <div className="form-control w-full ">
          <button className="btn bg-gray-300" type="submit">
            Add Coffee
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
