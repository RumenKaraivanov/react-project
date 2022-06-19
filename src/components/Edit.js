import React from "react";

const Edit = () => {
    return (
        <div className="full-screen-container" style={{ backgroundImage: 'url(background_image.jpg)' }}>
            <div className="form-container">
                <h3 className="form-title">Edit Car</h3>
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
                        <label htmlFor="year">Year</label>
                        <input id="year" type="text" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="description">Description</label>
                        <input id="description" type="text" />
                    </div>
                    <button type="submit" className="form-button">Edit</button>
                </form>
            </div>
        </div>
    );
};

export default Edit;