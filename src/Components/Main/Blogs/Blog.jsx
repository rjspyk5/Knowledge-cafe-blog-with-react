import React, { useState } from "react";

export const Blog = ({ blog, handleMarkAsRead }) => {
  const {
    hashtag,
    id,
    image,
    name,
    posted_date,
    reading_time,
    title,
    profile,
  } = blog;
  const [check, setcheck] = useState(true);
  return (
    <div>
      <div className="card bg-base-100 p-3 rounded-xl shadow-xl">
        <figure>
          <img
            className="rounded-md w-[642px] max-h-[363px]"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="space-y-3 mt-7">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img className="w-12 h-12 rounded-full" src={profile} alt="" />
              <div>
                <h1>{name}</h1>
                <p>{posted_date}</p>
              </div>
            </div>
            <div className="flex items-center">
              <p>{reading_time}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M17.593 3.322C18.693 3.45 19.5 4.399 19.5 5.507V21L12 17.25L4.5 21V5.507C4.5 4.399 5.306 3.45 6.407 3.322C10.1232 2.89063 13.8768 2.89063 17.593 3.322Z"
                  stroke="#111111"
                  strokeOpacity="0.6"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <p className="font-bold text-3xl">{title}</p>
          <p>{hashtag}</p>
          <button
            onClick={() => {
              setcheck(false);
              handleMarkAsRead([title, reading_time]);
            }}
            className="text-blue-600"
          >
            {check ? " Mark as read" : "readed"}
          </button>
        </div>
      </div>
    </div>
  );
};
