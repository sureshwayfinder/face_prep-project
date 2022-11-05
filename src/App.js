import './App.css';
import Login from './components/login/Login'
import Homepage from './components/pages/Homepage'
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div>
    <Routes>
      <Route  path="/" exact element={<Login/>} />
      <Route  path="/home" exact element={<Homepage/>} />
      <Route  path="/login" exact element={<Login/>} />
    </Routes>
    </div>
  );
}

export default App;