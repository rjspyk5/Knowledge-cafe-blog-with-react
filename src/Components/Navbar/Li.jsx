import { NavLink } from "react-router-dom";

export const Li = ({ data: { label, url } }) => {
  return (
    <NavLink
      to={url}
      className={({ isActive, isPending, isTransitioning }) =>
        [
          isPending ? "pending" : "",
          isActive ? "text-red-500 font-bold" : "",
          isTransitioning ? "transitioning" : "",
        ].join(" ")
      }
    >
      <li>{label}</li>
    </NavLink>
  );
};
