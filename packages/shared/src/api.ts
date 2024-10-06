/**
 * Creates an Axios instance with a predefined base URL.
 * The base URL is retrieved from the environment variable `NEXT_PUBLIC_API_URL`.
 *
 * @remarks
 * This instance can be used to make HTTP requests to the API endpoints.
 *
 * @example
 * ```typescript
 * import { api } from './api';
 *
 * api.get('/endpoint')
 *   .then(response => {
 *     console.log(response.data);
 *   })
 *   .catch(error => {
 *     console.error('Error fetching data:', error);
 *   });
 * ```
 */
import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
