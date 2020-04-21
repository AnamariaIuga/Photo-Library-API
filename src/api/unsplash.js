import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 3034944aa771efedc391c99f033dba1b2b060cb3d8e7633b8dd61d4901ce154d'
  }
});