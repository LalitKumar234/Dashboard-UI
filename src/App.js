import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import { useEffect } from 'react';

function App() {
  const navigate = useNavigate()
  useEffect(() => {
    const isAuth = localStorage.getItem("isAuth")
    if (!isAuth) {
        navigate('/signin')
    }
}, [])
  return (
    <Routes>
      <Route exact path='/' element={< Home />}></Route>
      <Route exact path='/signin' element={< SignIn />}></Route>
    </Routes>
  );
}

export default App;
