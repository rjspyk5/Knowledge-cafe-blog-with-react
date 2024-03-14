import React, { useEffect, useState } from "react";
import { Blog } from "./Blog";

export const Blogs = () => {
  const [blogDataum, setblogDataum] = useState([]);
  useEffect(() => {
    const fData = async () => {
      try {
        const promisedData = await fetch("data.json");
        const actualData = await promisedData.json();
        setblogDataum(actualData);
      } catch (error) {
        console.log(error);
      }
    };
    fData();
  }, []);

  return (
    <div>
      {blogDataum.map((el) => {
        console.log(el);
        return <Blog key={el.id} blog={el} />;
      })}
    </div>
  );
};
