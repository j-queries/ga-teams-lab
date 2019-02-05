/**
 * @Author: xiaojiezhang
 * @Date:   2019-02-05T11:40:49-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-02-05T11:44:37-05:00
 */

const getbooks = () => {
  return $.ajax({
    url:"https://wdi-library.herokuapp.com/books",
    method:"GET"
  })
}

module.exports = {
  getbooks
}
