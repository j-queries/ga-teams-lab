/**
 * @Author: xiaojiezhang
 * @Date:   2019-02-05T11:28:07-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-02-05T11:42:39-05:00
 */



'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const BooksEvent = require('./books/events')


$(() => {
  // your JS code goes here
  $('#get-books').on('click',BooksEvent.ongetsbooks)
})
