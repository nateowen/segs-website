import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Segways from './pages/Segways'
import Team from './pages/Team'
import Blog from './pages/Blog'
import Login from './pages/Login'
import Navbar from './pagePieces/Navbar'
import { useState } from 'react';
import { signOut } from 'firebase/auth'
import { auth } from './segs-firebase'
import CreateBlogPost from './pages/CreateBlogPost';


function App() {

  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));
  const [isAmin, setIsAdmin] = useState(localStorage.getItem('isAuth'));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      setIsAdmin(false);
      window.location.pathname = '/login';
    });
  };

  return (
    <Router>
      <Navbar/>
      {/* <nav>
        <Link to='/'>Home</Link>
        <Link to='/segways'>Segways</Link>
        <Link to='/team'>Team</Link>
        <Link to='/blog'>Blog</Link>
        { !isAuth ? <Link to='/login'>Login</Link> : 
          <>
            <Link to='/createPost'>Create Blog Post</Link> 
            <div className='logout-button'><button onClick={signUserOut}>Log Out</button></div>
          </> 
        }
      </nav> */}
      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>
        <Route path='/segways' element={<Segways></Segways>}>Segways</Route>
        <Route path='/team' element={<Team></Team>}>Team</Route>
        <Route path='/blog' element={<Blog isAuth={isAuth}></Blog>}>Blog</Route>
        <Route path='/createPost' element={<CreateBlogPost isAuth={isAuth}></CreateBlogPost>}>Create Blog Post</Route>
        <Route path='/login' element={<Login setIsAuth={setIsAuth} setIsAdmin={setIsAdmin}/>}>Login</Route>
      </Routes>
    </Router>
  );
}

export default App;
