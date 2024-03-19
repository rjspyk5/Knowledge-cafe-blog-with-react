import React from "react";

export const Blog = ({ blog }) => {
  const { hashtag, id, image, name, posted_date, reading_time, title } = blog;
  return (
    <div>
      <div className="card bg-base-100 p-3 rounded-xl shadow-xl">
        <figure>
          <img
            className="rounded-md"
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src="" alt="" />
              <div>
                <h1>{name}</h1>
                <p>{posted_date}</p>
              </div>
            </div>
            <div>{reading_time}</div>
          </div>
          <p className="font-bold text-3xl">{title}</p>
          <p>{hashtag}</p>
          <button className="text-blue-700">Mark as read</button>
        </div>
      </div>
    </div>
  );
};
