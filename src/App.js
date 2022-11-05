import logo from './logo.svg';
import './App.css';
import Login from './components/login/Login'
import Homepage from './components/pages/Homepage'
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div>
    <Login/>
    <Routes>
      <Route  path="/" element={Homepage} />
    </Routes>
    </div>
  );
}

export default App;
