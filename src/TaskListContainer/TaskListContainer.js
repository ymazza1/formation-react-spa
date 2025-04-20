import React, { useState, useEffect } from "react";
import TaskList from "./TaskList/TaskList";
import initialTasks from "../Tasks.json";
import "./TaskListContainer.css";

function TaskListContainer() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [filter, setFilter] = useState("all"); // all, active, completed

  useEffect(() => {
    // Charger les tâches depuis le fichier JSON
    setTasks(initialTasks);
  }, []);

  // Ajouter une nouvelle tâche
  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === "") return;

    const newTaskObj = {
      id: tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 1,
      title: newTask,
      description: newDescription,
      done: false
    };

    setTasks([...tasks, newTaskObj]);
    setNewTask("");
    setNewDescription("");
  };

  // Supprimer une tâche
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Marquer une tâche comme terminée ou non terminée
  const handleToggleTask = (id) => {
    setTasks(
      tasks.map(task => 
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  // Filtrer les tâches
  const getFilteredTasks = () => {
    switch (filter) {
      case "active":
        return tasks.filter(task => !task.done);
      case "completed":
        return tasks.filter(task => task.done);
      default:
        return tasks;
    }
  };

  // Compter les tâches restantes
  const remainingTasks = tasks.filter(task => !task.done).length;

  return (
    <div className="task-container">
      <h2 className="task-title">Gestionnaire de Tâches</h2>
      
      <form onSubmit={handleAddTask} className="task-form">
        <div className="input-group">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Nouvelle tâche..."
            className="task-input"
          />
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            placeholder="Description (optionnelle)"
            className="task-input"
          />
          <button type="submit" className="add-button">Ajouter</button>
        </div>
      </form>

      <div className="filter-container">
        <button 
          className={`filter-button ${filter === "all" ? "active" : ""}`} 
          onClick={() => setFilter("all")}
        >
          Toutes
        </button>
        <button 
          className={`filter-button ${filter === "active" ? "active" : ""}`} 
          onClick={() => setFilter("active")}
        >
          À faire
        </button>
        <button 
          className={`filter-button ${filter === "completed" ? "active" : ""}`} 
          onClick={() => setFilter("completed")}
        >
          Terminées
        </button>
      </div>

      <div className="tasks-remaining">
        {remainingTasks} tâche{remainingTasks !== 1 ? "s" : ""} restante{remainingTasks !== 1 ? "s" : ""}
      </div>

      <div className="task-list-wrapper">
        <TaskList 
          tasks={getFilteredTasks()} 
          onToggle={handleToggleTask} 
          onDelete={handleDeleteTask} 
        />
      </div>
    </div>
  );
}

export default TaskListContainer;