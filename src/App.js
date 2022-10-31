
import './App.css';
import CreateQuestion from './components/CreateQuestion/CreateQuestion';
import Quiz from './components/Quiz/Quiz';

function App() {
  return (
    <div className="App">
      <Quiz></Quiz>
      <CreateQuestion></CreateQuestion>
    </div>
  );
}

export default App;
