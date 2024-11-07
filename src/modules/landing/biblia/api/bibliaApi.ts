import axios from "axios";


const bibliaApi = axios.create({
  baseURL: 'https://bible-api.deno.dev/api'
});

export { bibliaApi };
