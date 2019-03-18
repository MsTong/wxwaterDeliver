var app = getApp();

Page({
  data: {
    imgUrls: [
      '/images/swiper/1.jpg',
      '/images/swiper/2.gif',
      '/images/swiper/3.jpg'
    ],
    imageWidth: wx.getSystemInfoSync().windowWidth,
    imageHeight: wx.getSystemInfoSync().windowHeight-70,
    interval: 5000,
    duration: 1000
  },
  //下拉刷新
  onPullDownRefresh: function() {
    this.onLoad()
  },
  onReady: function() {

  },
  onLoad: function(option) {
    
  }
})