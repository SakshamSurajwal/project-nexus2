import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Authorization/Login';
import SignUp from './Authorization/SignUp';
import HomePage from './HomePage';

function App() {
  return (
    <div className="App" style={{width:'100vw',height:'100vh'}}>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
