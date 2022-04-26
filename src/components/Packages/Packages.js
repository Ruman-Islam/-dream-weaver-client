import axios from 'axios';
import { useEffect, useState } from 'react';
// import usePackages from '../../Hooks/usePackages';
import Package from './Package';
import './Packages.css';

const Packages = ({ isHome }) => {
    // const { packages } = usePackages();
    const [packages, setPackages] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(8);

    useEffect(() => {
        const getPageCount = async () => {
            await axios.get('https://secret-basin-49124.herokuapp.com/packageCount')
                .then(res => {
                    setPageCount(Math.ceil(res.data.count / 8))
                })
        }
        getPageCount();
    }, [])

    useEffect(() => {
        const getPackages = async () => {
            await axios.get(`https://secret-basin-49124.herokuapp.com/packages?page=${page}&size=${size}`)
                .then(res => {
                    setPackages(res.data);
                })
        }
        getPackages();
    }, [page, size])

    return (
        <div className='packages-container'>
            <h1 className='packages-title'>Packages</h1>
            <div className='packages-wrapper container'>
                {  // Conditioning where to show packages //
                    isHome ?
                        packages.slice(0, 4).map(pg => <Package key={pg._id} pg={pg} />)
                        :
                        packages.map(pg => <Package key={pg._id} pg={pg} />)
                }
            </div>
            {isHome ||
                <div className='page-btn'>
                    <div>
                        {
                            [...Array(pageCount).keys()]
                                .map(pageNumber =>
                                    <button key={pageNumber} className={page === pageNumber ? 'selected-btn' : ''}
                                        onClick={() => setPage(pageNumber)}>
                                        {pageNumber + 1}
                                    </button>
                                )
                        }
                    </div>
                    <div className='selected-page-btn'>
                        <select defaultValue="8"
                            onChange={(e) => setSize(e.target.value)}>
                            <option value="4">4</option>
                            <option value="8">8</option>
                            <option value="12">12</option>
                            <option value="16">16</option>
                            <option value="20">20</option>
                            <option value="24">24</option>
                        </select>
                    </div>
                </div>}
        </div>
    );
};

export default Packages;