// pages/setting/setting.js
Page({

  /**
   * 页面的初始数据
   */
  
  data: {
    phoneNumber:12345678909,
    settingList:[{
      title: '绑定或修改手机号',
      jumpurl:'/pages/setting/setPhone/setPhone'
    }, {
        title: '修改登录密码',
        jumpurl: '/pages/setting/setPsw/setPsw'
      }, {
        title: '修改/忘记支付密码',
        jumpurl: '/pages/setting/setPsw/setPsw?title=修改/忘记支付密码'
      }, {
        title: '地址管理',
        jumpurl: '/pages/address/address'
      }]
  },
  toSetting(e) {
   if(this.data.phoneNumber) {
     wx.navigateTo({
       url: e.currentTarget.dataset.jumpurl + '?phoneNumber=' + this.data.phoneNumber
     })
     return false;
   }
    wx.navigateTo({
      url: e.currentTarget.dataset.jumpurl
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