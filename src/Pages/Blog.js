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
    <div className=" w-[80vw] m-auto bg-[#fff]">
      <p className="text-center font-bold text-[1rem] md:text-[1.3rem] text-[#2e3a3f] mt-2 px-2 py-4">
        {blog?.title}
      </p>
      <img className="w-screen h-[30vw] object-cover" src={blog?.imgurl} />
      <div
        className="mx-5 py-4"
        dangerouslySetInnerHTML={{ __html: blog?.content }}
      ></div>
      <Link to="/dashboard">
        <div
          // onClick={() => submitBLog()}
          className=" fixed flex justify-center items-center w-14 h-14 md:top-[90px] right-5 bottom-3 md:left-5 rounded-full shadow-xl bg-[#c2c2c2] cursor-pointer"
        >
          <Back />
        </div>
      </Link>
    </div>
  );
};
