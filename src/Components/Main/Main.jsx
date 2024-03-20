import { useState } from "react";
import { Blogs } from "./Blogs/Blogs";
import { BookMark } from "./BookMark/BookMark";
import { useLoaderData } from "react-router-dom";

export const Main = () => {
  const data = useLoaderData();
  const [read, setread] = useState([]);
  const handleMarkAsRead = (ob, check) => {
    setread([...read, ob]);
    console.log(read);
  };
  return (
    <main className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="col-span-2 order-2 lg:order-1">
        <Blogs handleMarkAsRead={handleMarkAsRead}></Blogs>
      </div>
      <div className="order-1 lg:order-2">
        <BookMark read={read}></BookMark>
      </div>
    </main>
  );
};
