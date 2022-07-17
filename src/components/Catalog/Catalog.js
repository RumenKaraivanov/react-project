import { useEffect, useState } from "react";
import { getAll } from "../../services/car";
import ItemCard from "../ItemTile/ItemCard";
import './Catalog.css';

const Catalog = ({
    onError
}) => {

    const [cars, setCars] = useState([]);
    useEffect(() => {
        try {
            async function getAllCars() {
                const data = await getAll();
                setCars(data);
            }
            getAllCars();
        } catch (err) {
            onError(err)
        }

    }, []);

    return (
        <div className="container-catalog">
            {cars
                ?
                <main className="grid">
                    {cars.map(car => <ItemCard key={car._id} car={car} />)}
                </main>
                :
                <div className="no-data">
                    <h1>There are no data in database yet.</h1>
                </div>
            }
        </div >
    );
};

export default Catalog;