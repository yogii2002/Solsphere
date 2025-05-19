import axios from 'axios';
export const fetchSystems = () => axios.get('http://localhost:5000/api/system');