export const create = async (data, token) => {
    try {
        const response = await fetch('http://localhost:3030/data/cars',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Authorization': token
                },
                credentials: 'include',
                body: JSON.stringify(data)
            });
        if (response.ok !== true) {
            const error = await response.json();
            throw new Error(error.message);
        };
        return await response.json();
    } catch (err) {
        throw err;
    }
};
export const getAll = async () => {
    try {
        const response = await fetch('http://localhost:3030/data/cars');
        if (response.ok !== true) {
            const error = await response.json();
            throw new Error(error.message);
        };
        return await response.json();
    } catch (err) {
        throw err;
    }
};
export const getOneById = async (id) => {
    try {
        const response = await fetch('http://localhost:3030/data/cars/' + id);
        if (response.ok !== true) {
            const error = await response.json();
            throw new Error(error.message);
        };
        return await response.json();
    } catch (err) {
        throw err;
    }
};