// pages/order/orderDetail/orderDetail.js
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nowOrder:{
      orderInfo:{
        orderNo:'1234555',
        orderStatus:1,
        count:2,
        simplyPrice:100,
        allPrice:200,
        orderType:'桶装水',
        income:10,
        bookDate:'2018-01-11 12:21:20',
        sendDate:'2018-01-11 13:21:20'
      },
      addressInfo:{
        name:'佟领',
        phone:'1234565666',
        address:'四合院'
      }
    }
  },
  makeComment() {
    wx.navigateTo({ url: '/pages/order/comment/comment'})
  },
  handleSend() {

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.data.nowOrder) {
      this.setData({ "nowOrder": app.data.nowOrder })
    }
    if (options.orderNo){
      console.log(options.orderNo)
    }
    //通过orderNo获取配送详情
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})