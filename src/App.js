
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Edit from './pages/Edit';

function App() {
  return (
    <div className="App">
      <h1 className='mx-3 mt-3 text-center'>Meme Generator</h1>
   <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/edit' element={<Edit />}/>
   </Routes>
    </div>
  );
}

export default App;
