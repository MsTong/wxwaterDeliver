// pages/myWallet/recharge/recharge.js
var app = getApp();
const {
  $Toast
} = require('../../../dist/base/index');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canInput: -1,
    inputValue: '',
    selectArr: [{
      id: 1,
      name: '30吉币',
    }, {
      id: 2,
      name: '60吉币'
    }, {
      id: 3,
      name: '150吉币'
    }, {
      id: 4,
      name: '300吉币',
    }, {
      id: 4,
      name: '其他金额'
    }],
    current: '30吉币',
    money: 30,
    position: 'left'
  },
  handleSelect({
    detail = {}
  }) {
    if (detail.value === '其他金额') {
      this.setData({
        current: detail.value,
        money: 0,
        canInput: 0
      })
      return false
    }
    this.setData({
      current: detail.value,
      money: parseFloat(detail.value),
      inputValue:'',
      canInput:-1
    });
  },
  doInput({
    detail
  }) {
    this.setData({
      money: detail.value
    })
  },
  toPay() {
    console.log(this.data.money)
    if (this.data.money == 0) {
      console.log(this.data.money)
      $Toast({
        content: '请输入充值金额'
      })
      return false
    }
    wx.navigateTo({
      url: '/pages/myWallet/pay/pay?money=' + this.data.money,
    })
  },
  onLoad: function (options) {
    let nowItem = app.data.nowItem
    console.log(nowItem)
    if (nowItem.type === 'points') {
      //显示积分的充值
      this.setData({
        current: '30积分',
        money: 30,
        selectArr: [{
          id: 1,
          name: '30积分',
        }, {
          id: 2,
          name: '60积分'
        }, {
          id: 3,
          name: '150积分'
        }, {
          id: 4,
          name: '300积分',
        }, {
          id: 4,
          name: '其他金额'
        }]
      })
      if ([30, 60, 150, 300].indexOf(nowItem.money) === -1) {
        this.setData({
          money: nowItem.money,
          current: '其他金额',
          canInput:0,
          inputValue: nowItem.money
        })
      }
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
    app.data.nowItem = ''
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