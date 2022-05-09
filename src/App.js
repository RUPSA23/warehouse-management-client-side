import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Additems from './components/Additems/Additems';
import Allinventorys from './components/Allinventorys/Allinventorys';
import Blog from './components/Blog/Blog';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import MyItems from './components/MyItems/MyItems';
import NotFound from './components/NotFound/NotFound';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
    <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/manage-items" element={<Allinventorys></Allinventorys>}></Route>
        <Route path="/manage/inventory" element={
          <RequireAuth>
                   <Allinventorys></Allinventorys>
          </RequireAuth>
        }></Route>
        <Route path="/add-items" element={<Additems></Additems>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/logout" element={<Home></Home>}></Route>
        <Route path="/my-items" element={<MyItems></MyItems>}></Route>
        <Route path="/registration" element={<Registration></Registration>}></Route>
        <Route path="/inventory/:id" element={
          <RequireAuth>
       <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
