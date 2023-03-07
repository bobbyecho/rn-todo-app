const { default: axios } = require("axios");

const http = axios.create({
  baseURL: 'https://aa22-2405-8180-a03-98e-5d9b-1c28-be6-3762.ap.ngrok.io'
})

export default http;