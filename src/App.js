import { Route, Routes } from 'react-router';
import './App.css';
import About from './Components/About';
import About1 from './Components/About1';
import About2 from './Components/About2';
import DatasDetails from './Components/datasDetails';
import Deatails from './Components/Deatails';

function App() {

  return (
    <div className="App">

<Routes>
  <Route path='/' element={<About/>} />
  <Route path='/About1' element={<About1/>}/>
  <Route path='/About2' element={<About2/>}/>
  <Route path='/details/:data' element={<Deatails/>}/>
  {/* <Route path='/datasDetails/:id' element={<DatasDetails/>}/> */}
</Routes>

   
    </div>
  );
}

export default App;
