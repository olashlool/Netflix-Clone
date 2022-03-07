import { Route , Routes } from 'react-router-dom';
import Home from './components/Home/home'
import Navbar from './components/Navbar/navbar'
import Favorite from './components/FavList/favList'
import Carousel from './components/Carousel/carousel';


function App() {
  return (
    <div>
      
      <Navbar/>
      <Carousel />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        {/* <Route path='/favorite' exact element={<Favorite/>} /> */}
      </Routes>

    </div>
  );
}

export default App;
