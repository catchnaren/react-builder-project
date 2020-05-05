import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-9e117.firebaseio.com/'
});

export default instance;