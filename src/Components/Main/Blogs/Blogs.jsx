import React, { useEffect, useState } from "react";
import { Blog } from "./Blog";
import axios from "axios";
export const Blogs = ({ handleMarkAsRead, data }) => {
  const [blogDataum, setblogDataum] = useState([]);
  useEffect(() => {
    setblogDataum(data);
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
