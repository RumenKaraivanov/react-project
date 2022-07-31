const host = 'http://localhost:3030'

async function request(url, options) {
    try {
        const response = await fetch(host + url, options);

        if (response.ok !== true) {
            const error = await response.json();
            throw new Error(error.message);
        };

        if (response.status === 204) {
            return response;
        } else {
            return response.json();
        };

    } catch (err) {
        throw err;
    };

};
function createOptions(method = 'get', data, token) {

    const options = {
        method,
        headers: {},
        mode: 'cors',
        credentials: 'include'
    };
    if (data !== undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    };


    if (token) {
        options.headers['X-Authorization'] = token;
        options.headers['Content-Type'] = 'application/json';
    };

    return options;
};

export async function get(url, token) {
    return request(url, createOptions('get', undefined, token));
};
export async function put(url, data, token) {
    return request(url, createOptions('put', data, token));
};
export async function post(url, data, token) {
    return request(url, createOptions('post', data, token));
};
export async function del(url, token) {
    return request(url, createOptions('delete', undefined, token));
};

export async function login(email, password) {

    const response = await request('/users/login', createOptions('post', { email, password }));
    return response;
};
export async function register(email, password) {
    const response = await request('/users/register', createOptions('post', { email, password }));
    return response;
};
export async function logout(token) {
    await request('/users/logout', createOptions('get', undefined, token));
};