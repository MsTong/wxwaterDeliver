// pages/rechargeList/rechargeList.js
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rechargeList: [{
      title:'会员等级Lv1',
      subtitle:'充值可享受1周免费送2桶',
      money:290,
      type:'member'
    }, {
        title: '会员等级Lv1',
        subtitle: '充值可享受1周免费送2桶',
        money: 290,
        type: 'member'
      }, {
        title: '积分充值',
        subtitle: '充值可享受1周免费送2桶',
        money: 290,
        type: 'points'
      }]
  },
  toPurchase(event) {
    console.log(event)
    let nowItem = event.currentTarget.dataset.nowitem
    let url = ''
     app.data.nowItem = nowItem
    if (nowItem.type ==='member') {
      url = '/pages/rechargeList/member/member'
    } else {
      url = '/pages/myWallet/recharge/recharge'
    }
    wx.navigateTo({
      url: url
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