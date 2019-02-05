/**
 * @Author: xiaojiezhang
 * @Date:   2019-02-05T11:40:43-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-02-05T11:52:34-05:00
 */
// const index-handle

const ongetsbookssuccess = response => {
 $('#umsg').html('Get Books success')

}

const fail = () => {
  $('#umsg').html('Get Books Error')
}

module.exports={
 ongetsbookssuccess,
 fail
}
