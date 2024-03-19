import React, { useEffect, useState } from "react";
import { Blog } from "./Blog";
import axios from "axios";
export const Blogs = () => {
  const [blogDataum, setblogDataum] = useState([]);
  useEffect(() => {
    const fData = async () => {
      const data = await axios.get("data.json");
      setblogDataum(data.data);
    };
    fData();
  }, []);
  return (
    <div className="space-y-5">
      {blogDataum.map((el) => {
        console.log(el);
        return <Blog key={el.id} blog={el} />;
      })}
    </div>
  );
};
