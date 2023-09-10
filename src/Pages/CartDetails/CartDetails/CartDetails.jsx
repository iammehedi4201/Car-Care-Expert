/* eslint-disable no-empty */
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import BookingInfo from "../BookingInfo/BookingInfo";
import Swal from "sweetalert2";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CartDetails = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  console.log("Bookings data are :-", bookings);

  //booking data loading

  useEffect(() => {
    const uri = `http://localhost:3000/bookings?email=${user?.email}`;
    fetch(uri, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("car-access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
           setBookings(data);
        }
        else{
         window.location.reload();
        }
       
      })
      .catch((error) => console.error(error));
  }, [navigate, user?.email]);

  //Booking Delete operation
  const handleDelete = (id) => {
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
        fetch(`http://localhost:3000/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remainingBooking = bookings.filter(
                (booking) => booking._id !== id
              );
              setBookings(remainingBooking);

              Swal.fire(
                "Deleted!",
                "Your Booking has been deleted.",
                "success"
              );
            }
          })
          .catch((error) => console.error(error));
      }
    });
  };

  //handle pennding operation
  const handlePending = (id) => {
    fetch(`http://localhost:3000/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Approve" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = bookings.filter((booking) => booking._id !== id);
          const updated = bookings.find((booking) => booking._id === id);
          updated.status = "Approve";
          const updatedBookings = [updated, ...remaining];
          setBookings(updatedBookings);

          toast.success("Update Successfully");
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="overflow-x-auto min-h-screen">
        <table className="table">
          {/* head */}
          <tbody>
            {bookings.map((booking) => (
              <BookingInfo
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handlePending={handlePending}
              ></BookingInfo>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartDetails;
