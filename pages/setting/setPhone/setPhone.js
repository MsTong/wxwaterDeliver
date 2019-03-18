// pages/setting/setPhone/setPhone.js
const { $Toast } = require('../../../dist/base/index');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phoneNumber: '',
    code: ''
  },
  handleInputChange(e) {
    console.log(e)
    if (e.currentTarget.dataset.item === 'phoneNumber') {
      this.setData({
        'phoneNumber': e.detail.value
      })
    } else {
      this.setData({
        'code': e.detail.value
      })
    }
  },
  getcode() {
    //获取验证码

  },
  formSubmit(e) {
    console.log(this.data)
    if (!this.data.phoneNumber) {
      $Toast({ content: '电话号码不得为空！' })
    } else if (!this.data.code) {
      $Toast({ content: '验证码不得为空！' })
    }
  },
  formReset(e) {
    wx.navigateBack({
      delta: 1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.phoneNumber) {
      this.setData({ 'phoneNumber': options.phoneNumber })
      wx.setNavigationBarTitle({
        title: '修改手机号码'
      })
      return false;
    }
    wx.setNavigationBarTitle({
      title: '绑定手机号码'
    })
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