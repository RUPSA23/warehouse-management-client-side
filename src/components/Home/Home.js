import React, {useState, useEffect} from 'react';
import { Button } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Dress from '../Dress/Dress';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const [dresses, setDresses] = useState([]);
    const navigate = useNavigate();
    const navigateToInventoryupdate = () => {
        navigate('/manage/inventory');
    }

    useEffect(() => {
        fetch('http://localhost:5000/dresses')
        .then(res => res.json())
        .then(data => setDresses(data))
    }, []);
    return (
        <div>
            <Banner></Banner>
            <div>
                <h1 style={{fontWeight: 'bold', color: 'purple', marginTop: '8px'}}>Our Inventory</h1>
                <div className="container">
                   {
                       dresses.map(dress => <Dress key={dress._id} dress={dress}></Dress>)
                   }
                </div>
<>
  <div className="mb-5 mt-5">
    <Button variant="success" size="lg" onClick={navigateToInventoryupdate}>
    Manage Inventories
    </Button>{' '}
  </div>
</>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;