import React from "react";

const ItemCard = () => {
    return (
        <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3">
            <div className="card-box bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">
                <div className="bg-cover h-48"><img className="card-img " src={"https://images.unsplash.com/photo-1523978591478-c753949ff840?w=900"} /></div>

                <div className="p-4 flex-1 flex flex-col">
                    <h3 className="mb-4 text-2xl">My heading</h3>
                    <div className="mb-4 text-grey-darker text-sm flex-1">
                        <p>Description: </p>
                    </div>
                    <a href="#" class="btn btn-primary">Details</a>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;