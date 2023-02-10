import './styles/App.scss';
import { useEffect } from 'react';
import LoginPage from './components/shared/loginPage';
import Home from './components/shared/home';
import { Routes, Route, useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  const credential: any = JSON.parse(sessionStorage.getItem("customer") || '{}');

  useEffect(() => {
    if(!credential?.isLoggedIn){
      navigate("/");
    }else{
      navigate("/home");
    }

  },[credential?.isLoggedIn]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </div>
  );
}
export default App;
