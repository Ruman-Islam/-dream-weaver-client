import React, { useEffect, useState } from 'react';
import Package from './Package';
import './Packages.css';

const Packages = ({ isHome }) => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch('photographyPackages.json')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])

    return (
        <div className='packages-container'>
            <h1 className='packages-title'>Packages</h1>
            <div className='packages-wrapper container'>
                {
                    isHome ?
                        packages.slice(0, 4).map(pg => <Package key={pg.id} package={pg} />)
                        :
                        packages.map(pg => <Package key={pg.id} package={pg} />)
                }
            </div>
        </div>
    );
};

export default Packages;