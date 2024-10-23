import React from "react";
import './KanbanColumn.css'
import KanbanCard from "../Kanban card/KanbanCard";
import backlog from "../../assets/Backlog.svg";
import highPriority from "../../assets/Img - High Priority.svg";
import LowPriority from "../../assets/Img - Low Priority.svg";
import mediumPriority from "../../assets/Img - Medium Priority.svg";
import noPriority from "../../assets/No-priority.svg";
import urgent from "../../assets/SVG - Urgent Priority colour.svg";
import inProgress from "../../assets/in-progress.svg";
import todo from "../../assets/To-do.svg";
import add from "../../assets/add.svg"
import menu from "../../assets/3 dot menu.svg"

const KanbanColumn = ({ title, tickets }) => {
  let src;
  switch (title) {
    case "High":
      src = highPriority;
      break;
    case "Low":
      src = LowPriority;
      break;
    case "No priority":
      src = noPriority;
      break;
    case "Urgent":
      src = urgent;
      break;
    case "Todo":
      src = todo;
      break;
    case "In progress":
      src = inProgress;
      break;
    case "Backlog":
      src = backlog;
      break;
    case "Medium":
      src = mediumPriority;
      break;

    default:
      break;
  }
  return (
    <div className="kanban-column">
      <div className="titleBox">
        <div className="box">
        <img src={src} alt="" />
        <h2 className="kanban-column-title">{title}</h2>
        </div>
      
      <div className="box">
        <img src={add} alt="" />
        <img src={menu} alt="" />
      </div>
      </div>
      <div className="kanban-column-content">
        {tickets.map((ticket) => (
          <KanbanCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default KanbanColumn;
