import { useEffect, useState } from "react";
import profile from "../../assets/img/profile.png";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { Li } from "./Li";
import axios from "axios";

export const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  const [navdata, setnavdata] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const data = await axios.get("navdata.json");
      setnavdata(data.data);
    };
    fetch();
  }, []);
  console.log(navdata);
  return (
    <div className="flex py-5 border-b justify-between items-center ">
      <h1 className="font-bold text-lg lg:text-4xl flex items-center">
        {toggle ? (
          <RxCross2 className="md:hidden" onClick={() => settoggle(!toggle)} />
        ) : (
          <IoMdMenu className="md:hidden" onClick={() => settoggle(!toggle)} />
        )}
        Knowlege Cafe
      </h1>
      <ul
        className={`flex shadow-lg flex-col md:flex-row md:space-x-4 ${
          toggle ? "duration-1000 top-16" : "-top-36"
        }  absolute md:static`}
      >
        {navdata.map((d, idx) => (
          <Li data={d} key={idx} />
        ))}
      </ul>
      <img src={profile} alt="" />
    </div>
  );
};
