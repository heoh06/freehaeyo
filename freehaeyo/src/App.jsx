import './App.css';
import '@mantine/core/styles.css';

import MainPage from './Pages/MainPage';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Hire from './Pages/Hire';
import HireInfo from './Pages/HireInfo';
import MypageFreelancer from './Pages/MypageFreelancer';
import MypageCompany from './Pages/MypageCompany';
import ChangeUserInfo from './Pages/ChangeUserInfo';
import ChangeCompanyInfo from './Pages/ChangeCompanyInfo';
import NameCardList from './Pages/NameCardList';
import CreateHire from './Pages/CreateHire';
import Developer from './Pages/Developer';
import UserInfo from './Pages/UserInfo';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/hire" element={<Hire />}></Route>
        <Route path="/hireInfo/:id" element={<HireInfo />}></Route>
        <Route path="/mypage" element={<MypageFreelancer />}></Route>
        <Route path="/mypagec" element={<MypageCompany />}></Route>
        <Route path="/changeuserinfo" element={<ChangeUserInfo />}></Route>
        <Route
          path="/changecompanyinfo"
          element={<ChangeCompanyInfo />}
        ></Route>
        <Route path="/namecardlist" element={<NameCardList />}></Route>
        <Route path="/createhire" element={<CreateHire />}></Route>
        <Route path="/developer" element={<Developer />}></Route>
        <Route path="/userinfo/:id" element={<UserInfo />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
