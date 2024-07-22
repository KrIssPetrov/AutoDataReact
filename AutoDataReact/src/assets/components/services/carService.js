// src/services/carService.js
import * as request from '../../../lib/request';

const baseUrl = 'http://localhost:3030/data/cars';

export const getCars = async () => {
    const result = await request.get(`${baseUrl}`);
    return result;
};


export const getLatest = async () => {
    const query = new URLSearchParams({
        offset: 0,
        pageSize: 3,
    });
    const result = await request.get(`${baseUrl}?sortBy=_createdOn%20desc&${query}`);
    return result;
}
