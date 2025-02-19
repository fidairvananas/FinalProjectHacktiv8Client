import axios from "axios";

export const ORIGIN = "http://localhost:3000";

export const carsApi = axios.create({
  baseURL: `${ORIGIN}/cars`,
});

export const dealerApi = axios.create({
  baseURL: `${ORIGIN}/dealers`,
});

export const buyerApi = axios.create({
  baseURL: `${ORIGIN}/buyers`
})

export const brandApi = axios.create({
  baseURL: `${ORIGIN}/brands`,
});

export const typeApi = axios.create({
  baseURL: `${ORIGIN}/types`,
});
