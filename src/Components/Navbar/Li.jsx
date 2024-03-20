import { Link } from "react-router-dom";

export const Li = ({ data: { label, url } }) => {
  return (
    <Link to={url}>
      <li>{label}</li>
    </Link>
  );
};
