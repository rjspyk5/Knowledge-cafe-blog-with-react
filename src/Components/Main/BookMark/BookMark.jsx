import React from "react";
import { EachBookmark } from "./EachBookmark";
export const BookMark = () => {
  return (
    <div>
      <div className="space-y-6">
        <div className="bg-[#6047EC1A] border border-[#6047EC] py-4">
          <h1 className="text-[#6047EC] text-center">Spend Time On read:</h1>
        </div>
        <div className="bg-[#1111110D] p-5 space-y-4">
          <h1>Bookmarked Blogs : 8</h1>
          <EachBookmark></EachBookmark>
        </div>
      </div>
    </div>
  );
};
