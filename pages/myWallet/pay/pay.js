// pages/myWallet/pay/pay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectArr: [{
      id: 1,
      name: '微信支付',
    }, {
      id: 2,
        name: '支付宝支付'
    }, {
      id: 3,
      name: '银行卡支付'
    }],
    current: '微信支付',
    payType: '',
    position: 'left',
    money:1000
  },
  handleSelect({ detail = {} }) {
    this.setData({
      current: detail.value
    });
  },
    toPay() {

    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.money) {
      this.setData({ 'money': options.money })
    }
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