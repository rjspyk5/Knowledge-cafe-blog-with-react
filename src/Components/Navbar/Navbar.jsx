import profile from "../../assets/img/profile.png";

export const Navbar = () => {
  return (
    <div className="flex py-5 border-b justify-between items-center">
      <h1 className="font-bold text-4xl">Knowlege Cafe</h1>
      <img src={profile} alt="" />
    </div>
  );
};
