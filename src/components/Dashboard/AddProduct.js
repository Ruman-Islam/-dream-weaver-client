import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {
    const [emptyValue, setEmptyValue] = useState(false);
    const { register, handleSubmit } = useForm();

    const notify = message => {
        toast.success(message, {
            position: toast.POSITION.TOP_CENTER
        });
        setEmptyValue(false);
    }

    useEffect(() => {
        if (emptyValue) {
            notify("Are you missing something?");
        }
    }, [emptyValue])

    const handleResetInput = (e) => {
        e.target.name.value = '';
        e.target.price.value = '';
        e.target.imageURL.value = '';
        e.target.features.value = '';
    }

    const onSubmit = async (data, e) => {
        const packageInfo = data;
        const features = data.features.split(', ');
        packageInfo.features = features;
        if (packageInfo.name && packageInfo.price && packageInfo.imageURL && packageInfo.features) {
            await axios.post("http://localhost:5000/addproduct", packageInfo)
                .then(res => {
                    notify("Package added successfully");
                    handleResetInput(e);
                })
        } else {
            setEmptyValue(true);
        }
    };

    return (
        <div className='add-product-form'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Name</label>
                <input name="name" type="text" {...register("name")} />
                <label>Price</label>
                <input name="price" type="number" {...register("price")} />
                <label>Thumbnail</label>
                <input name="imageURL" type="text" {...register("imageURL")} />
                <label>Features</label>
                <textarea name="features" rows="5" cols="50" {...register("features")} /> <br />
                <button
                    className='login-btn' type='submit'>
                    Add Product
                </button>
            </form>
        </div>
    );
};

export default AddProduct;