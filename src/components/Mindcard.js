import { Link } from "react-router";

export default function Mindcard({ value }) {
  return (
    <Link to={"/city/delhi/" + value?.id}>
      <img
        className="w-32 h-40 object-cover"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/" +
          value?.imageId
        }
        alt="card"
      />
    </Link>
  );
}