import React, { useState } from "react";
import './Header.css'
import iconDown from "../../assets/icon-chevron-down.svg";
import iconUp from "../../assets/icon-chevron-up.svg";
import HeaderDropDown from "../HeaderDropDown/HeaderDropDown";
import Display from "../../assets/Display.svg"
const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const onDropdownClick = () => {
    setOpenDropdown((state) => !state);
  };

  return (
    <>
    <div className=" header">
      <div className="headerBox">
        <img src={Display} alt="" />
        <h3 className="Heading">
          Display
        </h3>
        <img
          src={openDropdown ? iconUp : iconDown}
          alt=" dropdown icon"
          className=""
          onClick={onDropdownClick}
        />
      </div>
    </div>
    {openDropdown && (
        <HeaderDropDown
          setOpenDropdown={setOpenDropdown}
        />
      )}
    </>
    
  );
};

export default Header;
