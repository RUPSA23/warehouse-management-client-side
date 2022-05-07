import React, {useState, useEffect} from 'react';
import Banner from '../Banner/Banner';
import Dress from '../Dress/Dress';
import Footer from '../Footer/Footer';
import './Home.css';

const Home = () => {
    const [dresses, setDresses] = useState([]);

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
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;