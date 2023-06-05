import CustomBar from './CustomBar';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import GuessPage from './GuessPage';

function App() {
  return (
    <Routes>
      <Route path='*' element={<GuessPage></GuessPage>}></Route>
      <Route path='/guess' element={<GuessPage></GuessPage>}></Route>

    </Routes>
  );
}

export default App;
