import React from 'react';
import './KanbanBoard.css'
import KanbanColumn from '../../components/Kanban Column/KanbanColumn';
import useKanban from '../../hooks/useKanban';

const KanbanBoard = () => {
  const { groupedAndSortedTickets } = useKanban(); // Using the custom hook

  return (
    <div className="kanban-board">
      {Object.entries(groupedAndSortedTickets).map(([groupName, tickets]) => (
        <KanbanColumn key={groupName} title={groupName} tickets={tickets} />
      ))}
    </div>
  );
};

  

export default KanbanBoard;
