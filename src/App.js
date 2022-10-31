
import './App.css';
import CreateQuestion from './components/CreateQuestion/CreateQuestion';
import Quiz from './components/Quiz/Quiz';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/quiz' element={<Quiz></Quiz>}></Route>
          <Route path='/admin' element={<CreateQuestion ></CreateQuestion>}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
