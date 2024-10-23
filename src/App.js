import React, { useEffect, useContext } from 'react';
import { KanbanProvider, KanbanContext } from './context/KanbanContext';
import KanbanBoard from '../src/components/Kanban Board/KanbanBoard';
import './App.css';
import Header from '../src/components/Header/Header';
import axios from 'axios';

const AppContent = () => {
  const { setTickets, setUsers} = useContext(KanbanContext);
  
  useEffect(() => {
    axios.get('https://api.quicksell.co/v1/internal/frontend-assignment')
  .then(response =>{
    if(response.data && response.data.tickets && response.data.users){
      setTickets(response.data.tickets);
        setUsers(response.data.users);
    }
  })
  }, [setTickets, setUsers]);


  return (
    <div>
      <Header/>

      <main>
        <KanbanBoard />
      </main>
    </div>
  );
};

const App = () => {
  return (
    <KanbanProvider>
      <div className="App">
        <AppContent />
      </div>
    </KanbanProvider>
  );
};

export default App;
