import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Greeting from './components/greetings';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Greeting />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
