 async function getMovies() {
     let responseData
     await $.ajax({
         url: 'https://www.fastmock.site/mock/bb4157f45a0b5ffdcb3f6d984517a6c0/woniuMovie/getAllMovies',
         type: 'get',
         contentType: 'application/json',
         success: (data) => {
             responseData = data
         }
     })
     return responseData
 }

 async function getCinema() {
     let cinema
     await $.ajax({
         url: 'https://www.fastmock.site/mock/bb4157f45a0b5ffdcb3f6d984517a6c0/woniuMovie/getAllOperas',
         type: 'get',
         contentType: 'application.json',
         success(data) {
             cinema = data
         }
     })
     return cinema
 }

 async function getMoviesType() {
     let data
     await $.ajax({
         url: `https://www.fastmock.site/mock/bb4157f45a0b5ffdcb3f6d984517a6c0/woniuMovie/getAllTypes`,
         contentType: 'application/json',
         type: 'get',
         success(res) {
             data = res
         }
     })
     return data
 }

 async function getOrders() {
     let data
     await $.ajax({
         url: `https://www.fastmock.site/mock/bb4157f45a0b5ffdcb3f6d984517a6c0/woniuMovie/getOrders
        `,
         contentType: 'applcation/json',
         type: 'get',
         success(res) {
             data = res

         }
     })
     return data
 }


 function getInfo(id) {
     let map = new BMapGL.Map('map');
     let geolocation = new BMapGL.Geolocation(); //创建定位对象
     geolocation.getCurrentPosition(function (result) {
         let city
         city = result.address.city
         sessionStorage.setItem("currentPostion", city)
         let distance
         let cityAddressInfo = []
         getCinema().then(data => {
             data = JSON.stringify(data)
             sessionStorage.setItem("cinema", data)
             data = JSON.parse(data)
             if (data.operas.length) {
                 let searchLng, searchLat
                 let count = 0
                 data.operas.forEach((cinema, index) => {
                     count++
                     let local = new BMapGL.LocalSearch(map, { // 智能搜索
                         onSearchComplete: myFun
                     })

                     function myFun() {
                         let pp = local.getResults().getPoi(0).point // 获取第一个智能搜索结果
                         searchLng = pp.lng
                         searchLat = pp.lat
                         distance = getDistance(result.point.lng, result.point.lat, searchLng,
                             searchLat)
                         let addressInfo = {
                             cinemaName: cinema.name,
                             cinemaAddress: cinema.address,
                             distance: distance.toFixed(1),
                             cinemaImg: cinema.img_src,
                             cinemaId: cinema.id,
                             movies: cinema.movies
                         }
                         if (cityAddressInfo.length) {
                             let getInfo = localStorage.getItem("cityAddressInfo")
                             getInfo = JSON.parse(getInfo)
                             if (getInfo !== null) {
                                 let flag = getInfo.some(item => item.cinemaId == addressInfo
                                     .cinemaId)
                                 if (!flag) {
                                     cityAddressInfo.push(addressInfo)
                                     cityAddressInfo = JSON.stringify(cityAddressInfo)
                                     localStorage.setItem("cityAddressInfo", cityAddressInfo)
                                     cityAddressInfo = JSON.parse(cityAddressInfo)
                                 }
                             }

                         } else {
                             let getInfo = localStorage.getItem("cityAddressInfo")
                             getInfo = JSON.parse(getInfo)
                             if (getInfo !== null) {
                                 let flag = getInfo.some(item => item.cinemaId == addressInfo
                                     .cinemaId)
                                 if (!flag) {
                                     cityAddressInfo.push(addressInfo)
                                     cityAddressInfo = JSON.stringify(cityAddressInfo)
                                     localStorage.setItem("cityAddressInfo", cityAddressInfo)
                                     cityAddressInfo = JSON.parse(cityAddressInfo)
                                 }
                             } else {
                                 cityAddressInfo.push(addressInfo)
                                 cityAddressInfo = JSON.stringify(cityAddressInfo)
                                 localStorage.setItem("cityAddressInfo", cityAddressInfo)
                                 cityAddressInfo = JSON.parse(cityAddressInfo)
                             }
                             if (count == data.operas.length) {
                                 location.href = '../html/mine.html?userId=' + id
                             }
                         }
                     }
                     local.search(cinema.address)
                 })
             }
         })
     })
 }

 function getDistance(lng1, lat1, lng2, lat2) {
     const R = 6371
     const {
         sin,
         cos,
         asin,
         PI,
         hypot
     } = Math
     /** 根据经纬度获取点的坐标 */
     let getPoint = (e, n) => {
         e *= PI / 180
         n *= PI / 180
         //这里 R* 被去掉, 相当于先求单位圆上两点的距, 最后会再将这个距离放大 R 倍
         return {
             x: cos(n) * cos(e),
             y: cos(n) * sin(e),
             z: sin(n)
         }
     }
     let a = getPoint(lng1, lat1)
     let b = getPoint(lng2, lat2)
     let c = hypot(a.x - b.x, a.y - b.y, a.z - b.z)
     let r = asin(c / 2) * 2 * R
     return r
 }

 function mathRan(min, max) {
     return Math.floor(Math.random() * (max - min)) + min
 }


 function clickFooter(selector) {
     $(selector).click(function () {
         let index = $(this).attr("index")
         if (index == 1) {
             location.href = "../html/front-page-havingTicket.html"
         } else if (index == 2) {
             location.href = "../html/cinema.html"
         } else if (index == 3) {
             location.href = "../html/myTikect.html"
         } else {
             location.href = "../html/mine.html"
         }
     })
 }

 function welcome(selector) {
     let users = localStorage.getItem("token")
     users = JSON.parse(users)[0].username
     $(selector).html(`您好,${users}先生`)
 }

 function getCurrentPosition () {
    let currentCity = sessionStorage.getItem("currentPostion")
    $('nav .position span').html(currentCity)
 }

 function back (selector) {
    $(selector).click(function () {
        history.back()
    })
 }