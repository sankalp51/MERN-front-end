import { useState, useEffect } from 'react';
import axios from 'axios';
import "../css/data.css";
const Displaydata = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/students")
            .then(response => setData(response.data))
            .catch(err => console.log(err));

    }, []);
    const deleteItem = e => {
        const deleteItemId = e.target.value;
        axios.delete(`http://localhost:3000/students/${deleteItemId}`)
            .then(() => window.location.reload())
    }

    return (
        <div className='container'>
            {data.map(items => {
                return (<div className='data-item'>
                    <h1 className='item-heading'>{items.Name}</h1>
                    <p className='item-info'>{items.DOB}</p>
                    <p className='item-info'>{items.Age}</p>
                    <p className='item-info'>{items.Roll}</p>
                    <button id='delete-btn' onClick={deleteItem} value={items.Name}>Delete</button>
                </div>)
            })}
        </div>
    );


}

export default Displaydata;