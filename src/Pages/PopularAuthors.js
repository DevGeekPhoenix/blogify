import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "../slick.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import PopAuthor from "../Assets/Img/popauthorimg.jpg";

export default () => {
  const settings = {
    centerMode: true,
    centerPadding: "200px",
    slidesToShow: 1,
    focusOnSelect: true,
    dots: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 970,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "150px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 880,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "150px",
          slidesToShow: 1,
        },
      },
    ],
  };

  const [authors, setauthors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/user")
      .then((res) => res.json())
      .then((data) => setauthors(data));
  }, []);
  return (
    <div>
      <div>
        <img
          className="w-screen h-screen object-cover absolute z-[-100]"
          src={PopAuthor}
        />
      </div>
      <div className="w-screen h-screen hidden md:flex justify-center items-center">
        <div className="w-[70vw] mt-[40px]">
          <Slider {...settings}>
            {authors?.map((author) => {
              return (
                <div
                  key={author._id}
                  className=" cardshadow rounded-xl  bg-[#2e3a3f] "
                >
                  <div
                    className={` flex flex-col justify-start w-full h-full 
              `}
                  >
                    <div className="w-full flex-col  ">
                      <img
                        className="h-[80vh] w-screen  z-50 object-cover imgshadow shadow-[#2e3a3f] rounded-t-xl"
                        src={author.imgurl}
                      />
                    </div>
                    <div className="absolute bottom-0 rounded-xl w-screen h-[60vh] bg-gradient-to-t from-[#000] to-[#00000000] "></div>

                    <div className="absolute bottom-0 mb-5 w-full h-[200px] flex flex-col justify-around ">
                      <p className="w-full text-center text-[2rem] mt-[70px] dana text-[#fff]">
                        {author.name}
                      </p>
                      <Link to={`/author/${author._id}`}>
                        <button className="mb-5 border-2 border-[#c2c2c2] rounded-md shadow-lg shadow-[#00000049] hover:bg-[#636363] hover:text-[#fff] text-[#fff]  py-2 w-[90%] m-auto flex justify-center">
                          دیدن مقاله ها
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <div className="w-screen h-screen md:hidden flex justify-center items-center">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
          loop={true}
        >
          {authors.map((author) => {
            return (
              <SwiperSlide key={author._id}>
                <div>
                  <img
                    className="w-screen h-screen object-cover "
                    src={author.imgurl}
                  />
                </div>
                <div className="absolute bottom-0 w-screen h-[60vh] bg-gradient-to-t from-[#000] to-[#00000000] "></div>
                <div className="absolute bottom-0 mb-5 w-full h-[200px] flex flex-col justify-around ">
                  <p className="w-full text-center text-[2rem] mt-[20px] dana text-[#fff]">
                    {author.name}
                  </p>
                  <Link to={`/author/${author._id}`}>
                    <button className=" border-2 border-[#c2c2c2] rounded-md shadow-lg shadow-[#00000049] hover:bg-[#636363] hover:text-[#fff] text-[#fff]  py-2 w-[90%] m-auto flex justify-center">
                      دیدن مقاله ها
                    </button>
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
