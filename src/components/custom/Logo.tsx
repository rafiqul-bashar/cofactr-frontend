import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"}>
      <div className="flex items-center gap-2 px-4 w-fit">
        <img
          src="https://www.svgrepo.com/show/250771/ecommerce.svg"
          alt="logo"
          className="w-8 h-8"
        />
        <h2 className="italic font-bold tracking-tight text-xl">COFACTR</h2>
      </div>
    </Link>
  );
};

export default Logo;
