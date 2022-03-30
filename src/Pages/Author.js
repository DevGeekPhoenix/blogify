import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import authorbg from "../Assets/Img/authorimg.jpg";

export default () => {
  const { id } = useParams();

  const [blogs, setblogs] = useState([]);
  const [authors, setauthors] = useState([]);

  useEffect(() => {
    async function getUserBlogs() {
      fetch("http://localhost:4000/blog/by-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: id,
        }),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setblogs(data);
        });
    }
    getUserBlogs();

    fetch("http://localhost:4000/user")
      .then((res) => res.json())
      .then((data) => setauthors(data));
    // .then(setauthor());
    // setauthor(findauthor);
  }, []);
  const findauthor = authors.find((author) => author._id === id);


  return (
    <>
      <img
        className="w-screen h-screen object-cover absolute z-[-100]"
        src={authorbg}
      />
      <div className="w-screen h-screen  flex justify-center items-center overflow-auto">
        <div className="flex flex-col md:flex-row justify-between shadow-xl shadow-[#000000d0] h-[90vh] w-[80vw] md:w-[95vw] md:h-[70vh] rounded-xl  md:mt-10 bg-[#2e3a3f]">
          <img
            className="h-full w-full md:w-[40vw] relative z-10 rounded-t-xl md:rounded-l-xl object-cover"
            src={findauthor?.imgurl}
          />
          <section
            dir="rtl"
            className=" bg-[#2e3a3f] pb-10 md:rounded-xl rounded-b-xl flex flex-col w-full h-full   "
          >
            <div className=" md:rounded-t-xl  w-full justify-center items-center my-[1.5vw] text-[0.8rem] flex ">
              <p className="dana text-white text-[1.5rem]">مقاله ها</p>
            </div>
            <div className="overflow-y-auto  ">
              {blogs == [] ? (
                <div className=" h-full  w-full justify-center items-center  text-[0.8rem] flex ">
                  <p className="dana text-white text-[1.5rem]">
                    مقاله ای پیدا نشد ...
                  </p>
                </div>
              ) : (
                blogs.map((blog, i) => {
                  return (
                    <div
                      key={i}
                      className="dana text-[0.8rem] md:text-[1rem] flex justify-between  items-center text-[#2e3a3f] bg-[#c2c2c2] py-3 rounded-lg my-1 mx-2   "
                    >
                      <div className="flex items-center">
                        <p className="mr-[2vw] ml-[20px] ">{i + 1}</p>
                        <p className="mr-[2vw] ml-5 max-w-[45vw]">
                          {blog.title}
                        </p>
                      </div>
                      <div className="flex">
                        <Link to={`/blog/${blog._id}`}>
                          <p className="ml-2 md:ml-3 text-[#000]">مشاهده</p>
                        </Link>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
