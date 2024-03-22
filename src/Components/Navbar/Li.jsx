import { NavLink } from "react-router-dom";

export const Li = ({ data: { label, url } }) => {
  return (
    <NavLink
      to={url}
      style={({ isActive, isPending, isTransitioning }) => {
        return {
          fontWeight: isActive ? "bold" : "",
          color: isPending ? "red" : "black",
          viewTransitionName: isTransitioning ? "slide" : "",
        };
      }}
    >
      <li>{label}</li>
    </NavLink>
  );
};
