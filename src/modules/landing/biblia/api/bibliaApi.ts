import axios from "axios";


const bibliaApi = axios.create({
  baseURL: 'https://bible-api.deno.dev/api/read'
});

const librosApi = axios.create({
  baseURL: 'https://bible-api.deno.dev/api/books'
})

export { bibliaApi, librosApi };
