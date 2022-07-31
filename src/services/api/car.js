
import * as api from "./api.js";
const url = '/data/cars';

export async function getAll() {
    return api.get(url);
};
export async function create(data, token) {
    return api.post(url, data, token);
};
export async function getOneById(id) {
    return api.get(url + '/' + id);
};
export async function editCar(id, data, token) {
    return api.put(url + '/' + id, data, token);
};
export async function deleteOnebyId(id, token) {
    return api.del(url + '/' + id, token);
};
export async function likeCar(id, token) {
    return api.post(url + '/likes/' + id, undefined, token);
};