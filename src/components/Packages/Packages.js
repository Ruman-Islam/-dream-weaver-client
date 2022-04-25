import usePackages from '../../Hooks/usePackages';
import Package from './Package';
import './Packages.css';

const Packages = ({ isHome }) => {
    const { packages } = usePackages();

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
        </div>
    );
};

export default Packages;