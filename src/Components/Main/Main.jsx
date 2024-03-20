import { useState } from "react";
import { Blogs } from "./Blogs/Blogs";
import { BookMark } from "./BookMark/BookMark";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import MouseParticles from "react-mouse-particles";
import "react-toastify/dist/ReactToastify.css";
export const Main = () => {
  const data = useLoaderData();
  const [read, setread] = useState([]);
  const handleMarkAsRead = (ob) => {
    setread([...read, ob]);
  };
  const notify = () =>
    toast.error("Already read", {
      position: "top-center",
    });
  return (
    <>
      <ToastContainer></ToastContainer>
      <main className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-2 order-2 lg:order-1">
          <Blogs data={data} handleMarkAsRead={handleMarkAsRead}></Blogs>
        </div>
        <div className="order-1 lg:order-2">
          <BookMark read={read}></BookMark>
        </div>
      </main>
      <MouseParticles g={1} color="random" cull="col,image-wrapper" />
    </>
  );
};
