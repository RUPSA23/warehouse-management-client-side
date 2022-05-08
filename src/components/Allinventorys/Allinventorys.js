import React, { useEffect, useState } from 'react';
import Allinventory from '../Allinventory/Allinventory';

const Allinventorys = () => {
    const [allinventory, setAllinventory] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/alldresses')
        .then(res => res.json())
        .then(data => setAllinventory(data))
    }, []);

    const handleDeleteButton = (id) => { 
        const proceed = window.confirm("Are you sure you want to delete?");
        if (proceed) {
          console.log("deleting user with id, ", id);
          const url = `http://localhost:5000/dress/${id}`;
          fetch(url, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                console.log("deleted");
                const remaining = allinventory.filter((user) => user._id !== id);
                setAllinventory(remaining);
              }
            });
        }
      };
    return (
        <div>
       <div className="container">
                   {
                    allinventory.map(inventory => <Allinventory key={inventory._id} inventory={inventory} handleDeleteButton={handleDeleteButton}></Allinventory>)
                   }
                </div>
         
        </div>
    );
};

export default Allinventorys;