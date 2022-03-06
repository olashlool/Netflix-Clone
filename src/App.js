import './App.css';
import { Route , Routes } from 'react-router-dom'; //3rd
import Home from './components/Home/home'
import Navbar from './components/Navbar/navbar'



function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>} />
      </Routes>

    </div>
  );
}

export default App;
