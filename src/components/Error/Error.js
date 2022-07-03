import './Error.css';

const Error = ({
    err
}) => {
    return (
        <div className="errorContainer">
            <p>{err}</p>
        </div>
    );
};

export default Error;