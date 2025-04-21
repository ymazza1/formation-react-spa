import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer'
import TaskListContainer from './TaskListContainer/TaskListContainer'
import TaskDetails from './pages/TaskDetails/TaskDetails';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
            <Route path="/" element={<TaskListContainer />} />
            <Route path="/about" element={<About />} />
            <Route path="/task/:id" element={<TaskDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      <TaskListContainer/>
      <Footer name={"Yoann Mazza"} />
    </div>
  );
}

export default App;
