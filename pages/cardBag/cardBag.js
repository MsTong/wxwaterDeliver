// pages/cardBag/cardBag.js
const {
  $Toast
} = require('../../dist/base/index')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myCardBag: [{
      title:'优惠卡',
      count:3,
      type:'discountCard',
      itemArr:[{
        name:'优惠卡1',
        money:'100元'
      }, {
          name: '优惠卡2',
          money: '100元'
        }, {
          name: '优惠卡3',
          money: '100元'
        }]
    }, {
        title: '积分卡',
        type: 'scoreCard',
        count: 3,
        itemArr: [{
          name: '优惠卡1',
          money: '100元'
        }, {
          name: '优惠卡2',
          money: '100元'
        }, {
          name: '优惠卡3',
          money: '100元'
        }]
      }, {
        title: '配送卡',
        type: 'sendCard',
        count: 3,
        itemArr: [{
          name: '优惠卡1',
          money: '100元'
        }, {
          name: '优惠卡2',
          money: '100元'
        }, {
          name: '优惠卡3',
          money: '100元'
        }]
      }]
  },
  checkAll(e) {
    console.log(e)
    wx.navigateTo({
      url: '/pages/cardBag/card/card?title=' + e.currentTarget.dataset.type.title
    })
  },
  toGet(e) {
    console.log(e)
    //发出请求
    $Toast({content:'领取成功'})
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