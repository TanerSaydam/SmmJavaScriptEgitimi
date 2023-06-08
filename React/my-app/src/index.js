import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import List from './List'

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/list' element={<List/>}/>
      </Routes>
    </BrowserRouter>    
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);

reportWebVitals();
