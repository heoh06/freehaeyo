import './App.css';
import '@mantine/core/styles.css';
import MainPage from './Pages/MainPage';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
