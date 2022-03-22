import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Back from "../Assets/Svgs/Back";

export default () => {
  const { id } = useParams();
  // const content = useRef(null);
  const [blog, setblog] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:4000/blog/${id}`)
      .then((response) => response.json())
      .then((data) => setblog(data));
  }, []);

  return (
    <div className=" w-[100vw]  m-auto bg-[#fff]">
      <div className="flex w-screen justify-center py-2 text-[#c2c2c2]  bg-[#2e3a3f] mt-10">
        <div className="flex justify-around w-[90vw]">
          <p className="text-center font-bold dana text-[1rem] md:text-[1.3rem] mt-2 py-4">
            {blog?.creator.name}
          </p>
          <img
            className="w-[65px] h-[65px] rounded-full object-cover"
            src={blog?.creator.imgurl}
          />
        </div>
      </div>
      <p className="text-center font-bold dana text-[1rem] md:text-[1.3rem] text-[#2e3a3f] mt-2 py-4">
        {blog?.title}
      </p>
      <img className="w-screen h-[30vw] object-cover" src={blog?.imgurl} />
      <div
        className="mx-10 py-4"
        dangerouslySetInnerHTML={{ __html: blog?.content }}
      ></div>
      <Link to="/">
        <div
          // onClick={() => submitBLog()}
          className=" fixed flex justify-center items-center w-14 h-14 md:top-[52px] right-5 bottom-3 md:left-5 rounded-full shadow-xl bg-[#c2c2c2] cursor-pointer"
        >
          <Back />
        </div>
      </Link>
    </div>
  );
};
