import { PomodoreContainer } from "../pomodore/PomodoreContainer";
import { TaskContainer } from "../task/TaskContainer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TaskContainer></TaskContainer>
      <PomodoreContainer></PomodoreContainer>
    </div>
  );
}

export default App;
