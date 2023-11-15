import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../components";

const RootPage = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootPage;
