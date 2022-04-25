import axios from "axios";
import { useEffect, useState } from "react"

const usePackages = () => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        const loadPackages = async () => {
            await axios.get('http://localhost:5000/packages')
                .then(res => {
                    setPackages(res.data);
                })
        }
        loadPackages();
    }, [])

    return { packages, setPackages }
}

export default usePackages;