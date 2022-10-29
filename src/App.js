import { Route, Routes } from 'react-router';
import './App.css';
import About from './Components/About';
import About1 from './Components/About1';
import About2 from './Components/About2';
import DatasDetails from './Components/datasDetails';
import Deatails from './Components/Deatails';
import Dummydata from './Components/Dummydata';
import Sample from './Components/Sample';
import Home from './Pages/Home';

function App() {

  return (

<Routes>
  <Route path='/' element={<Dummydata/>} />
  <Route path='/About' element={<About/>}/>
  <Route path='/About2' element={<About2/>}/>
  <Route path='/details/:data' element={<Deatails/>}/>
  <Route path='/Home' element={<Home/>}/>
  <Route path='/datasDetails/:id' element={<DatasDetails/>}/>
  <Route path='/sample' element={<Sample/>}/>
</Routes>


  );
}

export default App;
