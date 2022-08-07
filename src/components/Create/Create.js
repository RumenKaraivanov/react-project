import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { create } from "../../services/api/car";
import AuthContext from "../../contexts/AuthContext";
import './Create.css';

const Create = ({
    onError
}) => {

    const [isDisabled, setDisabled] = useState(false);
    const navigate = useNavigate();
    const { auth } = useContext(AuthContext);

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const model = formData.get('model')?.trim();
        const price = formData.get('price')?.trim();
        const imageUrl = formData.get('imageUrl')?.trim();
        const description = formData.get('description')?.trim();

        try {

            if (model.length < 3) {
                throw new Error('Model should be atleast 3 characters long.');
            };
            if (!(/^https?:/).test(imageUrl)) {
                throw new Error('Image should be valid URL');
            };
            if (description.length < 20) {
                throw new Error('Description should be atleast 20 characters long.');
            };

            await create({ model, price, imageUrl, description }, auth.accessToken);
            setDisabled(true);
            navigate('/catalog');
        } catch (err) {
            onError(err);
        };
    };

    return (
        <div className="full-screen-container" style={{ backgroundImage: 'url(background_image.jpg)' }}>
            <div className="form-container">
                <h3 className="form-title">Create</h3>
                <form onSubmit={onSubmit}>
                    <div className="input-group">
                        <label htmlFor="model">Model</label>
                        <input id="model" type="text" name="model" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="price">Price</label>
                        <input id="price" type="text" name="price" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="imageUrl">Image</label>
                        <input id="imageUrl" type="text" name="imageUrl" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="description">Description</label>
                        <input id="description" type="text" name="description" />
                    </div>
                    <button type="submit" className="form-button" disabled={isDisabled} >Create</button>
                </form>
            </div>
        </div>
    );
};

export default Create;