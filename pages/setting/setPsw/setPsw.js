// pages/setting/setPsw/setPsw.js
const { $Toast } = require('../../../dist/base/index');
const api = require('../../../utils/api.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    oldPsw: '',
    newPsw: '',
    secPsw: '',
    phone: '',
    code: '',
    titleObj: { oldPsw: '原始密码', newPsw: '新密码', secPsw: '确认密码', phone: '手机号', code: '验证码' }
  },
  formReset() {
    wx.navigateBack({
      delta: 1
    })
  },
  formSubmit({ detail }) {
    for (let [index, val] of Object.entries(detail.value)) {
      if (val === '') {
        $Toast({
          content: this.data.titleObj[index] + '不得为空'
        })
        return false
      }
    }
    api._get('customer/addAddress').then(res => {
      if (res.code !== 0) {
        $Toast({
          content: res.msg
        });
      }
    }).catch(e => {
      console.log(e)
    })
    wx.navigateBack({
    delta: 1
  })
},
  getCode() {

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.title) {
      wx.setNavigationBarTitle({
        title: options.title
      })
      this.setData({'title':options.title})
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