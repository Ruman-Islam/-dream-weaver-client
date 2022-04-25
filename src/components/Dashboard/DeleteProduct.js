import React, { useEffect, useState } from 'react';
import Package from '../Packages/Package';

const DeleteProduct = () => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(data => {
                setPackages(data)
            })
    }, [])
    return (
        <div className='packages-container'>
            <h1 className='packages-title'>Packages</h1>
            <div className='packages-wrapper container'>
                {
                    packages?.map(pg =>
                        <Package key={pg._id}
                            deletePackage
                            packageId={pg._id}
                            packages={packages}
                            setPackages={setPackages} />)
                }
            </div>
        </div>
    );
};

export default DeleteProduct;