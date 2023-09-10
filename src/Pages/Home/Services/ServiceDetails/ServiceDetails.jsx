import React from "react";
import { Link, useLoaderData, useLocation } from "react-router-dom";
import logo from "../../../../assets/logo.svg";

const ServiceDetails = () => {
  const location = useLocation();
  const loadedService = useLoaderData();
  const { _id, title, price, img, description } = loadedService;
  const facilities = loadedService.facility;
  // console.log(loadedService.facility);

  return (
    <div className="min-h-screen">
      {/* Header section */}
      <section>
        <div className="w-full h-60 border-2 relative">
          <img className="w-full h-full object-cover" src={img} alt="" />
          <div className="w-full h-full flex items-center absolute top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] ">
            <h1 className="text-5xl ml-10 font-bold text-white">
              Service Details{" "}
            </h1>
          </div>

          {/* for the bottom orange part  */}
          <div className="absolute bottom-0  left-1/2 transform -translate-x-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="296"
              height="50"
              viewBox="0 0 296 50"
              fill="none"
            >
              <path d="M296 49.3H0L27.8 0H268.3L296 49.3Z" fill="#FF3811" />
              <text
                className="text-xl font-bold"
                x="50%"
                y="50%"
                textAnchor="middle"
                dy=".3em"
                fill="white"
              >
                Home/Service Details
              </text>
            </svg>
          </div>
        </div>
      </section>

      {/* body section */}
      <section className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mt-8">
        <div className="rounded-lg  lg:col-span-2 space-y-10">
          {/* img section */}
          <section className="sm:w-full sm:h-96">
            <img
              className="sm:w-full sm:h-full rounded-lg object-cover"
              src={img}
              alt=""
            />
          </section>

          {/* Details section one  */}
          <section className="space-y-8">
            {/* -------------------- */}
            <div className="space-y-8">
              <h1 className="text-4xl font-bold capitalize">{title}</h1>
              <p className="text-lg text-justify leading-7 capitalize">
                {description}
              </p>
            </div>

            {/* facilities Part  */}
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
              {facilities.map((facility, index) => (
                <div
                  className="card w-96 bg-slate-400  border-t-8 border-orange-500"
                  key={index}
                >
                  <div className="card-body">
                    <h2 className="card-title font-bold">{facility.name}</h2>
                    <p className="text-lg">{facility.details}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* --------- */}
            <div>
              <p className="text-lg text-justify leading-7 capitalize">
                {description}
              </p>
            </div>
          </section>

          {/* 3 Simple Steps to Process section  */}

          <section className="space-y-8">
            <div className="space-y-8">
              <h1 className="text-4xl font-bold capitalize">
                3 Simple Steps to Process section
              </h1>
              <p className="text-lg text-justify leading-7 capitalize">
                {description}
              </p>
            </div>
            {/* ---------------------- */}
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
              <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700 ">
                <div className="h-56  flex flex-col items-center justify-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="83"
                    height="83"
                    viewBox="0 0 83 83"
                    fill="none"
                  >
                    <circle
                      cx="41.5"
                      cy="41.5"
                      r="41.5"
                      fill="#FF3811"
                      fillOpacity="0.1"
                    />
                    <circle cx="41.5" cy="41.5" r="27.9795" fill="#FF3811" />
                    <text
                      x="50%"
                      y="50%"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize="32"
                      fill="white"
                    >
                      1
                    </text>
                  </svg>
                  <h5 className="mb-1 text-xl font-medium text-gray-900 ">
                    Step One
                  </h5>
                  <span className="text-sm text-gray-500">
                    It uses a dictionary of over 200 .
                  </span>
                </div>
              </div>
              <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700">
                <div className="h-56  flex flex-col items-center justify-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="83"
                    height="83"
                    viewBox="0 0 83 83"
                    fill="none"
                  >
                    <circle
                      cx="41.5"
                      cy="41.5"
                      r="41.5"
                      fill="#FF3811"
                      fillOpacity="0.1"
                    />
                    <circle cx="41.5" cy="41.5" r="27.9795" fill="#FF3811" />
                    <text
                      x="50%"
                      y="50%"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize="32"
                      fill="white"
                    >
                      2
                    </text>
                  </svg>
                  <h5 className="mb-1 text-xl font-medium text-gray-900 ">
                    Step One
                  </h5>
                  <span className="text-sm text-gray-500">
                    It uses a dictionary of over 200 .
                  </span>
                </div>
              </div>
              <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700">
                <div className="h-56  flex flex-col items-center justify-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="83"
                    height="83"
                    viewBox="0 0 83 83"
                    fill="none"
                  >
                    <circle
                      cx="41.5"
                      cy="41.5"
                      r="41.5"
                      fill="#FF3811"
                      fillOpacity="0.1"
                    />
                    <circle cx="41.5" cy="41.5" r="27.9795" fill="#FF3811" />
                    <text
                      x="50%"
                      y="50%"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize="32"
                      fill="white"
                    >
                      3
                    </text>
                  </svg>
                  <h5 className="mb-1 text-xl font-medium text-gray-900 ">
                    Step One
                  </h5>
                  <span className="text-sm text-gray-500">
                    It uses a dictionary of over 200 .
                  </span>
                </div>
              </div>
            </div>
            {/* ---------------------- */}
            <div></div>
          </section>
        </div>

        <div className=" rounded-lg space-y-5 ">
          {/* <------------------> */}
          <section className=" bg-[#F3F3F3]">
            <h1 className="text-3xl font-bold pl-10 pt-5">Services</h1>
            <div>
              <ul className="min-h-[50vh] max-w-xs flex flex-col mx-auto justify-evenly  ">
                <li className="inline-flex items-center gap-x-2 py-3 px-4 text-lg  font-medium bg-[#FF3811] border text-white -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg ">
                  <div className="flex justify-between w-full">
                    Full Car Repair
                    <span className="inline-flex items-center py-1 px-2 rounded-full text-xs font-medium  text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                        />
                      </svg>
                    </span>
                  </div>
                </li>
                <li className="inline-flex items-center gap-x-2 py-3 px-4 text-lg  font-medium bg-[#FFF] border text-black -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg ">
                  <div className="flex justify-between w-full">
                    Engine Repair
                    <span className="inline-flex items-center py-1 px-2 rounded-full text-xs font-medium  text-black">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                        />
                      </svg>
                    </span>
                  </div>
                </li>
                <li className="inline-flex items-center gap-x-2 py-3 px-4 text-lg  font-medium bg-[#FFF] border text-black -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg ">
                  <div className="flex justify-between w-full">
                    Automatic Services
                    <span className="inline-flex items-center py-1 px-2 rounded-full text-xs font-medium   text-black">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                        />
                      </svg>
                    </span>
                  </div>
                </li>
                <li className="inline-flex items-center gap-x-2 py-3 px-4 text-lg  font-medium bg-[#FFF] border text-black -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg ">
                  <div className="flex justify-between w-full">
                    Engine Oil Change
                    <span className="inline-flex items-center py-1 px-2 rounded-full text-xs font-medium  text-black">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                        />
                      </svg>
                    </span>
                  </div>
                </li>
                <li className="inline-flex items-center gap-x-2 py-3 px-4 text-lg  font-medium  bg-[#FFF] border text-black -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg ">
                  <div className="flex justify-between w-full">
                    Battery Charge
                    <span className="inline-flex items-center py-1 px-2 rounded-full text-xs font-medium  text-black">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                        />
                      </svg>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* <-----------------> */}

          <section className=" dark:bg-gray-800 space-y-8 rounded-lg">
            <h1 className="text-3xl font-bold pl-10 pt-5 text-white">
              Download
            </h1>
            <div>
              <ul className="min-h-[20vh] max-w-xs flex flex-col mx-auto">
                <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white  text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800  dark:text-white">
                  <div className="flex justify-between w-full">
                    <div className="flex  items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <path
                          d="M24.375 17.8125V14.5312C24.375 13.4124 23.9305 12.3393 23.1394 11.5481C22.3482 10.757 21.2751 10.3125 20.1562 10.3125H18.2812C17.9083 10.3125 17.5506 10.1643 17.2869 9.90062C17.0232 9.6369 16.875 9.27921 16.875 8.90625V7.03125C16.875 5.91237 16.4305 4.83931 15.6394 4.04814C14.8482 3.25697 13.7751 2.8125 12.6562 2.8125H10.3125M11.25 20.625V21.5625M15 17.8125V21.5625M18.75 15V21.5625M13.125 2.8125H7.03125C6.255 2.8125 5.625 3.4425 5.625 4.21875V25.7812C5.625 26.5575 6.255 27.1875 7.03125 27.1875H22.9688C23.745 27.1875 24.375 26.5575 24.375 25.7812V14.0625C24.375 11.0788 23.1897 8.21733 21.08 6.10755C18.9702 3.99776 16.1087 2.8125 13.125 2.8125V2.8125Z"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="ml-3">
                        <h3 className="text-lg"> Our Brochure</h3>
                        <span>Download</span>
                      </div>
                    </div>

                    <button className="inline-flex btn-md items-center  rounded-md  bg-[#FF3811] text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                        />
                      </svg>
                    </button>
                  </div>
                </li>
                <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white  text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800  dark:text-white">
                  <div className="flex justify-between w-full">
                    <div className="flex  items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <path
                          d="M24.375 17.8125V14.5312C24.375 13.4124 23.9305 12.3393 23.1394 11.5481C22.3482 10.757 21.2751 10.3125 20.1562 10.3125H18.2812C17.9083 10.3125 17.5506 10.1643 17.2869 9.90062C17.0232 9.6369 16.875 9.27921 16.875 8.90625V7.03125C16.875 5.91237 16.4305 4.83931 15.6394 4.04814C14.8482 3.25697 13.7751 2.8125 12.6562 2.8125H10.3125M11.25 20.625V21.5625M15 17.8125V21.5625M18.75 15V21.5625M13.125 2.8125H7.03125C6.255 2.8125 5.625 3.4425 5.625 4.21875V25.7812C5.625 26.5575 6.255 27.1875 7.03125 27.1875H22.9688C23.745 27.1875 24.375 26.5575 24.375 25.7812V14.0625C24.375 11.0788 23.1897 8.21733 21.08 6.10755C18.9702 3.99776 16.1087 2.8125 13.125 2.8125V2.8125Z"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="ml-3">
                        <h3 className="text-lg"> Company Details</h3>
                        <span>Download</span>
                      </div>
                    </div>

                    <button className="inline-flex btn-md items-center  rounded-md  bg-[#FF3811] text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                        />
                      </svg>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* <-----------------> */}

          <section>
            <div className="w-full max-w-md bg-[#151515] border border-gray-200 rounded-lg shadow ">
              <div className=" min-h-[60vh] flex flex-col items-center justify-center  ">
                <img className="" src={logo} alt="" />
                <div className="">
                  <h5 className="mb-1 text-xl font-medium text-white text-center ">
                    Step One
                  </h5>
                  <h3 className="text-2xl text-white text-center">
                    Need Help? We Are Here <br /> To Help You
                  </h3>
                </div>
                <div className="w-4/5 flex justify-center items-center bg-white h-44 mt-5 rounded-lg relative">
                  <div>
                    <h5 className="text-2xl font-bold">
                      <span className="text-[#FF3811] font-bold">
                        Car Doctor
                      </span>{" "}
                      Special
                    </h5>
                    <h6 className="font-bold text-lg text-center">
                      Save up to <span className="text-[#FF3811]">60% off</span>
                    </h6>
                  </div>

                  <div className="w-2/3 h-16 bg-[#FF3811] absolute -bottom-10   text-white text-2xl font-bold flex justify-center items-center">
                    Get A Quote
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <-----------------> */}

          <section className="space-y-8">
            <h1 className=" mt-12 text-4xl font-bold text-black text-center ">
              Price : $ {price}
            </h1>
            <Link to={`/checkout/${_id}`} className="btn  h-16 rounded-lg bg-[#FF3811] btn-block text-lg text-white hover:btn-accent">
              Proceed Checkout
            </Link>
          </section>

          {/* <-----------------> */}
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
