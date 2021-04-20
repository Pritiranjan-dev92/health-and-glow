const axios = require('axios');
async function fetchStart(url) {
    try {
      return await axios.get(url);
    } catch (error) {
      console.error(error);
    }
  }
  export default fetchStart;