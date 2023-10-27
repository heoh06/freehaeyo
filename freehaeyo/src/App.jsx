import './App.css'
import '@mantine/core/styles.css';
import MainPage from './Pages/MainPage'
import SignUp from './Pages/SignUp'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
