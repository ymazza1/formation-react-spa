import React from "react";
import "./TaskList.css";
import { Link } from "react-router-dom";
import { Trash2, CheckCircle, Circle, Info } from "lucide-react";

function TaskList({ tasks, onToggle, onDelete }) {
  // Si aucune tâche n'est disponible
  if (tasks.length === 0) {
    return <div className="no-tasks">Aucune tâche disponible</div>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className={`task-item ${task.done ? "completed" : ""}`}>
          <div className="task-checkbox" onClick={() => onToggle(task.id)}>
            {task.done ? (
              <CheckCircle className="check-icon" />
            ) : (
              <Circle className="circle-icon" />
            )}
          </div>
          
          <div className="task-content">
            <div className="task-title">
              {task.title}
            </div>
            {task.description && (
              <div className="task-description">
                {task.description}
              </div>
            )}
          </div>
          

          <div className="task-actions">
            <Link 
              to={`/task/${task.id}`} 
              className="view-button"
              aria-label="Voir les détails"
            >
              <Info size={18} />
            </Link>
            <button 
              className="delete-button"
              onClick={() => onDelete(task.id)}
              aria-label="Supprimer la tâche"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;