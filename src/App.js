
import './App.css';
import Display from './Components/Display';
import Check from './Components/Check'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>        
        <Route exact path='/' element={<Check/>} />        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
