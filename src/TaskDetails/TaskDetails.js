import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Circle, Clock, Calendar, Edit, Save, X } from "lucide-react";
import initialTasks from "../../Tasks.json";
import "./TaskDetails.css";

function TaskDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    title: "",
    description: ""
  });
  
  // Formatage de la date
  const formatDate = () => {
    const date = new Date();
    return date.toLocaleDateString('fr-FR', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  useEffect(() => {
    // Simulation de chargement
    const timer = setTimeout(() => {
      const foundTask = initialTasks.find(task => task.id === parseInt(id));
      if (foundTask) {
        setTask(foundTask);
        setEditForm({
          title: foundTask.title,
          description: foundTask.description || ""
        });
      }
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [id]);
  
  const toggleTaskStatus = () => {
    setTask(prevTask => ({
      ...prevTask,
      done: !prevTask.done
    }));
  };
  
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const saveChanges = () => {
    if (!editForm.title.trim()) return;
    
    setTask(prev => ({
      ...prev,
      title: editForm.title,
      description: editForm.description
    }));
    
    setEditing(false);
  };
  
  const cancelEditing = () => {
    setEditForm({
      title: task.title,
      description: task.description || ""
    });
    setEditing(false);
  };

  if (loading) {
    return (
      <div className="task-details-container">
        <div className="loading-spinner">Chargement...</div>
      </div>
    );
  }

  if (!task) {
    return (
      <div className="task-details-container">
        <div className="task-not-found">
          <h2>Tâche non trouvée</h2>
          <p>La tâche que vous recherchez n'existe pas.</p>
          <Link to="/" className="back-button">
            <ArrowLeft size={18} />
            Retour à la liste
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="task-details-container">
      <div className="task-details-header">
        <Link to="/" className="back-button">
          <ArrowLeft size={18} />
          Retour à la liste
        </Link>
        
        <div className="task-status">
          {task.done ? (
            <span className="status-completed">
              <CheckCircle size={18} /> Terminée
            </span>
          ) : (
            <span className="status-pending">
              <Circle size={18} /> En cours
            </span>
          )}
        </div>
      </div>
      
      <div className="task-details-content">
        {editing ? (
          <div className="task-edit-form">
            <div className="form-group">
              <label htmlFor="title">Titre</label>
              <input
                type="text"
                id="title"
                name="title"
                value={editForm.title}
                onChange={handleEditChange}
                placeholder="Titre de la tâche"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                value={editForm.description}
                onChange={handleEditChange}
                placeholder="Description de la tâche"
                rows="4"
              ></textarea>
            </div>
            
            <div className="edit-actions">
              <button onClick={saveChanges} className="save-button">
                <Save size={16} /> Enregistrer
              </button>
              <button onClick={cancelEditing} className="cancel-button">
                <X size={16} /> Annuler
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="task-title-section">
              <h2>{task.title}</h2>
              <button onClick={() => setEditing(true)} className="edit-button">
                <Edit size={18} />
              </button>
            </div>
            
            <div className="task-meta">
              <div className="task-meta-item">
                <Clock size={16} />
                <span>Dernière modification: {formatDate()}</span>
              </div>
              <div className="task-meta-item">
                <Calendar size={16} />
                <span>ID: {task.id}</span>
              </div>
            </div>
            
            <div className="task-description">
              <h3>Description</h3>
              <p>{task.description || "Aucune description disponible."}</p>
            </div>
          </>
        )}
      </div>
      
      <div className="task-actions">
        <button 
          onClick={toggleTaskStatus} 
          className={`toggle-status-button ${task.done ? "mark-undone" : "mark-done"}`}
        >
          {task.done ? (
            <>
              <Circle size={18} />
              Marquer comme non terminée
            </>
          ) : (
            <>
              <CheckCircle size={18} />
              Marquer comme terminée
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default TaskDetails;