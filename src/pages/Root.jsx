import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import SearchBar from "../Components/SearchBar";

const Root = () => {
  return (
    <>
      <Header />
      <SearchBar />
      <Outlet />
    </>
  );
};

export default Root;
