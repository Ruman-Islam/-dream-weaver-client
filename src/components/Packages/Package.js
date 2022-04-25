import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Package.css';

const Package = ({ checkoutPage, deletePackage, pg, packages, setPackages }) => {  // package //
    const navigate = useNavigate();

    const handleDeletePackage = async id => {
        const url = `http://localhost:5000/package/${id}`;
        await axios.delete(url)
            .then(res => {
                const remainingPackages = packages.filter(pg => pg._id !== id);
                setPackages(remainingPackages);
            })
    }

    return (
        <div className='pricing-box'>
            <div className='package-header'>
                <img src={pg?.imageURL} alt="" />
                <div className='price-content'>
                    <small>{pg?.name}</small>
                    <h3>TK. {pg?.price}/=</h3>
                </div>
            </div>
            <div className='pricing-features'>
                <ul>
                    {pg?.features?.map((element, index) => <li key={index}>{element}</li>)}
                </ul>
                {checkoutPage ?
                    null
                    :
                    deletePackage ?
                        <div className='pricing-action'>
                            <button onClick={() => handleDeletePackage(pg.id)}>
                                Delete
                            </button>
                        </div>
                        :
                        <div className='pricing-action'>
                            <button onClick={() => navigate(`/checkout/${pg._id}`)}>
                                Book Now
                            </button>
                        </div>
                }
            </div>
        </div>
    );
};

export default Package;