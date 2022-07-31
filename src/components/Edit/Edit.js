import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { editCar, getOneById } from "../../services/api/car";
import AuthContext from "../../contexts/AuthContext";
import './Edit.css';

const Edit = ({
    onError
}) => {
    const { id } = useParams();
    const [inputValues, setInputValues] = useState({
        _id: '',
        model: '',
        price: '',
        imageUrl: '',
        description: '',
        _ownerId: '',
        likes: []
    });
    const [isDisabled, setDisabled] = useState(false);
    const { auth } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        try {
            async function getCar() {
                const data = await getOneById(id);
                setInputValues(data);
            }
            getCar();
        } catch (err) {
            onError(err);
        };
    }, [id, onError]);
    const onChange = (e) => {
        setInputValues(oldValues => {
            return {
                ...oldValues,
                [e.target.name]: e.target.value
            };
        });
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const model = formData.get('model')?.trim();
        const price = formData.get('price')?.trim();
        const imageUrl = formData.get('imageUrl')?.trim();
        const description = formData.get('description')?.trim();

        const carInfo = {
            model,
            price,
            imageUrl,
            description
        };
        try {
            await editCar(inputValues._id, carInfo, auth.accessToken);
            setDisabled(true);
            navigate('/catalog');
        } catch (err) {
            onError(err);
        }
    };
    return (
        <div className="full-screen-container" style={{ backgroundImage: 'url(background_image.jpg)' }}>
            <div className="form-container">
                <h3 className="form-title">Edit Car</h3>
                <form onSubmit={onSubmit}>
                    <div className="input-group">
                        <label htmlFor="model">Model</label>
                        <input id="model" type="text" name="model" onChange={onChange} value={inputValues.model} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="price">Price</label>
                        <input id="price" type="text" name="price" onChange={onChange} value={inputValues.price} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="imageUrl">Image</label>
                        <input id="imageUrl" type="text" name="imageUrl" onChange={onChange} value={inputValues.imageUrl} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="description">Description</label>
                        <input id="description" type="text" name="description" onChange={onChange} value={inputValues.description} />
                    </div>
                    <button type="submit" className="form-button" disabled={isDisabled} >Edit</button>
                </form>
            </div>
        </div>
    );
};

export default Edit;