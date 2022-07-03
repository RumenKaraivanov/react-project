export const login = async (email, password) => {
    try {
        const response = await fetch('http://localhost:3030/users/login',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
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
export const register = async (email, password) => {
    try {
        const response = await fetch('http://localhost:3030/users/register',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
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


