import React from "react";
import { EachBookmark } from "./EachBookmark";
export const BookMark = ({ read }) => {
  const total = read.reduce(
    (acc, cur) => parseInt(cur[1].split(" ")[0]) + acc,
    0
  );

  return (
    <div>
      <div className="space-y-6">
        <div className="bg-[#6047EC1A] border border-[#6047EC] py-4">
          <h1 className="text-[#6047EC] text-center">
            Spend Time On read: {total} minute
          </h1>
        </div>
        <div className="bg-[#1111110D] p-5 space-y-4">
          <h1>Bookmarked Blogs : {read.length}</h1>
          {read.map((el, iDx) => (
            <EachBookmark title={el[0]} key={iDx} />
          ))}
        </div>
      </div>
    </div>
  );
};
