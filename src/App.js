import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
    <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}>Home</Route>
        <Route path="/blog" element={<Blog></Blog>}>Blog</Route>
        <Route path="/manage-items">Manage Items</Route>
        <Route path="/add-items">Add Items</Route>
        <Route path="/my-items">My Items</Route>
        <Route path="/about">About</Route>
        <Route path="/login">Login</Route>
        <Route path="/logout">Logout</Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
