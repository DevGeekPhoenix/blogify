import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

export default () => {
  const [blogs, setblogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/blog")
      .then((res) => res.json())
      .then((data) => setblogs(data));
    setTimeout(() => {
      changefirstSlideIndex();
    }, 500);
  }, []);

  let [index, setindex] = useState(0);
  let [firstSlideIndex, setfirstSlideIndex] = useState(0);
  const changefirstSlideIndex = () => {
    firstSlideIndex === 2
      ? setfirstSlideIndex(0)
      : setfirstSlideIndex(firstSlideIndex + 1);
  };
  const changeindex = () => {
    index === 3 ? setindex(0) : setindex(index + 1);
  };
  useEffect(() => {
    let timer = setInterval(() => {
      changeindex();
    }, 5000);
    return function cleanup() {
      clearInterval(timer);
    };
  }, [index]);

  return (
    <div className="hidden md:flex w-screen h-screen justify-center items-center">
      <div className="absolute right-[1vw] bottom-[10vh] z-40 w-[40vw] h-[400px] rounded-xl backdrop-blur-lg bg-[#2e3a3faf] shadow-lg shadow-[#2e3a3f]">
        <div className="text-right  text-[1.3rem] text-[#fff] rounded-xl w-full h-full py-10 p-5 dana">
          <Slider
            className="w-full h-full "
            fade={true}
            pauseOnFocus={false}
            pauseOnDotsHover={false}
            pauseOnHover={false}
            swipe={false}
            arrows={false}
            infinite={true}
            autoplay={true}
            speed={500}
            autoplaySpeed={5000}
          >
            <div
              className={` flex flex-col justify-center w-full h-full 
              `}
            >
              <div className="w-full flex  items-center justify-end">
                <p>{blogs[0]?.creator.name}</p>
                <img
                  className="h-20 w-20 ml-5 object-cover shadow-lg shadow-[#2e3a3f] rounded-full"
                  src={blogs[0]?.creator.imgurl}
                />
              </div>
              <p className="text-3xl leading-10 mt-10">{blogs[0]?.title}</p>
              <Link to={`blog/${blogs[0]?._id}`}>
                <button className="mb-5 relative z-10 border-2 border-[#c2c2c2] rounded-md shadow-lg shadow-[#00000049] hover:bg-[#636363] hover:text-[#fff] text-[#fff] mt-10 py-2 w-full flex justify-center">
                  دیدن مقاله
                </button>
              </Link>
            </div>
            <div
              className={` flex flex-col justify-center w-full h-full 
              `}
            >
              <div className="w-full flex  items-center justify-end">
                <p>{blogs[1]?.creator.name}</p>
                <img
                  className="h-20 w-20 ml-5 object-cover shadow-lg shadow-[#2e3a3f] rounded-full"
                  src={blogs[1]?.creator.imgurl}
                />
              </div>
              <p className="text-3xl leading-10 mt-10">{blogs[1]?.title}</p>
              <Link to={`blog/${blogs[1]?._id}`}>
                <button className="mb-5 relative z-10 border-2 border-[#c2c2c2] rounded-md shadow-lg shadow-[#00000049] hover:bg-[#636363] hover:text-[#fff] text-[#fff] mt-10 py-2 w-full flex justify-center">
                  دیدن مقاله
                </button>
              </Link>
            </div>
            <div
              className={` flex flex-col justify-center w-full h-full 
              `}
            >
              <div className="w-full flex  items-center justify-end">
                <p>{blogs[2]?.creator.name}</p>
                <img
                  className="h-20 w-20 ml-5 object-cover shadow-lg shadow-[#2e3a3f] rounded-full"
                  src={blogs[2]?.creator.imgurl}
                />
              </div>
              <p className="text-3xl leading-10 mt-10">{blogs[2]?.title}</p>
              <Link to={`blog/${blogs[2]?._id}`}>
                <button className="mb-5 relative z-10 border-2 border-[#c2c2c2] rounded-md shadow-lg shadow-[#00000049] hover:bg-[#636363] hover:text-[#fff] text-[#fff] mt-10 py-2 w-full flex justify-center">
                  دیدن مقاله
                </button>
              </Link>
            </div>
            <div
              className={` flex flex-col justify-center w-full h-full 
              `}
            >
              <div className="w-full flex  items-center justify-end">
                <p>{blogs[3]?.creator.name}</p>
                <img
                  className="h-20 w-20 ml-5 object-cover shadow-lg shadow-[#2e3a3f] rounded-full"
                  src={blogs[3]?.creator.imgurl}
                />
              </div>
              <p className="text-3xl leading-10 mt-10">{blogs[3]?.title}</p>
              <Link to={`blog/${blogs[3]?._id}`}>
                <button className="mb-5 relative z-10 border-2 border-[#c2c2c2] rounded-md shadow-lg shadow-[#00000049] hover:bg-[#636363] hover:text-[#fff] text-[#fff] mt-10 py-2 w-full flex justify-center">
                  دیدن مقاله
                </button>
              </Link>
            </div>
          </Slider>
        </div>
      </div>
      <div className="">
        <div>
          <img
            className={`object-cover transition-all duration-[2000ms] absolute  shadow-lg shadow-[#2e3a3f]
          ${
            index === 0
              ? "w-screen h-screen bottom-0 left-0 z-[-100]"
              : index === 1
              ? "w-[15vw] h-[300px]  bottom-[10vh] left-[1vw]  rounded-lg "
              : index === 2
              ? "w-[15vw] h-[300px]  bottom-[10vh] left-[17vw] rounded-lg  "
              : index === 3
              ? "w-[15vw] h-[300px]  bottom-[10vh] left-[33vw] rounded-lg  "
              : ""
          }
          `}
            src={blogs[0]?.imgurl}
          />
        </div>
        <div>
          <img
            className={`object-cover  transition-all duration-[2000ms] absolute  shadow-lg shadow-[#2e3a3f]
          ${
            index === 1
              ? "w-screen h-screen bottom-0 left-0 z-[-100]"
              : index === 2
              ? "w-[15vw] h-[300px]  bottom-[10vh] left-[1vw]  rounded-lg "
              : index === 3
              ? "w-[15vw] h-[300px]  bottom-[10vh] left-[17vw] rounded-lg  "
              : index === 0
              ? "w-[15vw] h-[300px]  bottom-[10vh] left-[33vw] rounded-lg  "
              : ""
          }
          `}
            src={blogs[1]?.imgurl}
          />
        </div>
        <div>
          <img
            className={`object-cover  transition-all duration-[2000ms] absolute  shadow-lg shadow-[#2e3a3f]
          ${
            index === 2
              ? "w-screen h-screen bottom-0 left-0 z-[-100]"
              : index === 3
              ? "w-[15vw] h-[300px]  bottom-[10vh] left-[1vw]  rounded-lg "
              : index === 0
              ? "w-[15vw] h-[300px]  bottom-[10vh] left-[17vw] rounded-lg  "
              : index === 1
              ? "w-[15vw] h-[300px]  bottom-[10vh] left-[33vw] rounded-lg  "
              : ""
          }
          `}
            src={blogs[2]?.imgurl}
          />
        </div>
        <div>
          <img
            className={`object-cover  transition-all duration-[2000ms] absolute  shadow-lg shadow-[#2e3a3f]
          ${
            index === 3
              ? "w-screen h-screen bottom-0 left-0 z-[-100]"
              : index === 0
              ? "w-[15vw] h-[300px]  bottom-[10vh] left-[1vw]  rounded-lg "
              : index === 1
              ? "w-[15vw] h-[300px]  bottom-[10vh] left-[17vw] rounded-lg  "
              : index === 2
              ? "w-[15vw] h-[300px]  bottom-[10vh] left-[33vw] rounded-lg  "
              : ""
          }
          `}
            src={blogs[3]?.imgurl}
          />
        </div>
      </div>
    </div>
  );
};
