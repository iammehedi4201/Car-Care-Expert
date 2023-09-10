import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-hot-toast";

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const loadedService = useLoaderData();
  const { _id,img,title, price,description} = loadedService;

  //handle Book service
  const handleBookService = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const phoneNumber = form.phoneNumber.value;
    const date = form.date.value;
    const price = form.price.value;
    const message = form.message.value;
    const bookingInfo = {
      email,
      CustomerName: name,
      phoneNumber, 
      service_id: _id,
      service :title,
      img:img,
      date,
      price,
      message,
    };

    fetch("http://localhost:3000/bookings",{
          method:"POST",
          headers:{
             'content-type' : 'application/json'
          },
          body:JSON.stringify(bookingInfo)
    })
    .then(res=>res.json())
    .then(data=>{
          if (data.insertedId ) {
              toast.success("Booking Successfully")
          }
    })
    .catch(error=>console.error(error))
    
  };

  return (
    <div  className="min-h-screen">
      <div className="hero  bg-base-200 p-10">
        <div className="card sm:w-4/5">
          <h1 className="text-center text-3xl font-bold text-[#FF3811]">
            Book Services : {title}
          </h1>
          <form onSubmit={handleBookService}>
            <div className="card-body grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="form-control sm:col-span-2">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  defaultValue={user?.email}
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  defaultValue={user?.displayName}
                />
              </div>
              <div className="form-control">
                <input
                  type="number"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="date"
                  name="date"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <input
                  type="text"
                  name="price"
                  className="input input-bordered"
                  defaultValue={"$" + price}
                  readOnly
                />
              </div>

              <div className="form-control sm:col-span-2">
                <textarea
                  rows="4"
                  name="message"
                  defaultValue={description}
                  className="block p-2.5 w-full h-52 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="form-control mt-6 sm:col-span-2">
                <button
                  type="submit"
                  className="btn hover:bg-orange-600 bg-[#FF3811] text-white"
                >
                  Confirm Order
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
