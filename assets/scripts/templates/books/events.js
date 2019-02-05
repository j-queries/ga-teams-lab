/**
 * @Author: xiaojiezhang
 * @Date:   2019-02-05T11:40:53-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-02-05T11:45:37-05:00
 */
const api = require('./api')
const ui = require('./ui')

const ongetsbooks = event => {
  api.getbooks()
  .then(ui.ongetsbookssuccess)
  .catch(ui.fail)
}



module.exports={
  ongetsbooks
}
