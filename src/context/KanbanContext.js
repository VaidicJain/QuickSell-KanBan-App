import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create the context
export const KanbanContext = createContext();

// Create a provider component
export const KanbanProvider = ({ children }) => {
  const savedState = JSON.parse(localStorage.getItem("kanbanViewState"));
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState(savedState?.grouping || "status"); 
  const [sorting, setSorting] = useState(savedState?.sorting || "priority"); 

  useEffect(() => {
    localStorage.setItem(
      "kanbanViewState",
      JSON.stringify({ grouping, sorting })
    );
  }, [grouping, sorting]);


  useEffect(() => {
    axios.get('https://api.quicksell.co/v1/internal/frontend-assignment')
  .then(response =>{
    if(response.data && response.data.tickets && response.data.users){
      setTickets(response.data.tickets);
        setUsers(response.data.users);
    }
  })
  }, [setTickets, setUsers]);

  // Provide the context values that will be available to other components
  const contextValue = {
    tickets,
    setTickets,
    users,
    setUsers,
    grouping,
    setGrouping,
    sorting,
    setSorting,
  };

  return (
    <KanbanContext.Provider value={contextValue}>
      {children}
    </KanbanContext.Provider>
  );
};
