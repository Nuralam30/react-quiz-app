
import './App.css';
import CreateQuestion from './components/CreateQuestion/CreateQuestion';
import Quiz from './components/Quiz/Quiz';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { createContext, useState } from 'react';
import Header from './components/Header/Header';
import Tutorial from './components/Tutorial/Tutorial';

export const QuizContext = createContext()

function App() {

  const [createdQuestions, setCreatedQuestions] = useState([]);

  return (
    <div className="App">
      <QuizContext.Provider value={[createdQuestions, setCreatedQuestions]}>
        <Router>
          <Header></Header>
          <Routes>
          <Route path='/' element={<Quiz></Quiz>}></Route>
            <Route path='/quiz' element={<Quiz></Quiz>}></Route>
            <Route path='/tutorial' element={<Tutorial></Tutorial>}></Route>
            <Route path='/login' element={<CreateQuestion ></CreateQuestion>}></Route>
          </Routes>
        </Router>
      </QuizContext.Provider>
    </div>
  );
}

export default App;
