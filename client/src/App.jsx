import './App.css'
import LandingPage from './components/LandingPage';
import TaskItem from './components/TaskItem';

function App() {
  const SabotageTask = {
    title: 'Rearrange your books by size',
    description: 'This annoying task awaits you.', 
  };


  return (
    <>
    <LandingPage/>
    <TaskItem task={SabotageTask} />
    </>
  )
}

export default App;
