const axios = require('axios')

export function get_currency_listing() {
  return axios.get('https://g4jg238qx5.execute-api.ap-southeast-2.amazonaws.com/default/MongoDB_Atlas_Query')
}
