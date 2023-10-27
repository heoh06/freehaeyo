import './App.css';
import '@mantine/core/styles.css';

import MainPage from './Pages/MainPage';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Hire from './Pages/Hire';
import HireInfo from './Pages/HireInfo'
import MypageFreelancer from './Pages/MypageFreelancer';
import MypageCompany from './Pages/MypageCompany';

import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/hire" element={<Hire/>}></Route>
        <Route path="/hireInfo" element={<HireInfo/>}></Route>
        <Route path="/mypage" element={<MypageFreelancer/>}></Route>
        <Route path="/mypagec" element={<MypageCompany/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
