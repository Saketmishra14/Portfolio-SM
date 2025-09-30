import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const LayoutWithHeader = ({setDark, currentMode}) => {

  return (
    <>
      <Header setDark={setDark} currentMode={currentMode} />
      <Outlet />
    </>
  );
};

export default LayoutWithHeader;
