import React from "react";
import './Create.css';

const Create = () => {
    return (
        <div className="full-screen-container" style={{ backgroundImage: 'url(background_image.jpg)' }}>
            <div className="form-container">
                <h3 className="form-title">Create Car</h3>
                <form>
                    <div className="input-group">
                        <label htmlFor="model">Model</label>
                        <input id="model" type="text" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="brand">Brand</label>
                        <input id="brand" type="text" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="imageUrl">Image</label>
                        <input id="imageUrl" type="text" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="description">Description</label>
                        <input id="description" type="text" />
                    </div>
                    <button type="submit" className="form-button">Create</button>
                </form>
            </div>
        </div>
    );
};

export default Create;