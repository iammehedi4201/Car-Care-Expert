import bannerImg_1 from "../../../assets/Images/banner/1.jpg";
import bannerImg_2 from "../../../assets/Images/banner/2.jpg";
import bannerImg_3 from "../../../assets/Images/banner/3.jpg";
// import bannerImg_4 from "../../../assets/Images/banner/4.jpg";
import bannerImg_5 from "../../../assets/Images/banner/5.jpg";
// import bannerImg_6 from "../../../assets/Images/banner/6.jpg";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-[600px]">
        {/* carousel-item-1 */}
        <div id="slide1" className="carousel-item relative w-full rounded-xl">
          <img src={bannerImg_1} className="w-full object-cover object-top " />
          <div className="absolute top-0 h-full flex items-center space-x-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]-500 ">
            <div className="space-y-7 pl-24 w-2/3">
              <h1 className="text-5xl font-bold text-white">
                Affordable Price For Car Servicing
              </h1>
              <p className="text-gray-200">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="space-x-5 mt-7">
                <button className="btn btn-error">Discover More</button>
                <button className="btn btn-outline btn-info">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-10 space-x-5 ">
            <a href="#slide5" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/* carousel-item-2 */}
        <div id="slide2" className="carousel-item relative w-full rounded-xl">
          <img src={bannerImg_2} className="w-full object-cover object-top " />
          <div className="absolute top-0 h-full flex items-center space-x-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]-500 ">
            <div className="space-y-7 pl-24 w-2/3">
              <h1 className="text-5xl font-bold text-white">
                Affordable Price For Car Servicing
              </h1>
              <p className="text-gray-200">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="space-x-5 mt-7">
                <button className="btn btn-error">Discover More</button>
                <button className="btn btn-outline btn-info">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-10 space-x-5 ">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/* carousel-item-3 */}
        <div id="slide3" className="carousel-item relative w-full rounded-xl">
          <img src={bannerImg_3} className="w-full object-cover object-top " />
          <div className="absolute top-0 h-full flex items-center space-x-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]-500 ">
            <div className="space-y-7 pl-24 w-2/3">
              <h1 className="text-5xl font-bold text-white">
                Affordable Price For Car Servicing
              </h1>
              <p className="text-gray-200">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="space-x-5 mt-7">
                <button className="btn btn-error">Discover More</button>
                <button className="btn btn-outline btn-info">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-10 space-x-5 ">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/* carousel-item-4 */}
        <div id="slide4" className="carousel-item relative w-full rounded-xl">
          <img src={bannerImg_1} className="w-full object-cover object-top " />
          <div className="absolute top-0 h-full flex items-center space-x-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]-500 ">
            <div className="space-y-7 pl-24 w-2/3">
              <h1 className="text-5xl font-bold text-white">
                Affordable Price For Car Servicing
              </h1>
              <p className="text-gray-200">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="space-x-5 mt-7">
                <button className="btn btn-error">Discover More</button>
                <button className="btn btn-outline btn-info">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-10 space-x-5 ">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide5" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/* carousel-item-5 */}
        <div id="slide5" className="carousel-item relative w-full rounded-xl">
          <img src={bannerImg_5} className="w-full object-cover object-top " />
          <div className="absolute top-0 h-full flex items-center space-x-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]-500 ">
            <div className="space-y-7 pl-24 w-2/3">
              <h1 className="text-5xl font-bold text-white">
                Affordable Price For Car Servicing
              </h1>
              <p className="text-gray-200">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="space-x-5 mt-7">
                <button className="btn btn-error">Discover More</button>
                <button className="btn btn-outline btn-info">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-10 space-x-5 ">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
