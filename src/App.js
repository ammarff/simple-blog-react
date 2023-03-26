import {Link, Routes, Route} from 'react-router-dom'
import './App.css';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <div className='brand'>Simple Blog</div>
      <nav className='nav'>
        <li className='li-item'>
          <Link to='/' className='nav-item'>Home</Link>
        </li>
        <li className='li-item'>
          <Link to='/profile' className='nav-item'>Profile</Link>
        </li>
        <li className='li-item'>
          <Link to='/blog' className='nav-item'>Blog</Link>
        </li> 
        <li className='li-item'>
          <Link to='/contact' className='nav-item'>Contact</Link>
        </li>
      </nav>
      <Routes>
        <Route path='/' element={< Home/>} />
        <Route path='profile' element={<Profile/>} />
        <Route path='blog' element={<Blog/>} />
        <Route path='blog/:id' element={<BlogDetail/>} />
        <Route path='contact' element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
