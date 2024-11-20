const AUTHENTICATED = false;
const BASE_URL = import.meta.env.VITE_SERVER_URL || "http://localhost:5000";
const navLinksPublic = [
  { path: "/", title: "Home" },
  { path: "/products", title: "Shop" },
  { path: "/about", title: "About Us" },
  { path: "/contact", title: "Contact Us" },
  {
    path: AUTHENTICATED ? "/my-profile" : "/login",
    title: AUTHENTICATED ? "My Profile" : "Login",
  },
];

export { BASE_URL, navLinksPublic };
