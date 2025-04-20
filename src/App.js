import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer'
import TaskListContainer from './TaskListContainer/TaskListContainer'

function App() {
  return (
    <div className="App">
      <Header/>
      <TaskListContainer/>
      <Footer name={"Yoann Mazza"} />
    </div>
  );
}

export default App;
