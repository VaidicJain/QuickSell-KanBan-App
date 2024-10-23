import React, {useContext} from "react";
import { KanbanContext } from '../../context/KanbanContext';
import './HeaderDropDown.css'

const HeaderDropDown = () => {


  const { setGrouping, setSorting } = useContext(KanbanContext);
  const handleGroupingChange = (event) => {
    setGrouping(event.target.value);
  };

  const handleSortingChange = (event) => {
    setSorting(event.target.value);
  };

  return (
    <div className="dropdownBox">
      <div className="groupBox">
        <p> Grouping</p>
        <select  onChange={handleGroupingChange}>
          <option value="status">Status</option>
          <option value="user">Users</option>
          <option value="priority">Priority</option>
        </select>
      </div>
      <div className="sortBox">
        <p> Sorting</p>
        <select onChange={handleSortingChange}>
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>
    </div>
  );
};

export default HeaderDropDown;
