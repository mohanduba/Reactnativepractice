import axios from 'axios';
import { BASE_URL } from './Commonapi';

export const Getproductsdataapi = async () => {
    try {
        const response = await axios.get(BASE_URL);
        console.log('Response received:', response);
        const products = response?.data?.products;
        if (!products) {
            return [];
        }
        return products;
    } catch (error) {
        console.error('Error occurred while fetching products:', error);
        return [];
    }
};
