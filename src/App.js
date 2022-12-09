import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Segways from './pages/Segways'
import Team from './pages/Team'
import Blog from './pages/Blog'
import Login from './pages/Login'
import Navbar from './pagePieces/Navbar'
import Cart from './pages/Cart'
import { useState } from 'react';
import { signOut } from 'firebase/auth'
import { auth } from './segs-firebase'
import CreateBlogPost from './pages/CreateBlogPost';


function App() {

  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = '/login';
    });
  };

  return (
    <Router>
      <Navbar isAuth={isAuth} setIsAuth={setIsAuth}/>
      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>
        <Route path='/segways' element={<Segways></Segways>}>Segways</Route>
        <Route path='/team' element={<Team></Team>}>Team</Route>
        <Route path='/blog' element={<Blog isAuth={isAuth}></Blog>}>Blog</Route>
        <Route path='/cart' element={<Cart></Cart>}>Blog</Route>
        <Route path='/createPost' element={<CreateBlogPost isAuth={isAuth}></CreateBlogPost>}>Create Blog Post</Route>
        <Route path='/login' element={<Login setIsAuth={setIsAuth}/>}>Login</Route>
      </Routes>
    </Router>
  );
}

export default App;
