import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Package from '../Packages/Package';

const DeleteProduct = () => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        const getPackages = async () => {
            await axios.get('https://secret-basin-49124.herokuapp.com/packages')
                .then(res => setPackages(res.data))
        }
        getPackages();
    }, [])
    return (
        <div className='packages-container'>
            <h1 className='packages-title'>Packages</h1>
            <div className='packages-wrapper container'>
                {
                    packages?.map(pg =>
                        <Package key={pg._id}
                            deletePackage
                            pg={pg}
                            packages={packages}
                            setPackages={setPackages} />)
                }
            </div>
        </div>
    );
};

export default DeleteProduct;