import React, { useEffect, useState } from "react";
import { Blog } from "./Blog";
import axios from "axios";
export const Blogs = ({ handleMarkAsRead }) => {
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
        return (
          <Blog handleMarkAsRead={handleMarkAsRead} key={el.id} blog={el} />
        );
      })}
    </div>
  );
};
