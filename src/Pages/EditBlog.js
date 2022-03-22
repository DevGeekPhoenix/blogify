import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Back from "../Assets/Svgs/Back";
import Send from "../Assets/Svgs/Send";
import Cookies from "universal-cookie";

const charCount = (editor) => editor.getContent({ format: "text" }).length;

export default () => {
  const cookies = new Cookies();
  const token = cookies.get("ut");
  const { id } = useParams();

  const [blog, setblog] = useState(null);
  const [count, setCount] = useState(0);
  const [data, setData] = useState("");
  const [titlevalue, setTitlevalue] = useState("");
  const [imgUrlvalue, setimgUrlvalue] = useState("");

  useEffect(() => {
    fetch(`http://localhost:4000/blog/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setblog(data);
        setData(data.content);
        setTitlevalue(data.title);
        setimgUrlvalue(data.imgurl);
      });
  }, []);

  const handleInit = (value, editor) => {
    setCount(charCount(editor));
  };

  const handleUpdate = (value, editor) => {
    const cCount = charCount(editor);

    setData(value);
    setCount(cCount);
  };

  const handleBeforeAddUndo = (evt, editor) => {
    // note that this is the opposite test as in handleUpdate
    // because we are determining when to deny adding an undo level

    evt.preventDefault();
  };

  const editBLog = async () => {
    fetch("http://localhost:4000/blog/edit", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        auth: `ut ${token}`,
      },
      body: JSON.stringify({
        blogId: id,
        data: {
          title: titlevalue,
          content: data,
          imgurl: imgUrlvalue,
        },
      }),
    }).then(() => {
      alert("مقاله شما با موفقیت ادیت شد");
    });
  };

  return (
    <div dir="rtl" className="">
      <div className="flex flex-col text-[#c2c2c2]">
        <div className="flex  ">
          <label
            htmlFor="userName"
            className="flex mr-6 mt-2.5 text-[12px] md:text-[14px]"
          >
            عنوان مقاله
          </label>
          <input
            className="outline-none rounded border text-[#2e3a3f] border-[#2e3a3f] mr-2 w-[55vw] md:w-[400px] md:py-2 px-2 py-1 shadow-lg text-right placeholder:text-[10px]  md:placeholder:text-[12px] placeholder:text-right"
            placeholder="عنوان مقاله خود را اینجا بنویسید ..."
            value={titlevalue}
            onChange={(e) => setTitlevalue(e.target.value)}
          />
        </div>
        <div className="flex  ">
          <label
            htmlFor="userName"
            className="flex mr-6 mt-2.5 text-[12px] md:text-[14px]"
          >
            تصویر مقاله
          </label>
          <input
            className="outline-none rounded border text-[#2e3a3f] border-[#2e3a3f] mr-1.5 w-[55vw] md:w-[400px] md:py-2 px-2 py-1 shadow-lg text-right placeholder:text-[10px] md:placeholder:text-[12px] placeholder:text-right"
            placeholder="لینک تصویر مقاله خود را وارد کنید ..."
            value={imgUrlvalue}
            onChange={(e) => setimgUrlvalue(e.target.value)}
          />
        </div>
      </div>
      <Editor
        apiKey="qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc"
        init={{ height: "70vh", width: "100%", plugins: "wordcount" }}
        value={data}
        onInit={handleInit}
        onEditorChange={handleUpdate}
        onBeforeAddUndo={handleBeforeAddUndo}
      />
      <div
        onClick={() => editBLog()}
        className=" fixed flex justify-center items-center w-14 h-14 bottom-10 right-3 rounded-full shadow-xl bg-[#c2c2c2] cursor-pointer"
      >
        <Send />
      </div>
      <Link to="/dashboard">
        <div
          // onClick={() => submitBLog()}
          className=" fixed flex justify-center items-center w-14 h-14 md:top-[95px] md:left-5 top-[65px] left-1 rounded-full shadow-xl bg-[#c2c2c2] cursor-pointer"
        >
          <Back />
        </div>
      </Link>
    </div>
  );
};
