// pages/myScore/myScore.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scoreInfo:{
    listArr:[{
      title:"配送所得",
      subtitle:"详细信息",
      score:10,
      createTime:"2015-01-20",
      orderNo:1234555
    }, {
        title: "配送所得",
        subtitle: "详细信息",
        score: 10,
        createTime: "2015-01-20",
        orderNo: 1234555

      }, {
        title: "配送所得",
        subtitle: "详细信息",
        score: 10,
        createTime: "2015-01-20",
        orderNo: 1234555

      }, {
        title: "配送所得",
        subtitle: "详细信息",
        score: 10,
        createTime: "2015-01-20",
        orderNo: 1234555

      }, {
        title: "配送所得",
        subtitle: "详细信息",
        score: 10,
        createTime: "2015-01-20"
      }, {
        title: "配送所得",
        subtitle: "详细信息",
        score: 10,
        createTime: "2015-01-20"
      }, {
        title: "配送所得",
        subtitle: "详细信息",
        score: 10,
        createTime: "2015-01-20"
      }, {
        title: "配送所得",
        subtitle: "详细信息",
        score: 10,
        createTime: "2015-01-20"
      }, {
        title: "配送所得",
        subtitle: "详细信息",
        score: 10,
        createTime: "2015-01-20"
      }, {
        title: "配送所得",
        subtitle: "详细信息",
        score: 10,
        createTime: "2015-01-20"
      }, {
        title: "配送所得",
        subtitle: "详细信息",
        score: 10,
        createTime: "2015-01-20"
      }, {
        title: "配送所得",
        subtitle: "详细信息",
        score: 10,
        createTime: "2015-01-20"
      }],
    allScore:100}
  },
  todetail(e) {
    wx.navigateTo({
      url: '/pages/order/orderDetail/orderDetail?orderNo=' + e.currentTarget.dataset.item.orderNo,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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