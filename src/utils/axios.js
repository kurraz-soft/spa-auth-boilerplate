import axios from 'axios';
import store from '../store';

const instance = axios.create({
    headers: {
        Authorization: store.getState().auth.jwt?('Bearer ' + store.getState().auth.jwt):'',
    }
});

export default instance;