import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";

export default () => {
  const { id } = useParams();
  const content = useRef(null);
  const [blog, setblog] = useState(null);
  console.log(blog);
  useEffect(() => {
    fetch(`http://localhost:4000/blog/${id}`)
      .then((response) => response.json())
      .then((data) => setblog(data));
  }, []);
  // console.log(JSON.parse(JSON.stringify(blog?.content)));
  const parser = new DOMParser();
  const doc = parser.parseFromString(blog?.content, "text/html");
  // console.log(doc.body);
  // content.firstElementChild = doc.body;
  console.log(content);
  return (
    <div>
      <div ref={content}></div>
    </div>
  );
};
