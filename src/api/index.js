import axios from "axios";

export const REQUEST = {
  getProducts: () => axios.get('/products.json/'),
  postProducts: (data) => axios.post('/products.json/', data),
  deleteProduct: (data) => axios.delete('/products.json/', data),
}