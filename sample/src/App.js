import './App.css';
import { Routes, Route, Outlet, } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Error from './components/Error';
import Address from './components/Address';
import Blog from './components/Blog';
import Newblog from './components/Newblog';
import Oldblog from './components/Oldblog';
import Contact from './components/Contact';
import Gallary from './components/Gallary';
function App() {
  return (
    <div className="App">
      <h1>Welcome to my React App</h1>
      <Header/>
      <Navbar/>
      <Routes>
      <Route index element={<Home/>}/>
      <Route path = '/Home' element= {<Home/>} />
      <Route path = '/address' element= {<Address/>} />
      <Route path = '/blog' element= {<Blog/>} >
        <Route path = "newblog" element= {<Newblog/>} />
        <Route path = "oldblog" element= {<Oldblog/>} />
      </Route>
      <Route path = '/contact' element= {<Contact/>} />
      <Route path = '/gallary' element= {<Gallary/>} />
      <Route path = '*' element= {<Error />} />
      </Routes>
    </div>
  );
}

export default App;
