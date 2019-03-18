// pages/address/address.js
const { $Toast } = require('../../dist/base/index');
const api = require('../../utils/api.js')
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    default:0,
    addressList:[{
      name:'chenyuqing',
      phone:1234556788,
      address:'四合院'
    }]
  },
  setDefault(event) {
    //设置默认地址
    this.setData({ default: event.currentTarget.dataset.default})
    api._get('customer/setDefaultAddress').then(res => {
      if (res.code !== 0) {
        $Toast({
          content: res.msg
        });
        return false
      }
      this.setData({ default: event.currentTarget.dataset.default })
      console.log(res)
    }).catch(e => {
      $Toast({
        content: e
      });
      console.log(e)
    })
    wx.navigateBack({
      delta: 1
    })
  },
  todetail(event){
    app.data.nowAddress = event.currentTarget.dataset.address
    wx.navigateTo({ url: "/pages/addressdetail/addressdetail"})
  },
  toAdd() {
    wx.navigateTo({ url: "/pages/addressdetail/addressdetail?add=true" })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // api._get('customer/getAddressList').then(res => {
    //   if (res.code !== 0) {
    //     $Toast({
    //       content: res.msg
    //     });
    //   }
    //   this.setData({ addressList: res.data.addressList })
    //   console.log(res)
    // }).catch(e => {
    //   $Toast({
    //     content: e
    //   });
    //   console.log(e)
    // })
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